import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import Form from "../src/components/general/form";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome! It's dinner time!</Text>
      
      <Form />

      <Link href="/reservation">Make a reservation</Link>
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
