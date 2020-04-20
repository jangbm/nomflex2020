import React from "react";
import ReactPlayer from "react-player";

export default class extends React.Component {
  render() {
    const { VideoId } = this.props;
    return (
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${VideoId}`}
        controls={true}
      ></ReactPlayer>
    );
  }
}
