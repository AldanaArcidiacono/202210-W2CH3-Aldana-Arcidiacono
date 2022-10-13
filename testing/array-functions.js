// export const myValidations = (array) => {
//     const paramError = new Error(
//         'Error: El parametro introducido no es válido'
//     );
//     const voidArrayError = new Error('Error: El array no puede estar vacio');
//     if (!Array.isArray(array)) {
//         throw paramError;
//     }
//     if (array.length < 1) {
//         throw voidArrayError;
//     }
// };

export const mySome = (array, myFunction) => {
    const paramError = new Error(
        'Error: El parametro introducido no es válido'
    );
    const voidArrayError = new Error('Error: El array no puede estar vacio');
    if (!Array.isArray(array)) {
        throw paramError;
    }
    if (array.length < 1) {
        throw voidArrayError;
    }
    for (let i = 0; i < array.length; i++) {
        if (myFunction(array[i])) return true;
    }
    return false;
};

export const myPop = (array) => {
    const paramError = new Error(
        'Error: El parametro introducido no es válido'
    );
    if (!Array.isArray(array)) {
        throw paramError;
    }
    if (array.length < 1) {
        return undefined;
    }
    let lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement;
};
