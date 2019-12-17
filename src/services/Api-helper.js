import axios from 'axios';


export const getFacts = async (category, value) => {
  let response = "";

  switch (category) {
    case "number":
      response = await axios.get(`http://numbersapi.com/${value}`);
      return (response);

    case "year":
      response = await axios.get(`http://numbersapi.com/${value}/year`);
      return (response);

    case "date":
      response = await axios.get(`http://numbersapi.com/${value}/date`);
      return (response);

    case "math":
      response = await axios.get(`http://numbersapi.com/${value}/math`);
      return (response);

    case "random":
      response = await axios.get(`http://numbersapi.com/random`);
      return (response);

    default:
      response = await axios.get(`http://numbersapi.com/random`);
      return (response);
  }
}
