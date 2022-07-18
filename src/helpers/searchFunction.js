export const searchEmployee = (array, searchKey) => {
  //return a modified array
  let results = [];
  //modify the searchkey to lower case chars
  searchKey = searchKey.toLowerCase();

  // filter array prop and return new array if search key includes any of the below
  return (results = array
    .filter((el) => {
      const {
        editorial: { title },
        location: {
          city: { name: city },
          country: { name: country },
        },
      } = el;
      return (
        title.toLowerCase().includes(searchKey) ||
        city.toLowerCase().includes(searchKey) ||
        country.toLowerCase().includes(searchKey)
      );
    })
    //return a map of the filtered results
    .map((newArr) => {
      return newArr;
    }));
};
