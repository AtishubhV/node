const axios = require('axios');
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
axios.get('https://reqres.in/api/users?page=1').then((result)=>{
    // get second last user in results
    const lastusrid = result.data.data[result.data.data.length-2].id
    resolve(lastusrid);
})
    }
    )
}
const getLastUserDetails = (lastusrid) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://reqres.in/api/users/${lastusrid}`).then((result)=>{
            resolve(result.data)
        })
    }) 
}

getAllUsers().then((id)=>{
    console.log(id)
    getLastUserDetails(id).then((data)=>{
        console.log(data);
    })
})