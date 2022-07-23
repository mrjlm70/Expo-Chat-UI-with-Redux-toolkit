import { View, Text, StyleSheet, Button } from "react-native";

const LoginFirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LoginFirstScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("chat");
        }}
        title='chat'
      />
    </View>
  );
};
export default LoginFirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});
