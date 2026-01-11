const flowers = ["Rose", "Lily", "Tulips"];
const vegetables = ["Carrot", "beetroot", "Onion"];

flowers.push(vegetables);
console.log(flowers);
//O/P - [ 'Rose', 'Lily', 'Tulips', [ 'Carrot', 'beetroot', 'Onion' ] ]
// so here [ 'Carrot', 'beetroot', 'Onion' ] acts as 3rd elem on a whole

// to access elems from 3rd elem we use this,
console.log(flowers[3][2]);

//Concatenation of the arrays
const Collections = flowers.concat(vegetables);
console.log(Collections);

//O/P [ 'Rose', 'Lily', 'Tulips', 'Carrot', 'beetroot', 'Onion' ]

//Spread operator works similar to concat operator, it groups all the elems together
const newCollections = [...flowers, ...vegetables];
console.log(newCollections);

// flat- used to spread out array elems
const newArray = [1, 2, 3, 7, [2, 6, 4], 9, [6, 3, 9, [5, 4, 1]]];
const real_Array = newArray.flat(Infinity);
console.log(real_Array);

// isArray used to return bool values, its used to convert
// strings into each elem
console.log(Array.isArray("Catherine"));
console.log(Array.from("Catherine"));

//Interview POV gives empty string always
console.log(Array.from({ name: "Catherine" })); //op-- []

//Array.of- produces a new array from set of elem
let marks1 = 100;
let marks2 = 49;
let marks3 = 58;
console.log(Array.of(marks1, marks2, marks3));
//op [ 100, 49, 58 ]
