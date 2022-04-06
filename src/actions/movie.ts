import axios from "axios";
import { getToday } from "../utils/date";

type WeeklyMovieResponse = {
  audiAcc: string;
  audiChange: string;
  audiCnt: string;
  audiInten: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  rnum: string;
  salesAcc: string;
  salesAmt: string;
  salesChange: string;
  salesInten: string;
  salesShare: string;
  scrnCnt: string;
  showCnt: string;
};

interface InfoItem {
  image: string;
  date?: string;
}

type MovieInfo = {
  items: InfoItem[];
};

export const getMovieInfo = async (movieName: string): Promise<MovieInfo> => {
  try {
    console.log("movieName", movieName);
    const encodedMovieName = encodeURI(movieName);
    const response = await axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/movie.json?query=${encodedMovieName}`,
      headers: {
        "X-Naver-Client-Id": `${process.env.REACT_APP_NAVER_ID}`,
        "X-Naver-Client-Secret": `${process.env.REACT_APP_NAVER_SECRET}`,
        "X-Requested-With": "https://cors-anywhere.herokuapp.com/",
      },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getWeeklyMovies = async () => {
  try {
    const date = Number(getToday()) - 4;
    const listResponse = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_KEY}&targetDt=${date}`
    );

    const infoResponse: string[] = [];
    listResponse.data.boxOfficeResult.weeklyBoxOfficeList.forEach((v: WeeklyMovieResponse) => {
      const movieInfo = getMovieInfo(v.movieNm);
      console.log("a", movieInfo);
      movieInfo.then((res) => infoResponse.push(res.items[0].image));
    });

    return infoResponse;
  } catch (e) {
    throw e;
  }
};
