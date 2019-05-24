import axios from "axios";

export default class phoneService {

    static findAll() {
        return axios.get(`${process.env.REACT_APP_URL}/phones`)
            .then(response => response.data)
            .catch(err => console.log(err))
    }

}


