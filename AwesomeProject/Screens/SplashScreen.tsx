import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function SplashScreen() {

  return (
    <>
      <View style={styles.container}>
         <View style={{flex: 0.2, justifyContent: 'center' , alignItems: 'center'}}>
             <Image style={{width: 85, height: 130}} source={require('../assets/launch_screen.png')} />
             
         </View>
           <Text style={styles.text}>My First Mobile App</Text>
      </View>
    </>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#0077b6',
    fontWeight: 'bold'
  }
})