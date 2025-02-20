function checkStorage(available, ordered) {
    let message;
    if (ordered===0) message="У замовленні немає товарів"
    else if (available>ordered) message="Замовлення прийнято, наш менеджер зв'яжеться з Вами."
    else message="Ваше замовлення занадто велике, на складі недостатньо товарів!"
     return message;
  }
 console.log (checkStorage(89, 67))