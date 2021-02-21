import React from 'react';
import Card from './Card';


export default class CardList extends React.Component {
    constructor (props ) {
        super(props);

    }

    render() {
         const {handleOnclick, dataF, isFiltered,showAll} =this.props;

        return (
            <div >
            {isFiltered ?  <button onClick={()=>showAll() }>Show all movie </button> : null}
            {dataF.map((element,index)=>
             <Card {...element} key={index} handleOnclick={handleOnclick} />)}
            </div>
        )
    }
}

