
import './App.css';
import CardList from "./components/CardList"
import CurrentVideo from "./components/CurrentVideo"
import data from './data'
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props ) {
    super(props);
    this.state = {
    pickedMovie:data[0]}
    this.handleOnclick=this.handleOnclick.bind(this)
  }

   handleOnclick (movieTitle) {
    const findMoviyByTitle = data.find( element => element.name === movieTitle )
    this.setState({pickedMovie: findMoviyByTitle })
   }

  render() {
    const {pickedMovie}=this.state;
    const handleOnclick=this.handleOnclick;
    return (
      <div className="App">
        <CurrentVideo currentVideo = {pickedMovie} />
        <CardList data={data}
        handleOnclick={handleOnclick}

        />
      </div>
    )
  }
}



