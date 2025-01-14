import {Image} from 'expo-image'
import {StyleSheet} from "react-native";

type Props = {
    imgSource: string
}

export default function ImageViewer({imgSource}: Props) {
    return (
        <Image source={imgSource} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        borderRadius: 18
    }
})