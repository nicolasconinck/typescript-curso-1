import { Printable } from "./printable.js";

export function printLog(...objects: Printable[]) {
    for (let object of objects) {
        console.log(object.toStringLog());
    }
}