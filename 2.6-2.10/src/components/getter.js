import axios from "axios";
const baseUrl = "http://localhost:3001/contacts"

const getAll=()=>{
  return axios.get(
    baseUrl
  )
}
const createName=(newContact)=>{
  return axios
  .post(baseUrl, newContact)
  .then(res=> res.data)
  }
let getter = { getAll, createName}
export default getter
