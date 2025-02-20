let country=prompt ("У нас з'явилась доставка до країн, щоб дізнатися її вартість вкажіть країну нижче").toLowerCase()
let price=0;
switch (country) {
    case "китай":
        price=100
        break;
    case "чилі":
        price=250
        break;
    case "австралія":
        price=170
        break;
    case "індія":
        price=80
        break;
    case "ямайка":
        price=120
        break;
    default:
        break;
}
if (price===0) alert("У вашій країні доставка недоступна")
    else alert(`Доставка в ${country} буде коштувати ${price} кредитів`)