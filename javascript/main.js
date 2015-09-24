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

//  var arr = ['Laundry', 'Dishes', 'Trash'];

 function addItemToList (arr, item) { 
    var itemType = typeof item;
    if (itemType !== 'string') {
        return (arr);
    }
    
    else {
    arr.push(item);
    return (arr);
    }
}   
    var arr = ['Laundry', 'Dishes', 'Trash'];
    addItemToList (arr, 'Clean');
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

function addItemToListFront (arr, item) { 
    var itemType = typeof item;
    if (itemType !== 'string') {
        return (arr);
    }
    
    else {
    arr.unshift(item);
    return (arr);
    }
}   
    addItemToListFront (arr, 'Shop');
    console.log(arr);

/**
 *  @removeItemFromListEnd
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for removeItemFromListEnd here...

function removeItemFromListEnd (arr) { 
    arr.pop();
    return (arr);
}   
    removeItemFromListEnd (arr);
    console.log(arr);

/**
 *  @removeItemFromListStart
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for removeItemFromListStart here...

function removeItemFromListStart (arr) { 
    arr.shift();
    return (arr);
}   
    removeItemFromListStart (arr);
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

function getItemFromList (arr, i) { 
    var selector = arr[i];
    console.log(selector);
    return selector;
 
}   
    getItemFromList (arr, 2);
    console.log();
    
    
    // console.log(arr[2]);

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
caller();