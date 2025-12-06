import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Row/Row";
import requests from "../../Utils/Requests";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null); // Movie to show in Banner

  return (
    <>
      <Header />
      <main className="page-content">
        <Banner movie={selectedMovie} />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          setSelectedMovie={setSelectedMovie}
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          setSelectedMovie={setSelectedMovie}
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          setSelectedMovie={setSelectedMovie}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          setSelectedMovie={setSelectedMovie}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          setSelectedMovie={setSelectedMovie}
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          setSelectedMovie={setSelectedMovie}
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          setSelectedMovie={setSelectedMovie}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
