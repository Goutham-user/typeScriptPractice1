// if no type is declared by default it takes as any
let type;
type = "Goutham";

//method-1 of explicitly saying the type
let way1 = (<String>type).charCodeAt(2);

//method-2 of explicitly saying the type
let way2 = (type as String).charCodeAt(3);

console.log(way1, way2);
