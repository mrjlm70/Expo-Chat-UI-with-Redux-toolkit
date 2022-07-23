import { StyleSheet, View } from "react-native";
import React from "react";
import BackGround from "../../../assets/BustanPic/bg_pattern.svg";
import Colors from "../../constanst/Colors";
import { useDimensions } from "@react-native-community/hooks";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

const ChatScreen = ({ navigation }) => {
  // const { screen } = useDimensions();

  return (
    <View style={styles.container}>
      <BackGround
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <ChatHeader navigation={navigation} />

      <MessageList />

      <ChatInput />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.four,
  },
});
