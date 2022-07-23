import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../constanst/Colors";

const Message = ({ time, isLeft, message, fname, image }) => {
  const isOnLeft = (type) => {
    if (isLeft && type === "messageContainer") {
      return {
        alignSelf: "flex-start",
        backgroundColor: Colors.four,
        borderTopLeftRadius: 0,
      };
    } else if (isLeft && type === "message") {
      return {
        // color: Colors.tow,
      };
    } else if (isLeft && type === "time") {
      return {
        // color:'tomato',
      };
    } else {
      return {
        borderTopRightRadius: 0,
      };
    }
  };

  return (
    <View style={styles.container}>
      {isLeft ? (<View style={styles.details}>
        <Image style={styles.image} source={image} />
        <Text style={styles.nickName}>{fname}</Text>
      </View>) : null}

      <View style={[styles.messageContainer, isOnLeft("messageContainer")]}>
        <View style={styles.messageView}>
          <Text style={[styles.message, isOnLeft("message")]}>{message}</Text>
        </View>
        <View style={styles.timeView}>
          <Text style={[styles.time, isOnLeft("time")]}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    marginVertical: 5,
  },
  messageContainer: {
    backgroundColor: Colors.tow,
    maxWidth: "80%",
    alignSelf: "flex-end",
    flexDirection: "column",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  messageView: {
    backgroundColor: "transparent",
    maxWidth: "80%",
  },
  timeView: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    paddingLeft: 10,
  },
  message: {
    color: Colors.white,
    alignSelf: "flex-start",
    fontSize: 15,
  },
  time: {
    color: Colors.white,
    alignSelf: "flex-end",
    fontSize: 10,
  },
  details: {
    flexDirection: "row",
    // backgroundColor:'pink',
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    marginLeft: 12,
    marginBottom:5,
    
  },
  nickName: {
    color: Colors.white,
    fontSize: 15,
    // alignSelf:'flex-start',
    // backgroundColor:'pink',
    marginTop: 10,
    marginLeft:5,
  },
});
