import { useEffect, useState } from "react";
import axios from "../../Utils/Axios";
import requests from "../../Utils/Requests";
import "./Banner.css";

const Banner = ({ movie: selectedMovie }) => {
  const [movie, setMovie] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  // Fetch random movie if nothing selected
  useEffect(() => {
    async function fetchRandomMovie() {
      if (selectedMovie) {
        setMovie(selectedMovie);
        return;
      }
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      setMovie(randomMovie);
    }

    fetchRandomMovie();
    setShowTrailer(false); // reset trailer
  }, [selectedMovie]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handlePlay = async () => {
    try {
      const response = await axios.get(
        `/movie/${movie.id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
      );
      const videos = response.data.results;
      const trailer = videos.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );
      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailer(true);
      } else {
        alert("Trailer not available.");
      }
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
    }
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    setTrailerKey(null);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: !showTrailer
          ? `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
          : "none",
        backgroundPosition: "center center",
        position: "relative",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          {!showTrailer && (
            <button className="banner_button" onClick={handlePlay}>
              Play
            </button>
          )}
          <button className="banner_button">My List</button>
        </div>

        {!showTrailer && (
          <p className="banner_description">{truncate(movie?.overview, 150)}</p>
        )}

        {showTrailer && trailerKey && (
          <div className="banner_video">
            <button className="close_trailer" onClick={handleCloseTrailer}>
              X Close
            </button>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`}
              title="Movie Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
