import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    // <View style={{flex:1,  backgroundColor: 'plum'}}>
    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "yellow"}}>Hellow</Box>
      <Box style={{ backgroundColor: "white"}}>Hellow1</Box>
      <Box style={{ backgroundColor: "green"}}>Hellow2</Box>
      {/* <Box style={{ backgroundColor: "red" , flex: 1  }}>Hellow2</Box>
      <Box style={{ backgroundColor: "lightblue", flex: 1  }}>Hellow3</Box>
      <Box style={{ backgroundColor: "white", flex: 1  }}>Hellow4</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "baseline", 
    marginTop: 60,
    borderWidth: 6, 
    borderColor: 'red',
  },
});
