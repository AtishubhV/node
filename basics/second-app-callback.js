
const axios = require('axios');
const getAllUsers = (callback) => {
axios.get('https://reqres.in/api/users?page=1').then((result)=>{
    // get last user in results
    const lastusrid = result.data.data[result.data.data.length-1].id
    callback(lastusrid);
})
}
const getLastUserDetails = () => {
    // Here notice we are calling getAllUsers function from a function who depends upon the result of getAllUsers
    //but in params we pass a function instead this function will recieve the output from getAllUsers
    getAllUsers((lastusrid)=>{
        axios.get(`https://reqres.in/api/users/${lastusrid}`).then((result)=>{
            console.log(result.data)
    })
    })
}
getLastUserDetails();