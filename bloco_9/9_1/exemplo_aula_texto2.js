const list    = ['man', 'woman', 'child']

// create a new array
// loop over the array and map the data to new content
const newList = list.map(function(val) {
  return val + " kind";
});

console.log(newList)
// newList = ['man kind', 'woman kind', 'child kind']
