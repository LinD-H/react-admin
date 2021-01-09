import axios from 'axios'
export default (url, data, type) => {
    axios({
        method: type,
        url,
        data
    })
}