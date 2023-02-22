/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri1, setUri1] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceOne);

  const playButtonTapped1 = () => {
    let randomNumber = Math.floor((Math.random()*6)) + 1;
    switch (randomNumber) {
      case 1:
        setUri1(DiceOne);
        break;
      case 2:
        setUri1(DiceTwo);
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour);
        break;
      case 5:
        setUri1(DiceFive);
        break;
      case 6:
        setUri1(DiceSix);
        break;
      default:
        setUri1(DiceOne);
        break;
    }
    playButtonTapped2()
  }
  const playButtonTapped2 = () => {
    let randomNumber = Math.floor((Math.random()*6)) + 1;
    switch (randomNumber) {
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;
      default:
        setUri2(DiceOne);
        break;
    }
  }
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection :"row"}}>
          <Image style={styles.image} source={uri1}/>
          <Image style={styles.image} source={uri2}/>
        </View>
        <TouchableOpacity onPress={playButtonTapped1}>
          <Text style={styles.gamePlayButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


export default App;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : '#222831',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image : {
    width :150,
    height: 150,
  },
  gamePlayButton :{
    fontSize: 20,
    margin: 30,
    color: '#F2A365',
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold'
  }
})