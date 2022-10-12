export const mySome = (array, myFunction) => {
    for (let i = 0; i < array.length; i++) {
        if (myFunction(array[i])) return true;
    }
    return false;
};

export const myPop = (array) => {
    let lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement;
};

////////////////////////////////////////////////////
// const myPush = (array, value) => {
//     array[array.length] = value;
// };
// export const myMap = (array, myFunction) => {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         myPush(newArray, myFunction);
//     }
//     return newArray;
// };

// const multByTwo = (i) => {
//     return i * 2;
// };

// const arr = [1, 2, 3, 4];
// let result = myMap(arr, multByTwo());
// console.log(result);
