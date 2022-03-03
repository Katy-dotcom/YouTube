import { createContext, useState, useEffect } from "react";

export const FavVideosContext = createContext(null);

export const FavVideosProvider = ({ children }) => {
  const initialState = () =>
    JSON.parse(window.localStorage.getItem("favoriteArray")) || [];

  const [favoriteArray, setFavoriteArray] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray));
  }, [favoriteArray]);

  const initialStateLastSearches = () =>
    JSON.parse(window.localStorage.getItem("condensedList")) || [];

  const [condensedList, setCondensedList] = useState(initialStateLastSearches);

  useEffect(
    () =>
      window.localStorage.setItem(
        "condensedList",
        JSON.stringify(condensedList)
      ),
    [condensedList]
  );

  return (
    <FavVideosContext.Provider
      value={{
        favoriteArray,
        setFavoriteArray,
        condensedList,
        setCondensedList,
      }}
    >
      {children}
    </FavVideosContext.Provider>
  );
};
