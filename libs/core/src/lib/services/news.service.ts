import axios from 'axios';

const getNews = async () => {
  const response = await axios.get('http://localhost:8000/news', {
    headers: {
      ContentType: 'application/json',
    }
  });

  return response.data;
};

export default getNews;
