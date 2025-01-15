import {type Playground} from "@/store/playgroundStore";
import {Marker} from "react-native-maps";

type Props = {
    playground: Playground
}

export default function PlaygroundMarker({playground}: Props) {
    return (
        <Marker
            key={playground.id}
            coordinate={playground.coordinates}
            title={playground.id.toString()}
        />
    )
}