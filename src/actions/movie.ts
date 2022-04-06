import axios from "axios";
import { getToday } from "../utils/date";

export const getWeeklyMovies = async () => {
  try {
    const date = Number(getToday()) - 3;
    const response = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_KEY}&targetDt=${date}`
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getMovieInfo = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/movie.json?query=%EA%B7%80%EB%A9%B8%EC%9D%98%EC%B9%BC%EB%82%A0
        `,
      headers: {
        "X-Naver-Client-Id": `${process.env.REACT_APP_NAVER_ID}`,
        "X-Naver-Client-Secret": `${process.env.REACT_APP_NAVER_SECRET}`,
      },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};
