let credits=23580
let pricePerDroid=3000
let input=prompt("Введіть кількусть дроїдів, яку ви хочете придбати")
if (input===null) console.log("Скасовано користувачем!") 
    else 
{
    let totalPrice=input*pricePerDroid
    if (credits>totalPrice) console.log(`Ви купили ${input} дроїдів, на рахунку залишилося ${credits-totalPrice} кредитів.`)
        else console.log("Недостатньо коштів на рахунку!")
}