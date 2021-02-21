import React from 'react';
import Card from './Card';


export default class CardList extends React.Component {
    constructor (props ) {
        super(props);

    }

    render() {
         const {handleOnclick, dataF, isFiltered,showAll,isEmpty } =this.props;

        return (
            <div >
            {isFiltered ?  <button onClick={()=>showAll() }>Show all movie </button> : null}
            {isEmpty?<p>No video</p>:null}
            {dataF.map((element,index)=>
             <Card {...element} key={index} handleOnclick={handleOnclick} />)}
            </div>
        )
    }
}

