import { useReducer, useEffect } from "react";

interface Error {
  errorMessage: string;
  errorCode: string;
}

interface Item {
  title: string;
  link: string;
  image: string;
  subtitle: string;
  pubDate: string;
  director: string;
  actor: string;
  userRating: string;
}

interface Data {
  lastBuildDate: Date | null;
  total: number;
  start: number;
  display: number;
  items: Item[];
}

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: Data }
  | { type: "ERROR"; error: Error };

interface State {
  loading: boolean;
  data: Data | null;
  error: Error | null;
}

const initialState = {
  loading: false,
  data: {
    lastBuildDate: null,
    total: 0,
    start: 0,
    display: 0,
    items: [
      {
        title: "null",
        link: "null",
        image: "null",
        subtitle: "null",
        pubDate: "null",
        director: "null",
        actor: "null",
        userRating: "null",
      },
    ],
  },
  error: null,
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

function useAsync(callback: Function, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await callback();
      dispatch({ type: "SUCCESS", data: data });
    } catch (e: any) {
      dispatch({ type: "ERROR", error: e.data });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}

export default useAsync;
