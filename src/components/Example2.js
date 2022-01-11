import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { SearchForm } from './SearchForm/SearchForm';

const getImages = async searchTerm => {
  const query = searchTerm ?? 'flowers';
  const url = `https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=${query}&image_type=photo`;
  const { data } = await axios.get(url);
  return data.hits;
};

export const Example2 = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImages(searchTerm);
      setImages(images);
    };
    fetchImages();
  }, [searchTerm]);

  return (
    <>
      <Toaster position="bottom-right" />
      <SearchForm onSubmit={setSearchTerm} />
    </>
  );
};
