import React from 'react';
import ReactPlayer from 'react-player/youtube'


export default class CurrentVideo  extends React.Component {
    constructor (props ) {
        super(props);    
    }
    


    render() {
        const {currentVideo}=this.props;
       
        return ( 
            <div >
             <ReactPlayer controls={true} 
              url = {currentVideo.videoUrl} />
                <h2>{currentVideo.name}</h2>
                <p>{currentVideo.description}</p>
            </div>
            
        )
    }
}
