import React,{ useState, useEffect } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [id, setId] = useState('');
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotoData = async () => {
      if (id === '') {
        setPhotoData(null);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const data = await response.json();
        setPhotoData(data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchPhotoData();
  }, [id]);

  const handleInputChange = (event) => {
    setId(event.target.value);
    setPhotoData(null); // Reset the photoData state when input value changes
  };

  return (
    <div>
      <input type="number" value={id} onChange={handleInputChange} />
      {loading && <Loader />} {/* Render the Loader component when loading is true */}
      {photoData && !loading && <PhotoFrame url={photoData.url} title={photoData.title} />} {/* Render the PhotoFrame component when photoData is available and loading is false */}
    </div>
  );
};

export default App;
