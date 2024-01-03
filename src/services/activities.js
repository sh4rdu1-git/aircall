import axios from "axios";

const baseURL = "https://cerulean-marlin-wig.cyclic.app/";

const getActivities = () => {
  const request = axios.get(`${baseURL}/activities`);
  return request.then((response) => {
    return response.data;
  });
};

export default {
  getActivities,
};
