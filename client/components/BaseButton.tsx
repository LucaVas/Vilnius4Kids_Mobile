import {Pressable, StyleSheet, Text, View} from "react-native";

type Props = {
    label: string
}

export default function BaseButton({label}: Props) {
    return(
        <View>
            <Pressable style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {},
    buttonLabel: {}
})