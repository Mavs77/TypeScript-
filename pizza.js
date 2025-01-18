var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log('test');
var menu = [
    { id: 1, name: 'Marg', price: 8 },
    { id: 2, name: 'Pep', price: 18 },
    { id: 3, name: 'Veggie', price: 15 },
    { id: 4, name: 'Hawaiian', price: 2 },
];
var cashInRegister = 100;
var orderQueue = [];
function addNewPizza(addPizza) {
    menu.push(addPizza);
}
addNewPizza({ id: 5, name: 'supreme', price: 12 });
console.log(menu);
var nextOrderId = 1;
function placeOrder(pizzaName) {
    //Find the pizza in the menu
    var pizza = menu.find(function (item) { return item.name === pizzaName; });
    if (pizza) {
        //Update cashInRegister
        cashInRegister += pizza.price;
        var orderedPizza = __assign(__assign({}, pizza), { status: 'ordered', ID: nextOrderId++ });
        //Add to orderQueue
        orderQueue.push(orderedPizza);
        return orderQueue;
    }
    else {
        console.log("Error: ".concat(pizzaName, " is not on the menu."));
        return null;
    }
}
console.log(placeOrder('Veggie'));
function completeOrder(orderID) {
    // Find the order in the queue by ID
    var order = orderQueue.find(function (item) { return item.ID === orderID; });
    if (order) {
        // Create a new object with updated status (immutability)
        var completedOrder = __assign(__assign({}, order), { status: 'completed' });
        // Replace the old order in the queue
        var index = orderQueue.findIndex(function (item) { return item.ID === orderID; });
        orderQueue[index] = completedOrder;
        return completedOrder; // Return the completed order
    }
    else {
        console.error("Error: Unable to complete order with ID ".concat(orderID));
        return null; // Return null to indicate failure
    }
}
console.log(completeOrder(1));
function getPizzaDetail(identifier) {
    if (typeof identifier === 'string') {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === 'number') {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError('Parameter `identifier` must be either a string or a number');
    }
}
console.log(getPizzaDetail(2));
