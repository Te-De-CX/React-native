import { View, Text, StyleSheet, ImageBackground,Pressable } from 'react-native'
import background from "@/assets/images/background.jpg"
import { Link } from 'expo-router'
// import React from 'react'

const app = () => {
  return (
    <View style={styles.container} >
      <ImageBackground
      source={background}
      resizeMode='cover'
      style={styles.image}
      >
        <Text style={styles.text}>Coffie shop</Text>
        <View style={styles.contain}></View>
        <Link href="/explore" asChild >
          <Pressable>
            <Text style={styles.text} >Lets Explore</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "white",
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding:5,
    marginVertical:10,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },
  contain: {
    width:300,
    height:300,
    borderRadius:500,
    backgroundColor: "blue",
    justifyContent:'center',
    
    alignSelf: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'cover',
    flex: 1,
    justifyContent: 'center'
  }
})