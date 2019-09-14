const square = (a) => {
  return a.map(a => a * a);
  //return a*a
  // a.map(a => a * a);
};

// const square = (a) => a * a;
// const square = a => a * a;
//[1, 2, 3, 4].map(a => a * a);
console.log(square([1,2,3,8,10]));

