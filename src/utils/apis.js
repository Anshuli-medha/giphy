const APIKEY = "TSnhwY8hLuM465Mf9MSwnavvKgNO0b4p"
let baseUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&`

async function getGiphy(limit){
    const options  = {
        method: "GET",
        headers: {

        }
    }
    const response = await fetch(baseUrl + `limit=${limit}`, options);
    const data = response.json();
    console.log(data);
    return data;
}


module.exports = {
    getGiphies: getGiphy,
}