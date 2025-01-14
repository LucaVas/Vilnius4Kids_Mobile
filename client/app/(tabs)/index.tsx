import {StyleSheet, Text, View} from "react-native";
import {Link} from 'expo-router'

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Link href="/favourites" style={styles.button}>Go to Favourites</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
    },
})