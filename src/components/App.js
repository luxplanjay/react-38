import { Component } from 'react';
import ReactPlayer from 'react-player/vimeo';
import toast, { Toaster } from 'react-hot-toast';
import { VideoList } from 'components/VideoList/VideoList';
// import { Collapsible } from 'components/Collapsible/Collapsible';
import videos from '../videos.json';

// const user = {
//   meta: {
//     hasFullAccess: false,
//   },
// };

export class App extends Component {
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
        {selectedVideo && <ReactPlayer url={selectedVideo} controls />}

        {/* <Collapsible triggerText="Добавить заметку" mb={5}>
          Some collapsible content 1
        </Collapsible>
        <hr />
        <Collapsible isOpen triggerText="Показать" mt={20}>
          Some collapsible content 2
        </Collapsible>
        <hr />
        <Collapsible
          isOpen
          isDisabled={!user.meta.hasFullAccess}
          triggerText="Сделать что-то"
          mb={3}
          mt={16}
        >
          Some collapsible content 3
        </Collapsible>
        <hr />
        <Collapsible
          isOpen
          triggerText="Сделать что-то 4"
          triggerPosition="bottom"
        >
          Some collapsible content 4
        </Collapsible> */}
      </>
    );
  }
}
