import axios from 'axios'


export const register = user => {
    return axios.post('https://poke-wars.herokuapp.com/register',{
    first_name : user.firstName,
    last_name : user.lastName,
    email : user.email,
    password : user.password
})
    .then(res => console.log('Registered'))
    .catch(err => console.log(err))
}

export const login = user => {
    return axios.post('https://poke-wars.herokuapp.com/login', {
        email : user.email,
        password : user.password
    })
    .then(res => {

        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => console.error(err))
}

