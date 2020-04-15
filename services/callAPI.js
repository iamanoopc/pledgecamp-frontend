import axios from 'axios';

export default {
  async getProjects() {
    const res = await axios.get('http://localhost:8000/projects');
    return res.data;
  },
  async postFilters(paramsObj) {
    // console.log('posted', paramsObj);
    const res = await axios.post('http://localhost:8000/filters', paramsObj);
    return res.data;
  },
};
