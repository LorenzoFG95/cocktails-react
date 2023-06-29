import "./index.css";
import { useState, useEffect } from "react";

const Search = ({ cocktailName, setCocktailName }) => {
  const [searchInput, setSearchInput] = useState("");
  const [cocktail, setCocktail] = useState("");
  const [searched, setSearched] = useState(false);
  console.log(cocktail);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCocktailName(searchInput);
    setSearched(true);
  };
  useEffect(() => {
    fetch(
      "https://thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName
    )
      .then((res) => res.json())
      .then((data) => setCocktail(data));
  }, [cocktailName]);

  const onHandleChange = (e) => {
    setSearchInput(e.target.value);
  };
  if (!searched) {
    return (
      <>
        <form className="Search" onSubmit={onHandleSubmit}>
          <label htmlFor="cerca">Cerca un cocktail</label>
          <input
            type="text"
            placeholder="ex: margarita"
            name="name"
            value={searchInput}
            onChange={onHandleChange}
            required
          />
          <input type="submit" value="Invia" />
        </form>
      </>
    );
  } else if (cocktail.drinks !== null) {
    return (
      <>
        <form className="Search" onSubmit={onHandleSubmit}>
          <label htmlFor="cerca">Cerca un cocktail</label>
          <input
            type="text"
            placeholder="ex: margarita"
            name="name"
            value={searchInput}
            onChange={onHandleChange}
            required
          />
          <input type="submit" value="Invia" />
        </form>

        <div className="cocktail">
          <h2 className="cocktail__title">{cocktail.drinks[0].strDrink}</h2>
          <img
            src={cocktail.drinks[0].strDrinkThumb}
            alt={cocktail.drinks[0].strDrink}
          />
        </div>
      </>
    );
  } else if (cocktail.drinks === null) {
    return (
      <>
        <form className="Search" onSubmit={onHandleSubmit}>
          <label htmlFor="cerca">Cerca un cocktail</label>
          <input
            type="text"
            placeholder="ex: margarita"
            name="name"
            value={searchInput}
            onChange={onHandleChange}
            required
          />
          <input type="submit" value="Invia" />
        </form>
        <p className="not_found">Cocktail non trovato</p>
      </>
    );
  }
};
export default Search;
