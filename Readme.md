# What are some differences between interfaces and types in TypeScript?
<ol>
<li>
<br>
Type: Type is a functional programming concept.
<br>
Interface: Interface is a object oriented programming concept.
</li>
<li>
<br>
Type: Type work with union.
<br>
Interface: Interface does not work with union.
</li>
<li>
<br>
Type: Type can not extend with class in OOP.
<br>
Interface: Interface can extend with class in OOP. 
</li>
<li>
<br>
Type: Type can intersect with class OOP.
<br>
Interface: Interface can not intersect with class in OOP
</li>
<li>
<br>
Type: It can work with primitive data type.
<br>
Interface: It can't work with primitive data type.
</li>
<li>
<br>
Type: Type supports multiple intersect.
Interface: Interface does not support multiple intersect. But can possible with  

`extends` keyword.
</li>
</ol>


# Provide an example of using union and intersection types in TypeScript.

`Example of union`

```ts
{
    type Fossil_Fuel_Vehicle = { fuel_type: string }
    type EV = { battery_type: string }
    type Vehicle = {
        brand_name: string,
        engine_type: Fossil_Fuel_Vehicle | EV
    }

    const car1: Vehicle = {
        brand_name: "Toyota Prius 2024",
        engine_type: {
            battery_type: "Li-ion",
            fuel_type: "Petrol"
        }
    }

    const car2:Vehicle={
        brand_name:"Toyota Land Cruiser LC300",
        engine_type:{
            fuel_type:"Diesel"
        }
    }
    console.log(car1,car2);
}
```

`Example of intersection`

```ts
{
    type Fossil_Fuel_Vehicle = { fuel_type: string }
    type EV = { battery_type: string }
    type Vehicle = {
        brand_name: string,
        engine_type: Fossil_Fuel_Vehicle & EV
    }

    const car1: Vehicle = {
        brand_name: "Toyota Prius 2024",
        engine_type: {
            battery_type: "Li-ion",
            fuel_type: "Petrol"
        }
    }
    console.log(car1);
}
```