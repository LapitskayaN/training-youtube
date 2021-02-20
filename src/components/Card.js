import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props){
        super(props);
    }    

    render(){
        const {image, name,description,handleOnclick}=this.props;
           return (
                <div className="Card" onClick={()=>handleOnclick(name)}>
                    <img className="image" src={image}/> 
                    <div>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        </div>             
                </div>  
           )
        
    }
}

 

 

