import {StyleSheet, View} from "react-native";
import MapView, {PROVIDER_DEFAULT} from "react-native-maps";
import {useState} from "react";
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

    const onPlaygroundSelect = (playground: Playground) => {
        console.log("Playground select: " + playground.id);
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                mapType="terrain"
                provider={PROVIDER_DEFAULT}
                region={region}
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