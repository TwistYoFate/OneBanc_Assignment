const Call = {
  get: async function(url) {
    return fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => console.log(error));
  }
};

export default Call;
