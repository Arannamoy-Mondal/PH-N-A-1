function filterByRating
(items: { title: string; rating: number }[]): 
{title: string; rating: number}[]
{
    const new_array=items.filter(el=>(el.rating>=4))
    console.log(new_array);
    return new_array;
}


const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
filterByRating(books); 
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]