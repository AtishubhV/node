const axios = require('axios');
const  getAllUsers =  async () => {
    const result = await axios.get('https://reqres.in/api/users?page=1')
    const lastusrid = result.data.data[result.data.data.length-1].id
    return lastusrid;    
}
const getLastUserDetails =  async (lastusrid) => {
    const result =  await axios.get(`https://reqres.in/api/users/${lastusrid}`)
    return(result.data);
}
const execute = async () =>{
const id  =  await getAllUsers();
const data =  await getLastUserDetails(id);
console.log(data);
}
execute();
  