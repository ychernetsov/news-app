export const getNews = async (): Promise<Response> => {
  return await fetch('http://localhost:8000/news', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  });
};