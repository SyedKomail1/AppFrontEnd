import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  headerText: {
    //paddingTop: 30,
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "flex-end",
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: width / 1.1,
    padding: 8,
    marginTop: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.3,
  },
  input: {
    color: "#000",
  },
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: 20,
    color: "deepskyblue",
    padding: 10,
  },
  baseTextL: {
    fontSize: 20,
    paddingTop: 10,

    textAlign: "left",
  },
  baseText3: {
    fontSize: 20,
    paddingTop: 10,

    textAlign: "left",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  headingStandText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "deepskyblue",
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "deepskyblue",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backgroundrec: {
    backgroundColor: "deepskyblue",
    padding: 10,
  },
  searchText: {
    backgroundColor: "black",
    width: width / 1.1,
    padding: 8,
    marginTop: 1,
    borderRadius: 20,
    shadowColor: "#000",
  },
  ImageContainer: {
    flexDirection: "row",
    marginTop: 6,
    paddingRight: 70,
  },
  ImageView: {
    width: width / 3,
    height: height / 3.5,
    //borderWidth:2,
    borderColor: "#000",
    marginHorizontal: 10,
  },
  Image1: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  imageButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "30%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  Icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 1,
  },
});
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
