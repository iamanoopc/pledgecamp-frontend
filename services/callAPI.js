import axios from 'axios';

export default {
  async getProjects() {
    const res = await axios.get('http://localhost:8000/projects');
    return res.data;
  },
  // async getFilteredProjects() {
  //   const res = await axios.get('http://localhost:8000/filteredProjects');
  //   return res.data;
  // },
  async getNotifications() {
    const res = await axios.get('http://localhost:8000/notifications');
    return res.data;
  },
  async postFilters(paramsObj) {
    // console.log('posted', paramsObj);
    const res = await axios.post('http://localhost:8000/filters', paramsObj);
    return res.data;
  },
  async clearFilters() {
    // console.log('posted', paramsObj);
    const res = await axios.post('http://localhost:8000/clearfilters');
    return res.data;
  },
};
