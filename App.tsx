import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import dice1 from './assets/dice1.png'
import { trigger } from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};


export default function App() {

    const [diceNumber, setDiceNumber] = useState(1)
    let x
  const rollTheDice = () => {
     x=Math.floor(Math.random()*6+1);
     setDiceNumber(x)

    //  trigger("impactHeavy", options);
    
  }

  const diceImage = {
    1: require('./assets/dice1.png'),
    2: require('./assets/dice2.png'),
    3: require('./assets/dice3.png'),
    4: require('./assets/dice4.png'),
    5: require('./assets/dice5.png'),
    6: require('./assets/dice6.png')
  }
  
  return (
    <View style={styles.container}>
     <Image 
          source={diceImage[diceNumber]}
          style={{width: 200, height: 200}}
        />
      <View style={styles.btn}>
        <TouchableOpacity onPress={rollTheDice}>
        <Text style={styles.btnTxt}>Roll The Dice</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    // backgroundColor1: 'grey'
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 90
  },
  btnTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000'
  }
})