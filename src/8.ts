async function squareAsync(n: number): Promise<number> {
    if (n >= 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return n * n;

    }
    throw new Error("Negative number not allowed");
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed