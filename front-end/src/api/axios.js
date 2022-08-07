import axios from "axios";
// 1. in axios we donot have to add response.json()
// 2. automatically catch the errors when they are not in the 200 range of http responses




const baseURL = process.env.REACT_APP_API_URL;
// console.log(process.env.REACT_APP_API_URL);


export  const sendUser = async (url, requestData) => {
  // console.log(baseURL+url, requestData)
  try{
    const response = await axios.post(baseURL + url, requestData,
      {
        withCredentials: true
      });
    // console.log(response.data)
    return response.data 
  }catch(error) {
    // console.log(error.response.data)
    return error.response.data;
  }

}
