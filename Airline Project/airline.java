
const url = "https://api.aviationstack.com/v1/flights?access_key=0f7f2eef266fc208da8910ee9915c149";
// const options = {
//     method: "GET",
// };

// try {
//     const response = fetch(url, options);
//     const result = response.text();
//     console.log(result);
// } catch (error) {
//     console.error('error');
// }
let flight=fetch(url).then(data=>data.json()).then(data=> console.log(data));

// const url = "https://api.aviationstack.com/v1/airports?access_key=0f7f2eef266fc208da8910ee9915c149";
// let flight=fetch(url).then(data=>data.json()).then(data=> console.log(data));
// let one=flight.map(data=>data.country_name='China')
// console.log(one)
// const options = {
//     method: "GET",
// };

// try {
//     const response = fetch(url, options);
//     const result = response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }