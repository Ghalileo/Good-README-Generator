const axios = require('axios')

function getInfo(username) {
 const queryUrl = `https://api.github.com/users/${username}`
return axios
 .get(queryUrl)
 .then(function({data}){
  //  Object for Response
   const receivedData = {
     "username": data.login,
     "name": data.name,
     "picture": data.avatar_url,
     "email": data.email
   }
   return receivedData;
 })
}

module.exports = {getInfo: getInfo,}
