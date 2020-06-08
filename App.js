import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGame from './components/gamescreen/startGame';
import PlayGame from './components/gamescreen/playGame';
import GameOver from './components/gamescreen/gameOver';


export default function App() {
  const [userInput, setUserInput] = useState();
  const [confirmTransition, setTransitionState] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const getUserInput =(userNumber)=>{
    setUserInput(userNumber)
    setTransitionState(true)
  }
  const headerTile = 'Guess a number'
  const gameScreenTitle = 'Start a new game'
  const {container} = styles;
  let gamePage;
  if(confirmTransition)
  {
    if(gameOver){
      gamePage = <GameOver />
    }else{
      gamePage = <PlayGame userChoice={userInput} setGameOver={setGameOver}/>
    }
    
  }else{
    gamePage = <StartGame gameScreenTitle={gameScreenTitle} getUserInput={getUserInput}/>
  }
  return (
    <View style={container}>
      <Header title={headerTile}/>
      {gamePage}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
