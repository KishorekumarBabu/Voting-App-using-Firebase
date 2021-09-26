import React, { Component } from "react";

class ShowVideo extends Component {
  render() {
    return (
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/1roy4o4tqQM"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
          title="Pokemon"
        />
      </div>
    );
  }
}

export default ShowVideo;
