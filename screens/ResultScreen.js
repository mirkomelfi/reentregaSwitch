
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';



export default function App() {

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