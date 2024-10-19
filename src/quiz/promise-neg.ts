const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9],
];

async function negativeNumberIn2DArray(
    arr: number[][],
    rowIdx: number
): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log("Negative number check called ... ");
        if (arr.length === 0) {
            reject("Cannot check an empty array");
        }
        setTimeout(() => {
            for (let i = 0; i < arr[rowIdx].length; i++) {
                if (arr[rowIdx][i] < 0) {
                    resolve(rowIdx);
                }
            }
            reject("No negative number found");
        }, 0);
        console.log("returning from negative number check");
    });
}

async function negativeNumberIn2DArrayAny(arr: number[][]): Promise<void> {
    const negativeNumberPromises: Promise<number>[] = [];
    for (let i = 0; i < arr.length; i++) {
        negativeNumberPromises.push(negativeNumberIn2DArray(arr, i));
    }

    try {
        const rowIdx = await Promise.any(negativeNumberPromises);
        console.log("Negative number found in row index:", rowIdx);
    } catch (error) {
        console.error(`Failed to find negative number: ${error}`);
    }
}

negativeNumberIn2DArrayAny(array2D_3);
console.log("End main thread");
