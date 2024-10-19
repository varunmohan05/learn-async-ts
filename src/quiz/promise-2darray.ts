function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log("Sum called ... ");
        if (arr.length === 0) {
            reject("Cannot sum an empty array");
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log("returning from sum");
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const sumPromise1 = sum2DArray(array2D)
    .then((sum) => {
        console.log("sum1:", sum);
    })
    .catch((error) => {
        console.error(`Failed to sum: ${error}`);
    });

const sumPromise2 = sum2DArray([])
    .then((sum) => {
        console.log("sum2:", sum);
    })
    .catch((error) => {
        console.error(`Failed to sum: ${error}`);
    });
