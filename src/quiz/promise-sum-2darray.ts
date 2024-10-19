const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

async function sum1DArray(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log("Sum called ... ");
        if (arr.length === 0) {
            reject("Cannot sum an empty array");
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                console.log(`Adding ${arr[i]} to sum`);
                sum += arr[i];
            }
            resolve(sum);
        }, 0);
        console.log("returning from sum");
    });
}
async function sum2DArrayAwait(arr: number[][]): Promise<void> {
    const sumPromises: Promise<number>[] = [];
    for (let i = 0; i < arr.length; i++) {
        sumPromises.push(sum1DArray(arr[i]));
    }

    try {
        const sums = await Promise.all(sumPromises);
        console.log(
            "sum:",
            sums.reduce((acc, sum) => acc + sum, 0)
        );
    } catch (error) {
        console.error(`Failed to sum: ${error}`);
    }
}

sum2DArrayAwait(array2D_1);
console.log("End main thread");
