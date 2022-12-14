
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';


export default function App() {
  
  const [userNumber,setUserNumber]=useState();
  const [loaded]=useFonts({
    Sono:require("./assets/fonts/Sono/Sono-Medium.ttf")
  })
  const handlerStartGame=(selectedNumber)=> {
    setUserNumber(selectedNumber);
  };


  let content=<StartGameScreen onStartGame={handlerStartGame} />
  
  if (userNumber){
    content=<GameScreen/>
  }

  if (!loaded){
    return null
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"} newStyles={{fontFamily:"Sono"}}></Header>
       {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});