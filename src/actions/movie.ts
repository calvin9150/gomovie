import axios from "axios";
import { getToday } from "../utils/date";

const movieKey = process.env.REACT_APP_MOVIE_KEY;

export const getWeeklyMovies = async () => {
  console.log("movieKey", movieKey);
  const date = Number(getToday()) - 3;
  const response = await axios.get(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${movieKey}&targetDt=${date}`
  );
  return response.data;
};
