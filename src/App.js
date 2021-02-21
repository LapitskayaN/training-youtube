
import './App.css';
import CardList from "./components/CardList"
import CurrentVideo from "./components/CurrentVideo"
import data from './data'
import React, { Component } from 'react'
import SearchBar from './components/SearchBar'

export default class App extends Component {
  constructor (props ) {
    super(props);
    this.state = {
    pickedMovie:data[0],
    movieNameForSearch:""
    }
    this.handleOnclick=this.handleOnclick.bind(this)
    this.handleSort=this.handleSort.bind(this)
    this.showAll = this.showAll.bind(this);
  }



   handleOnclick (movieTitle) {
    const findMoviyByTitle = data.find( element => element.name === movieTitle )
    this.setState({pickedMovie: findMoviyByTitle })
   }

   handleSort(movieName ){
     this.setState({
      ...this.state,
      movieNameForSearch:  movieName
     })
   }

   showAll() {
    this.setState({
      movieNameForSearch: ""
    })
  }



  render() {
    const {pickedMovie,movieNameForSearch }=this.state;
    const handleSort=this.handleSort;
    const handleOnclick=this.handleOnclick;
    const dataF=data.filter((oneMovie) =>{ return oneMovie.name
      .includes(movieNameForSearch) } )
     return (
      <div className="App">
        <div>
        <SearchBar handleSort={ handleSort}/>
        <CurrentVideo currentVideo = {pickedMovie} />
        </div>
        <CardList dataF={dataF}
        handleOnclick={handleOnclick}
        isFiltered={data.length!==dataF.length}
        showAll={this.showAll}
        />
      </div>
    )
  }
}



