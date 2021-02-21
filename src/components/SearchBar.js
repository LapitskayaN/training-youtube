import React, { Component } from 'react';



export default class SearchBar extends Component {


    render() {
        const {handleSort}=this.props;
        return (
            <div>
                <input type="text" placeholder='Search' onChange={(e) => handleSort(e.target.value)}/>


            </div>
        )
    }
}
