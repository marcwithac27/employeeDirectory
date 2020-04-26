import axios from "axios";

// Export an object containing methods we'll use for accessing the Git.Ceo API

export default {
  getRandomGit: function() {
    return axios.get("https://api.github.com/users?since=135");
  },
  getGitsOfDeveloper: function(developer) {
    return axios.get("https://api.github.com/users/" + developer );
  },
  getBaseDevelopersList: function() {
    return axios.get("https://git.ceo/api/developers/list");
  }
};
