var dolog = function () {
    console.log("Hello");
};
var arrowFunction = function () {
    console.log("This is Arrow function");
};

hello = () => {
    console.log("This is with no type declaration");
};
dolog();
arrowFunction();

hello();