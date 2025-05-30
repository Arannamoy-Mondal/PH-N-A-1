{
    class Vehicle {
        private make: string;
        private year: number;
        constructor(make: string,year:number ) {
            this.make=make;
            this.year=year;
         }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        private model: string;
        constructor(make: string,year: number,model: string) {
            super(make, year);
            this.model = model;
        }

        getModel() {
            console.log(`Model: ${this.model}`);
            return `Model: ${this.model}`;
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    myCar.getModel();  // Output: "Model: Corolla"
}