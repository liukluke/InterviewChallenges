import axios from "axios";

export default class phoneService {

    static findAll() {
        return axios.get(`http://localhost:5000/phones`)
            .then(response => response.data)
            .catch(err => console.log(err))
    }

}


