{
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
    
    
    
    
    
    const hello = async () => {
        const data = await squareAsync(-100);
        console.log(data);
    }
    hello()
    
}