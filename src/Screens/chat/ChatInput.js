import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../../store/messagesSlice";

import Colors from "../../constanst/Colors";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleSendMsg = () => {
    const msg=message
    console.log(msg);
    dispatch(setMessages(msg));
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicrophone}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="emoticon-outline" size={30} color={Colors.three} />
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder="Type your message"
            style={styles.input}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity style={styles.rightIconButton}>
            <Icon name="paperclip" size={30} color={Colors.three} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <Icon
              name={message ? "send" : "microphone-outline"}
              size={30}
              color={Colors.three}
              onPress={handleSendMsg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  innerContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  inputAndMicrophone: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    flex: 3,
    marginRight: 5,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "transparent",
    paddingLeft: 20,
    color: Colors.perpule,
    flex: 3,
    maxHeight: 100,
    alignSelf: "center",
    fontSize: 18,
  },
  rightIconButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },
  sendButton: {},
});
