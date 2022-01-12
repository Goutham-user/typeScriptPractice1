
var Classname = (function() {
    function Classname(){
    }
    Classname.prototype.draw = (x,y) =>{
        console.log("inside draw method");
    }
    return Classname;
}())

var obj = new Classname;
obj.draw(4, 5);

//  self practice

var newClass = (function(){
    function newClass(){

    }
    newClass.prototype.method1= function(){
        console.log("method1 executed")
    }
    return newClass; 
}());

let obj1 = new newClass;
obj1.method1();