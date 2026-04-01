let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

 function time(ms){
  return new Promise((resolve, reject)=>{
    if (isShopOpen){
      setTimeout(resolve, ms)
    }else{
      reject(console.log("SHop is closed"))
    }
  })
 }

 async function kitchen() {
  try{
    await time(2000)
    console.log(`${stocks.fruits[0]} is selected`)

    console.log("Start production")

    await time(2000)
    console.log("Cut the fruit")

    await time(2000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

    await time(1000)
    console.log("Starting the machine")

    await time(2000)
    console.log(`Ice cream was placed on ${stocks.holder[0]} holder`)

    await time(3000)
    console.log(`${stocks.toppings[0]} was selected as toppings`)
    
    await time(2000)
    console.log("Ice cream is served!!!")
  }
  catch(error){
    console.log("Customer left")
  }
  finally{
    console.log("Day ended, shop closed")
  }
 }

 kitchen()