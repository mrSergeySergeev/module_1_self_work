import { 
    add,
    get,
    doneItemTrue,
    doneItemFalse,
    deleteItem,
 } from "./firebase.js";

const app = new Controller({
    add: add,
    get: get,
    doneItemTrue: doneItemTrue,
    doneItemFalse: doneItemFalse,
    deleteItem: deleteItem,
});

app.initApp();


