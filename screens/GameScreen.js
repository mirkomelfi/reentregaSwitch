import Card from "../components/Card";
import { StyleSheet, Text, View,Button } from 'react-native';
import { useEffect,useState } from "react";
const GameScreen=()=> {

    const [currentGuess,setCurrentGuess]=useState();
    const [win,setWin]=useState(false);
    const [lose,setLose]=useState(false);
    const [result,setResult]=useState(false);
    useEffect(()=>{
        setCurrentGuess(Math.floor(Math.random()*(10-1)+1))
    }
    )

    const handleWin=()=>{
        setWin(true)
        setResult(true)
    }
    const handleLose=()=>{
        setLose(true)
        setResult(true)
    }


    return (
        <View style={styles.container}>
            <Text>Suposicion op </Text>
            <Text>{currentGuess} </Text>

            <Card newStyles={styles.buttonContainer}>
                <Button title="coincide" onPress={handleWin} />
                <Button title="no coincide" onPress={handleLose} />

            </Card>
            
            {result&&(
            win?
            (
                <Card newStyles={{marginTop:50,width:150}}>
                    <Text>Ganaste!!</Text>
                </Card>
            )
            :
                (<Card newStyles={{marginTop:50,width:150}}>
                    <Text>Perdiste!!</Text>
                </Card>))
           }
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:"center",
    },
    buttonContainer:{
        width:400,
        flexDirection:"row",
        justifyContent:"center",
        marginTop:15,
    }
  });
  
  export default GameScreen
