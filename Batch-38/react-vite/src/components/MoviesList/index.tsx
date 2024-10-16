import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://api.themoviedb.org/3/movie";
const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8`;
interface IMovies {
  id: number;
  title: string;
  original_title: string;
}

interface IResponse {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}

const MoviesList = ({ url, title }: { url: string; title: string }) => {
  const [movies, setMovies] = useState<IResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API}${url}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setMovies(response.data);
    };
    fetchData();
  });
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {movies &&
          movies?.results.length > 0 &&
          movies?.results.map((movie) => {
            return <li>{movie.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default MoviesList;
