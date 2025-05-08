function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    };
}


function filterByRating
    (items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const new_array = items.filter(el => (el.rating >= 4))
    return new_array;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let new_array: T[] = [];
    arrays.map(el => {
        let new_array1 = [...new_array]
        new_array = [...new_array1, ...el]
    })
    return new_array;
}



class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel() {
        return `Model: ${this.model}`;
    }
}

function processValue(value: string | number): number {
    if (typeof (value) === "string") return value.length
    return value * 2;
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    else {
        let mx = -1;
        let mx_price = products.forEach(el => {
            if (el.price > mx) mx = el.price;
        });
        let new_array = products.find(el => (el.price === mx));
        return new_array || null;
    }
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) return "Weekend";
    else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n>=0) {
           setTimeout(() => {
            resolve(n * n);
           }, 1000);
        }
        else {
            reject(new Error("Negative number not allowed"))
        }
    })
}