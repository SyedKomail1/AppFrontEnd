import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <View style={styles.box}>
        <View style={styles.lbox} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    backgroundColor: "black",
    height: 50,
    width: "100%",
    alignContent: "center",
    flexDirection: "row",
  },
  lbox: {
    backgroundColor: "white",
    height: 40,
    marginTop: 5,
    width: "5%",
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Card;
