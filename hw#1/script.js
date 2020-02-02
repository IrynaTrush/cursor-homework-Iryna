const milkPrice = 15.678;
const nutellaPrice = 123.965;
const cakePrice = 90.2345;
console.log(`milk price: ${milkPrice}.`);
console.log(`nutella price: ${nutellaPrice}.`);
console.log(`cake price: ${cakePrice}.`);

const maxPrice = Math.max(milkPrice, nutellaPrice, cakePrice);
console.log(`max price is ${maxPrice}.`);

const minPrice = Math.min(milkPrice, nutellaPrice, cakePrice);
console.log(`min price is ${minPrice}.`);

const totalPrice = milkPrice + nutellaPrice + cakePrice;
console.log(`total price is ${totalPrice}.`);

const roundedPrice = Math.floor(milkPrice) + Math.floor(nutellaPrice) + Math.floor(cakePrice);
console.log(`the rounded price is ${roundedPrice}.`);

const roundedTotalPrice = Math.ceil(totalPrice / 100) * 100;
console.log(`the rounded total price is ${roundedTotalPrice}.`);

const isEven = Math.floor(totalPrice) % 2 === 0;
console.log(`the total price is even: ${isEven}.`);

const money500 = 500;
const changeFrom500 = money500 - parseFloat(totalPrice.toFixed(2));
console.log(`the change form 500 will be: ${changeFrom500}.`);

const avarage = (milkPrice + nutellaPrice + cakePrice) / 3;
const avaragePrice = parseFloat(avarage.toFixed(2));
console.log(`the avarage price is ${avaragePrice}.`);

const discount = Math.random() * totalPrice;
const lostProfit = (totalPrice / 2) - discount;
console.log(`the lost profit is ${parseFloat(lostProfit.toFixed(2))}.`);

console.log(`
Цена за молоко: ${milkPrice},
Цена за нутеллу: ${nutellaPrice},
Цена за пирог: ${cakePrice},
Максимальная цена: ${maxPrice},
Минимальная цена: ${minPrice},
Общая цена: ${totalPrice},
Округленная цена: ${roundedPrice},
Округленная общая цена к сотым: ${roundedTotalPrice},
Общая цена четная? ${isEven},
Сдача с 500: ${changeFrom500},
Средняя цена: ${avaragePrice},
Утраченая выгода после скидки: ${parseFloat(lostProfit.toFixed(2))}.
`);
