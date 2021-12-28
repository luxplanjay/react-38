import { Component } from 'react';
import { PlayerWrapper, ReactPlayer, Loader } from './VideoPlayer.styled';

export class VideoPlayer extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    const playerSize = showLoader ? 0 : '100%';

    return (
      <PlayerWrapper>
        {showLoader && <Loader>Загружаем видео...</Loader>}

        {url && (
          <ReactPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            controls
            onReady={() => this.setState({ isVideoLoaded: true })}
          />
        )}
      </PlayerWrapper>
    );
  }
}
