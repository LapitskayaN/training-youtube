import React from 'react';
import Card from './Card';


export default class CardList extends React.Component {
    constructor (props ) {
        super(props);

    }

    render() {
         const {handleOnclick, dataF}=this.props;

        return (
            <div >
            {dataF.map((element,index)=>
       <Card {...element} key={index} handleOnclick={handleOnclick} />)}

            </div>
        )
    }
}

