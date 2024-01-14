import { StatusBar, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function ChangeColor() {


  const [defaultColor, setDefaultColor] = useState('#6FD561');

  const changeColor = () => {
    const hashCode = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++) {
      let randomChar = hashCode[Math.floor(Math.random() * 16)];
      color += randomChar;
    }
    setDefaultColor(color);
  }

  return (

    <>
   
      <View style={[styles.container, {backgroundColor:defaultColor}]}>
        <TouchableOpacity onPress={changeColor}>
          <View style={styles.actonBtn}>
            <Text style={styles.actonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
  
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  actonBtn: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#6A1B4D',
    borderRadius: 8
  },

  actonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
})