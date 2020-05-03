/**
 * @author Bruno Prdt
 * app/container/MoviePlayer/VideoPlayer
 */
import React from "react";
import ReactPlayer from 'react-player';
import '../../css/VideoPlayer.css';

function VideoPlayer(props) {

    const handleEnded = () => {
        console.log("video Ended");
    };

    return (
        <div className="videoPlayer">
            <ReactPlayer
                url={props.videoUrl}
                controls={true}
                playing={false}
                width="100%"
                height="100%"
                style={{position: "absolute", top: "0", left: "0"}}
                light={props.imageUrl}
                onEnded={props.handleEnded}
            />
        </div>
    );
}

export { VideoPlayer };