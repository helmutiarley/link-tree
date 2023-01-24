const axios = require('axios');

const url = 'https://cat-fact.herokuapp.com/facts';

(requestAPI = async () => {
    try {
        const res = await axios.get(url);
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
})();