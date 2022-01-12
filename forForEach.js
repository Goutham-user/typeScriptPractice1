var arr = [1, 2, 3, 4];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var n = arr_1[_i];
    console.log(n);
}
;
arr.forEach(function (a, index) {
    console.log(index + " " + a);
});
