/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '21690029-4e3c1e0e912ed1ce10e7f026d',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchPixabayImgs = async ({ q, page }) => {
  return await axios.get('', { params: { q, page } });
};
export default { fetchPixabayImgs };
