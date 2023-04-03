import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function Reservation() {
    return (
      <View style={styles.container}>
        <Text>Choose your plates!</Text>
        <Link href="/result">Check result</Link>
        <Link href="/reservation">Go Back</Link>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });