{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day===Day.Sunday)return "Weekend";
    else return "Weekday";
  }


// getDayType(Day.Monday);   // Output: "Weekday"
// getDayType(Day.Sunday);   // Output: "Weekend"

console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
}