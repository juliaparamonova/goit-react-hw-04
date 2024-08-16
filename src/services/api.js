import axios from 'axios';

export const fetchImages = async ({ query, page = 1 }) => {
  const params = {
    headers: {
      'Accept-Version': 'v1',
    },
    params: {
      query,
      client_id: 'L1W1xX9WwjYLX3dsnsGVoFO8nd8ofzU-O_PQmtXy9SQ',
      page,
      perPage: 9,
    },
  };
  const { data } = await axios.get(
    'https://api.unsplash.com/search/photos',
    params
  );
  return data;
};
