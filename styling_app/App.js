import { View, Text, StyleSheet } from 'react-native'


export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.BlueboxContainer}>
                <Text>Style App</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: { flex: 1, backgroundColor: "plum", padding: 60 },
        BlueboxContainer: {
            backgroundColor: 'yellow',
            height: 100,
            width: 100,
            color: "white"
        }
    }
)