import SearchBar from "../../components/searchBar/search";
import "./home.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Explore top listings, discover your perfect home, and connect with
            trusted agents — all in one place. Whether you are buying, renting,
            or investing, we make your property journey simple and stress-free.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1400+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
};

export default HomePage;
