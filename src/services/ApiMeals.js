export const getMealByIngridients = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const data = await response.json();
  // console.log(data);
  return data;
};
// getMealByIngridients('Oil');

export const getMealByName = async (name) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
  );
  const data = await response.json();
  return data;
};

export const getMealByFirstLetter = async (firstLetter) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`,
  );
  const data = await response.json();
  return data;
};
