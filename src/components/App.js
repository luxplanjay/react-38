import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { VideoList } from 'components/VideoList/VideoList';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';
import videos from '../videos.json';
import axios from 'axios';
import { SearchForm } from './SearchForm/SearchForm';

export class App extends Component {
  state = {
    selectedVideo: null,
    images: [],
    searchTerm: null,
  };

  setSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };

  fetchImages = async () => {
    const query = this.state.searchTerm ?? 'flowers';
    const url = `https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=${query}&image_type=photo`;
    const { data } = await axios.get(url);
    this.setState({ images: data.hits });
  };

  async componentDidMount() {
    this.fetchImages();
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchImages();
    }
  }

  // selectVideo = link => {
  //   toast.success('Видео выбрано!!!');
  //   this.setState({ selectedVideo: link });
  // };

  render() {
    // const { selectedVideo } = this.state;

    return (
      <>
        <Toaster position="bottom-right" />
        <SearchForm onSubmit={this.setSearchTerm} />
        {/* <VideoList
          videos={videos}
          onSelect={this.selectVideo}
          selectedVideo={selectedVideo}
        />
        <VideoPlayer url={selectedVideo} /> */}
      </>
    );
  }
}
