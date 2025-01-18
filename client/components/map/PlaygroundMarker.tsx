import {type Playground} from "@/store/playgroundStore";
import {Marker} from "react-native-maps";

type Props = {
    onPress: () => void;
    playground: Playground
}

export default function PlaygroundMarker({playground, onPress}: Props) {
    return (
        <Marker
            onPress={() => onPress()}
            key={playground.id}
            coordinate={playground.coordinate}
            title={playground.id.toString()}
        />
    )
}