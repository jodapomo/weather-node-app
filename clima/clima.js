const axios = require('axios');

const getClima = async ( lat, lng ) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=30c5e43de4b8bd1fc6371607859f2a39`);

    return resp.data.main.temp

}

module.exports = {
    getClima
}