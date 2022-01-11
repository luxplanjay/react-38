import { useState, useEffect } from 'react';
import { PlayerWrapper, ReactPlayer, Loader } from './VideoPlayer.styled';

export const VideoPlayer = ({ url }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(false);
  }, [url]);

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
          onReady={() => setIsVideoLoaded(true)}
        />
      )}
    </PlayerWrapper>
  );
};
