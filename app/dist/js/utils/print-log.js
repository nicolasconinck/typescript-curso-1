export function printLog(...objects) {
    for (let object of objects) {
        console.log(object.toStringLog());
    }
}
