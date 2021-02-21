import React from 'react';
import ReactPlayer from 'react-player/youtube'




export default class CurrentVideo  extends React.Component {
    constructor (props ) {
        super(props);
        this.state={
            like:0,
            dislike:0
        }
        this.Counter=this.Counter.bind(this)
        this.Counter2=this.Counter2.bind(this)
    }


    Counter () {
        let counter =  this.state.like+1
        this.setState({
            like:counter
        })
    }

    Counter2(){
        const counter2=this.state.dislike+1
        this.setState({
            dislike:counter2
        })
    }

    render() {
        const {currentVideo}=this.props;

        return (
            <div >
             <ReactPlayer controls={true}
              url = {currentVideo.videoUrl} />
                <h2>{currentVideo.name}</h2>
                <p>{currentVideo.description}</p>
                <div>
                    <span onClick={this.Counter} >👍{this.state.like} </span>
                    <span onClick={this.Counter2}>👎{this.state.dislike} </span>
                </div>

            </div>

        )
    }
}
