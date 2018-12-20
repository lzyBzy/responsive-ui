import { axiosGet } from './apiUtilCall';


export const getTimeLineData = () => {
  return axiosGet('http://localhost:8080/')
}
