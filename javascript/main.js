/**
 *  @App
 *      please see note above in regards to
 *      why we are wrapping code in this App method
 */
function App() {
/**
 *  @addItemToList
 *  arguments:
 *      arr: array
 *      item: new item to add
 *  return:
 *      arr
 */
// write your code for addItemToList here...

<!-- // var arr = ['Laundry', 'Dishes', 'Trash'];
// arr.push("Hola");
// console.log (arr); -->

function addItemToList (arr, item) {   
    arr.push("item");
    return ('arr');
}

    var arr = ['Laundry', 'Dishes', 'Trash'];
    arr.push("Clean");
    console.log(arr);
    
/**
 *  @addItemToListFront
 *  arguments:
 *      arr: array
 *      item: new item to add
 *  return:
 *      arr
 */
// write your code for addItemToListFront here...

    arr.unshift('Shop');
    console.log(arr);


/**
 *  @removeItemFromListEnd
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for removeItemFromListEnd here...

    arr.pop();
    console.log(arr);

/**
 *  @removeItemFromListStart
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for removeItemFromListStart here...

    arr.shift();
    console.log(arr);

/**
 *  @getItemFromList
 *  arguments:
 *      arr: array
 *      i: number
 *  return:
 *      item at i-th position || -1
 */
// write your code for getItemFromList here...



/**
 *  @removeItemFromPosition
 *  arguments:
 *      arr: array
 *      i: number
 *  return:
 *      arr
 */
// write your code for removeItemFromPosition here...

/**
 *  @checkForDupes
 *  THIS IS AN EXTRA CREDIT PROBLEM
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for checkForDupes here...

/**
 *  @addToTop
 *  THIS IS AN EXTRA CREDIT PROBLEM
 *  arguments:
 *      arr: array
 *      item: string
 *  return:
 *      arr
 */
// write your code for addToTop here...


//******************************
// IGNORE from here on out
// magic to make the tests work
// Please ignore if you are simply solving the problem
    var addItemToList = 
            (typeof addItemToList === "undefined")
            ? null
            : addItemToList
        , addItemToListFront = 
            (typeof addItemToListFront === "undefined")
            ? null
            : addItemToListFront
        , removeItemFromListEnd = 
            (typeof removeItemFromListEnd === "undefined")
            ? null
            : removeItemFromListEnd
        , removeItemFromListStart = 
            (typeof removeItemFromListStart === "undefined")
            ? null
            : removeItemFromListStart
        , getItemFromList = 
            (typeof getItemFromList === "undefined")
            ? null
            : getItemFromList
        , removeItemFromPosition = 
            (typeof removeItemFromPosition === "undefined")
            ? null
            : removeItemFromPosition
        , checkForDupes = 
            (typeof checkForDupes === "undefined")
            ? null
            : checkForDupes
        , addToTop = 
            (typeof addToTop === "undefined")
            ? null
            : addToTop;
    return {
        addItemToList: addItemToList
        , addItemToListFront: addItemToListFront
        , removeItemFromListEnd: removeItemFromListEnd
        , removeItemFromListStart: removeItemFromListStart
        , getItemFromList: getItemFromList
        , removeItemFromPosition: removeItemFromPosition
        , checkForDupes: checkForDupes
        , addToTop: addToTop
    }
} // App
App();
function caller() {
    return App;
}
caller();/* CURRENTLY IN: javascript/main.js */