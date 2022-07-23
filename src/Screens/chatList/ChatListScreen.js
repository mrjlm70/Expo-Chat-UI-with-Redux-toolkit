import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChatListScreen</Text>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})