import axios from 'axios';

export default {
  async getProjects() {
    const res = await axios.get('https://pledge-camp-backend.herokuapp.com/projects');
    return res.data;
  },
  async postFilters(paramsObj) {
    // console.log('posted', paramsObj);
    const res = await axios.post('https://pledge-camp-backend.herokuapp.com/filters', paramsObj);
    return res.data;
  },
};
