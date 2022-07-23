import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import Colors from "../../constanst/Colors";
import { NavigationContainer } from "@react-navigation/native";

const ChatHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon
          name='angle-left'
          size={50}
          color={Colors.white}
          onPress={()=>{ navigation.navigate('ChatList')}
          }
        />
      </TouchableOpacity>
      <View style={styles.profileOptions}>
        <TouchableOpacity style={styles.profile}>
          <Image
            style={styles.image}
            source={require("../../../assets/BustanPic/images.jpg")}
          />
          <View style={styles.usernamestatus}>
            <Text style={styles.username}>Friends</Text>
            <Text style={styles.member}>4 Members</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.option}>
          <TouchableOpacity style={{ paddingHorizontal: 20 }}>
            <Icon name='ellipsis-v' size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.four,
    paddingTop: 50,
    paddingBottom: 15,
  },
  backButton: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  profileOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    flex: 4,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 20,
    marginLeft: 10,
  },
  usernamestatus: {
    // backgroundColor:'pink',
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  username: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  member: {
    color: Colors.white,
    fontSize: 14,
    marginTop: 2,
  },
  option: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
