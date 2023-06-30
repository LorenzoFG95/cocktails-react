// import cocktailLogo from "./assets/cocktail.svg";
import { useState } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import Contacts from "./components/contacts/Contacts";
import Search from "./components/search";
import Filters from "./components/filters";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");
  const [cocktailName, setCocktailName] = useState("margarita");
  const [activeFilters, setActiveFilters] = useState({
    rum: true,
    vodka: true,
    gin: true,
  });

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;
      case "search":
        return (
          <Search
            cocktailName={cocktailName}
            setCocktailName={setCocktailName}
          />
        );
      case "":
        return (
          <>
            <Filters
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
            {activeFilters.rum && (
              <ProductList name="Rum" setProductSection={setProductSection} />
            )}
            {activeFilters.vodka && (
              <ProductList name="Vodka" setProductSection={setProductSection} />
            )}
            {activeFilters.gin && (
              <ProductList name="Gin" setProductSection={setProductSection} />
            )}
          </>
        );
      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        );
    }
  };

  return (
    <div className="App">
      <ul className="header">
        <li className="home__list" onClick={() => setProductSection("")}>
          Home
        </li>
        <li
          className="home__list"
          onClick={() => setProductSection("contacts")}
        >
          Contacts
        </li>
        <li className="home__list" onClick={() => setProductSection("search")}>
          Search
        </li>
      </ul>
      {onRender()}
    </div>
  );
}

export default App;
