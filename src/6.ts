{
    interface Product {
        name: string;
        price: number;
    }
    
    function getMostExpensiveProduct(products: Product[]): Product | null {
        if(products.length===0)return null;
        else 
        {
            let mx = -1;
            let mx_price = products.forEach(el => {
                if(el.price>mx)mx=el.price;
            });    
            let new_array=products.find(el=>(el.price===mx));
            return new_array || null;
        }
    }
    
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    // getMostExpensiveProduct(products)
    console.log(getMostExpensiveProduct(products));
    // Output: { name: "Bag", price: 50 }
}