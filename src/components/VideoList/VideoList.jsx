import styled from 'styled-components';

const ListItem = styled.li`
  padding: ${props => props.theme.spacing(1)};
  cursor: pointer;
  color: ${({ selected, theme }) => {
    return selected ? theme.colors.red : theme.colors.primaryText;
  }};

  &:hover {
    color: ${props => props.theme.colors.secondaryText};
  }
`;

export const VideoList = ({ videos, selectedVideo, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        <ListItem
          key={video.id}
          onClick={() => onSelect(video.link)}
          selected={selectedVideo === video.link}
        >
          {video.link}
        </ListItem>
      ))}
    </ul>
  );
};
