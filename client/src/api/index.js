import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const register = async (obj) => {
    var tempUrl = 'http://localhost:5000/register';
    var token = await axios.post(tempUrl, { obj });
    if (token && token.data) {
        localStorage.setItem('quotientToken', token.data);
        alert("Registered Successfully")
    } else {
        alert("Registered Already or Server Error");
    }
}
export const login = async (obj) => {
    var tempUrl = 'http://localhost:5000/login';
    var token = await axios.post(tempUrl, { obj });
    if (token && token.data) {
        localStorage.setItem('quotientToken', token.data);
        alert("Logged In Successfully")
    } else {
        alert("Issue loggin In");
    }
}

export const setProfile = async (obj) => {
    var tempUrl = 'http://localhost:5000/profile';
    const token = localStorage.getItem('quotientToken');
    var response = await axios.post(tempUrl, { obj }, {
        headers: {
            'Authorization': token
        },
    });
}
