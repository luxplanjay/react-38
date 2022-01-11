import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { VideoList } from 'components/VideoList/VideoList';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';
import videos from '../videos.json';

export class Example1 extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    toast.success('Видео выбрано!!!');
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;

    return (
      <>
        <Toaster position="bottom-right" />
        <VideoList
          videos={videos}
          onSelect={this.selectVideo}
          selectedVideo={selectedVideo}
        />
        <VideoPlayer url={selectedVideo} />
      </>
    );
  }
}
