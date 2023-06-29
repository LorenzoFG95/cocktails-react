// import cocktailLogo from "./assets/cocktail.svg";
import { useState } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import Contacts from "./components/contacts/Contacts";
import Search from "./components/search";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("search");
  const [cocktailName, setCocktailName] = useState("margarita");

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
            <ProductList name="rum" setProductSection={setProductSection} />
            <ProductList name="vodka" setProductSection={setProductSection} />
            <ProductList name="gin" setProductSection={setProductSection} />
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
