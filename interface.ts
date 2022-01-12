// interface can only contain the signature
interface Point{
    x:number,
    y:number
}

let draw =(point: Point) => {
    // ..]
    console.log(point)
}

let getDistance = (another: Point) => {
    // ..
    console.log(another)
}
 
// encapsulating the data in one varisable or object
let enc= {x:4, y:5};

draw(enc);

/* this kind of approach is not OOPS concept,
* by following OOPS concept this can be writen as whole in a class with methods in it which are so called functions.
*/