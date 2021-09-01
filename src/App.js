// import { render } from '@testing-library/react';
import React, {Component} from 'react';

class App extends Component{
  state = {
    count : 0,
    gameOver : false
  }

  incrementCount = () => {
    if(this.state.count === 10){
      this.setState({
        gameOver : true
      })
    }else{
      this.setState(prevState=>{
        return {
          count: prevState.count + 1
        }
      })
    } 
  }
  decrementCount = () =>{
    if(this.state.count > 0){
      this.setState(preState=>{
        return {
          count: preState.count - 1
        }
      });
    }
  }
  resetParent = ()=>{
    this.setState({
      count : 0,
      gameOver : false
    })
  }

  render() {
    const {count,gameOver}= this.state
    const {incrementCount,decrementCount}= this 
    return(
    <>
      <h1>Counter App</h1>
      <p>Count - {count}</p>
      <button disabled={gameOver}  onClick={incrementCount}>Increment</button>
      <button disabled={gameOver} onClick = {decrementCount}>Decrement</button>
      <IsOddOrEven count={count} gameOver={gameOver} resetParent={this.resetParent}/>
    </> 
    )   
  }
}
export default App;

class IsOddOrEven extends Component {
  resetCount = () =>{
    const {resetParent} = this.props 
    resetParent()

  }
  render(){
    const {count,gameOver}= this.props
    const numberState = this.props.count % 2 === 0 ? 'Even' : 'Odd'
    return (
    <>
      <p>{count}is {numberState}</p>
      {gameOver && <p>Game Over!!</p>}
      <button onClick = {this.resetCount}>Reset</button>    
    </>)
  }
}