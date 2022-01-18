import { useState } from 'react';
import { Controls } from 'components/Reader/Controls';
import { Progress } from 'components/Reader/Progress';
import { Publication } from 'components/Reader/Publication';

export const Reader = ({ items }) => {
  const [publicationIndex, setPublicationIndex] = useState(0);

  const changePublication = value => {
    setPublicationIndex(index => index + value);
  };

  const publication = items[publicationIndex];

  return (
    <div>
      <Controls
        onPrevClick={() => changePublication(-1)}
        onNextClick={() => changePublication(1)}
        current={publicationIndex + 1}
        total={items.length}
      />
      <Progress current={publicationIndex + 1} total={items.length} />
      <Publication item={publication} />
    </div>
  );
};
