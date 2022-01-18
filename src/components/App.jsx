import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Player } from 'pages/Player';
import { Images } from 'pages/Images';
import { Reader } from 'pages/Reader';
import publications from '../publications.json';

const NotFound = () => {
  return <h1>NotFound</h1>;
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/player" element={<Player />} />
        <Route path="/reader" element={<Reader items={publications} />} />
        <Route path="/images" element={<Images />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
