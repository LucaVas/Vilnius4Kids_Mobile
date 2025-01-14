import {StyleSheet, Text, View} from "react-native";

export default function FavouritesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favourites screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {}
})