function concatenateArrays<T>(...arrays: T[][]): T[]{
    let new_array:T[]=[];
    arrays.map(el=>{
        let new_array1=[...new_array]
        new_array=[...new_array1,...el]
    })
    return new_array;
}



console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]