import React from 'react';
import Card from './Card';
 

export default class CardList extends React.Component {
    constructor (props ) {
        super(props);
        
    }

    render() {
         const {data,handleOnclick}=this.props;
         
        return ( 
            <div >
            {data.map((element,index)=>
       <Card {...element} key={index} handleOnclick={handleOnclick} />)}   

            </div>
        )
    }
}

