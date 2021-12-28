import styled from 'styled-components';
import Player from 'react-player/vimeo';

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

export const ReactPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
