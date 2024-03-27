// reduce

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currentvalue) {
//     console.log(`acc: ${acc} and currentValue: ${currentvalue}`);
//     return acc + currentvalue
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "JAVA ADVANCE science course",
        price: 1999
    }
]

const priceTOPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);