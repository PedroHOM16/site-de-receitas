export const getDrinksIngridientByName = async (name) => {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`,
  );
  const data = await response.json();
  return data;
};

export const getDrinksByName = async (name) => {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/1/search.php?s${name}`,
  );
  const data = await response.json();
  return data;
};

export const getDrinksByFirstLetter = async (firstLetter) => {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`,
  );
  const data = await response.json();
  return data;
};
