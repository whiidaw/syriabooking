import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div className="homePage">
      <Navbar />
      <Header />
      
      <div className="homeContainer">
        <section className="featured-section">
          <Featured />
        </section>

        <section className="property-list-section">
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
        </section>
      </div>

      {/* Footer outside container for full width */}
      <Footer />
    </div>
  );
};

export default Home;
