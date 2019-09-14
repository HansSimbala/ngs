// Print "Hello World"
const theOneFunc = x => {
    setTimeout((x) => {
        console.log('Hello World');
    }, x * 1000);
};
// Every second
// And stop after 5 times
for (var i = 0; i < 5;i++) {
    theOneFunc(i);
}
//console.log('Done');
// After 5 times. Print "Done" and let Node exit.
