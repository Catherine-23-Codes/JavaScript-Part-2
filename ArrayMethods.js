//Array Methods

const myArr = [0, 1, 2, 4, 6, 7, 32, 9, 22];
//1.Push()
myArr.push(5); // this particular value within braces will be pushed inside the array
myArr.push(37);
console.log(myArr);

//2.Pop()
myArr.pop(2);
console.log(myArr);

//3.Unshift -- adds extra elem to the beginning
/* Main pblm with unshift is that its gets added to the beginning and rest of the
   elements index positions too get changed
*/

myArr.unshift(0);
console.log(myArr);

const myArr3 = new Array(1, 2, 3, 4, 5, 6, 6, 3, 6, 7);
//myArr3.unshift(10);
//console.log(myArr3);

//shift is used to delete the elem at the beginning
myArr3.shift();
console.log(myArr3);

//4. includes -- returns boolean type values
console.log(myArr3.includes(3));
console.log(myArr3.includes(99));

//5.indexOf- used to find the index value of particular array elem values
console.log(myArr3.indexOf(3));
console.log(myArr3.indexOf(92));

//6.join()
const newArr4 = myArr3.join();
console.log(myArr3);
console.log(typeof myArr3); //returns as object
console.log(typeof newArr4); // returns as String type

//7. SLICE AND SPLICE
console.log("C", myArr3);
const myNewArr1 = myArr3.slice(1, 5);
console.log(myNewArr1);

const myNewArr2 = myArr3.splice(1, 5);
console.log(myNewArr1);
console.log(myNewArr2);
