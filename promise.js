let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`),
    );
  })
  .then(() => {
    return order(1000, () => console.log("Starting the machine"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`Ice cream was placed on ${stocks.holder[0]} holder`),
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(`${stocks.toppings[0]} was selected as toppings`),
    );
  })
  .then(() => {
    return order(2000, () => console.log("Ice cream is served!!!"));
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(()=>console.log("Day ended, shop is closed"))
