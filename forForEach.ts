let arr = [1,2,3,4]

for(var n of arr){
    console.log(n)
};

arr.forEach(function(a, index){
    console.log(index + " " + a);
});