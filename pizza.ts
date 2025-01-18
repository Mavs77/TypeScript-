console.log('test');

type Pizza = {
  id: number;
  name: string;
  price: number;
};

const menu: Pizza[] = [
  { id: 1, name: 'Marg', price: 8 },
  { id: 2, name: 'Pep', price: 18 },
  { id: 3, name: 'Veggie', price: 15 },
  { id: 4, name: 'Hawaiian', price: 2 },
];

let cashInRegister = 100;

//order is a custom type that represents an object with four properties.
type Order = {
  name: string;
  price: number;
  status: string;
  ID: number;
};

const orderQueue: Order[] = [];

function addNewPizza(addPizza: Pizza) {
  menu.push(addPizza);
}

addNewPizza({ id: 5, name: 'supreme', price: 12 });

console.log(menu);

let nextOrderId = 1;

function placeOrder(pizzaName: string): Order[] | null {
  //Find the pizza in the menu
  const pizza = menu.find((item) => item.name === pizzaName);

  if (pizza) {
    //Update cashInRegister
    cashInRegister += pizza.price;

    //Create a new pizza order with status

    type Pizza = {
      status: string;
      ID: number;
    };

    let orderedPizza: Order = {
      ...pizza,
      status: 'ordered',
      ID: nextOrderId++,
    };

    //Add to orderQueue
    orderQueue.push(orderedPizza);

    return orderQueue;
  } else {
    console.log(`Error: ${pizzaName} is not on the menu.`);
    return null;
  }
}

console.log(placeOrder('Veggie'));

function completeOrder(orderID: number): Order[] | null {
  // Find the order in the queue by ID
  const order = orderQueue.find((item) => item.ID === orderID);

  if (order) {
    // Create a new object with updated status (immutability)
    const completedOrder = { ...order, status: 'completed' };

    // Replace the old order in the queue
    const index = orderQueue.findIndex((item) => item.ID === orderID);
    orderQueue[index] = completedOrder;

    return completedOrder; // Return the completed order
  } else {
    console.error(`Error: Unable to complete order with ID ${orderID}`);
    return null; // Return null to indicate failure
  }
}

console.log(completeOrder(1));

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === 'string') {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === 'number') {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      'Parameter `identifier` must be either a string or a number'
    );
  }
}

console.log(getPizzaDetail(2));
