import { View, Text, StyleSheet } from 'react-native'


export default function App() {
    return (
        <View style={styles.container}>
            <View style={[styles.darkMode]}>
                <Text style={[styles.darkModetext]}>Style App</Text>
            </View>
            <View style={[styles.BlueboxContainer, styles.box, styles.boxShadow, styles.androidShadow]}>
                <Text style={{borderRadius: 5, backgroundColor: 'red'}}>Style App</Text>
            </View>
            <View style={[styles.YellowboxContainer, styles.box]}>
                <Text  style={{borderRadius: 5, backgroundColor: 'yellow'}}>Style App</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: { flex: 1, backgroundColor: "plum", padding: 60 },
        darkMode: {
            backgroundColor: 'black',
            
        },
        darkModetext: {
            color: "white"
        },
        BlueboxContainer: {
            backgroundColor: 'lightblue',

        },
        YellowboxContainer: {
            backgroundColor: 'white',
        },
        box: {
            height: 250,
            width: 250,
            padding: 0,
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginHorizontal: 10,
            marginVertical: 10,
            borderWidth: 2,
            borderColor: 'purple',
            borderRadius: 5, 
        },
        boxShadow: {
            shadowColor: "#333333",
            shadowOffset:{
                width: 6,
                height: 6
            },
            shadowOpacity: 1,
            shadowRadius: 4,
        },
        androidShadow: {
            elevation: 10,
        }
    }
)