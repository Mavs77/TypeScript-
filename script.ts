console.log('test'); 


const menu = [
    {name: "Marg", price: 8},
    {name: "Pep", price: 18},
    {name: "Veggie", price: 15},
    {name: "Hawaiian", price: 2}
]

let cashInRegister = 100; 

const orderQueue = []


function addNewPizza(pizza, price) {
    const newPizza = {name: pizza, price: price}; 
    menu.push(newPizza); 
}

addNewPizza('supreme', 12); 

console.log(menu)

let nextOrderId = 1; 

function placeOrder(pizzaName) {
    //Find the pizza in the menu
    const pizza = menu.find(item => item.name === pizzaName); 

    if (pizza) {
        //Update cashInRegister
        cashInRegister += pizza.price; 

        //Create a new pizza order with status
        const orderedPizza = { ...pizza, status: 'ordered', ID: nextOrderId++}; 

        //Add to orderQueue
        orderQueue.push(orderedPizza); 

        return orderQueue
    } else {
        console.log(`Error: ${pizzaName} is not on the menu.`); 
        return null; 
    }
}

console.log(placeOrder("Veggie")); 

function completeOrder(orderID) {
    // Find the order in the queue by ID
    const order = orderQueue.find(item => item.ID === orderID);

    if (order) {
        // Create a new object with updated status (immutability)
        const completedOrder = { ...order, status: 'completed' };

        // Replace the old order in the queue
        const index = orderQueue.findIndex(item => item.ID === orderID);
        orderQueue[index] = completedOrder;

        return completedOrder; // Return the completed order
    } else {
        console.error(`Error: Unable to complete order with ID ${orderID}`);
        return null; // Return null to indicate failure
    }
}


console.log(completeOrder(1)); 