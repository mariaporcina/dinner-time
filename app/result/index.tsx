import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function Reservation() {
    return (
      <View style={styles.container}>
        <Text>Check your reservation!</Text>
        <Link href="/login">Sair</Link>
        <Link href="/menu">Go Back</Link>
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