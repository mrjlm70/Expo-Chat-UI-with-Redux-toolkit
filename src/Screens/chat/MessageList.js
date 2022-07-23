import { ScrollView } from "react-native";
import React, { useState, useRef } from "react";
import Colors from "../../constanst/Colors";
import Message from "./Message";
import { useSelector, useDispatch } from "react-redux";

const MessageList = () => {
  const messages = useSelector((state) => state.messages);
  const user = useRef(0);
  const scrollView = useRef();

  return (
    <ScrollView
      overScrollMode="never"
      style={{
        backgroundColor: Colors.perpule,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
      }}
      ref={(ref) => (scrollView.current = ref)}
      onContentChange={() => {
        scrollView.current.scrollToEnd({ Animated: true });
      }}
    >
      {messages.map((message, index) => (
        <Message
          key={message.index}
          time={message.time}
          isLeft={message.user !== 0}
          message={message.content}
          fname={message.fname}
          image={message.image}
        />
      ))}
    </ScrollView>
  );
};

export default MessageList;
