import {StyleSheet, View} from "react-native";
import MapView, {PROVIDER_DEFAULT} from "react-native-maps";
import {useState} from "react";
import {usePlaygroundStore} from "@/store/playgroundStore";
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

    const onRegionChange = (region: Region) => {
        setRegion(region);
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map} provider={PROVIDER_DEFAULT} region={region} onRegionChange={onRegionChange}
                     showsMyLocationButton>
                {playgrounds.map(playground => (
                    <PlaygroundMarker key={playground.id} playground={playground}/>
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