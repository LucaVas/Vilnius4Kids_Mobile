import {StyleSheet, View} from "react-native";
import MapView, {PROVIDER_DEFAULT} from "react-native-maps";
import {useRef, useState} from "react";
import {Playground, usePlaygroundStore} from "@/store/playgroundStore";
import PlaygroundMarker from "@/components/map/PlaygroundMarker";


const initialRegion = {
    latitude: 54.683835,
    longitude: 25.279269,
    latitudeDelta: 0.162178,
    longitudeDelta: 0.141252,
}
type Region = typeof initialRegion;

export default function Index() {

    const playgrounds = usePlaygroundStore((state) => state.playgrounds);
    const [region, setRegion] = useState<Region>(initialRegion)
    const mapViewRef = useRef<MapView>(null);

    const onPlaygroundSelect = (playground: Playground) => {
        const newRegion = {
            ...region,
            latitude: playground.coordinate.latitude,
            longitude: playground.coordinate.longitude,
        };
        mapViewRef.current?.animateToRegion(newRegion, 700);
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapViewRef}
                style={styles.map}
                mapType="terrain"
                provider={PROVIDER_DEFAULT}
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
                showsMyLocationButton
                showsUserLocation
                zoomControlEnabled
                zoomEnabled
                zoomTapEnabled
            >
                {playgrounds.map(playground => (
                    <PlaygroundMarker
                        key={playground.id}
                        playground={playground}
                        onPress={() => onPlaygroundSelect(playground)}/>
                ))}

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    }
})