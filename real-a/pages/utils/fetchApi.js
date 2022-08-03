// const axios = require("axios");
// const options = {
//     method: 'GET',
//     url: 'https://bayut.p.rapidapi.com/properties/list',
//     params: {
//       locationExternalIDs: '5002,6020',
//       purpose: 'for-rent',
//       hitsPerPage: '25',
//       page: '0',
//       lang: 'en',
//       sort: 'city-level-score',
//       rentFrequency: 'monthly',
//       categoryExternalID: '4'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'a530f10c8fmsh5910df1ab63741bp1482eajsnb7d8f77dba88',
//       'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//     }
//   };
  
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
                  'X-RapidAPI-Key': 'a530f10c8fmsh5910df1ab63741bp1482eajsnb7d8f77dba88',
                  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
                }
    })
        
    return data;
} 