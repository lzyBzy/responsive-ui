import axios from 'axios';


export const axiosGet = (getApi) => {
  return axios.get(getApi)
  .then((response) => {
    return {
      response,
    }
  }
  )
  .catch((error) => {
    return {
      error,
    }
  })
}
