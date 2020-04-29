import axios from "axios";
const URL = "https://api.github.com/users"
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get(URL);
  },
  getDogsOfBreed: function(breed) {
    return axios.get(URL+"/" + breed );
  },
  getBaseBreedsList: function() {
    return axios.get("https://api.github.com/users?since=135");
  }
};
