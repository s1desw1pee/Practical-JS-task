let input=prompt("Введіть число");
let total = 0;
while(input!==null) 
    {
        input=Number.parseInt(input)
        if (isNaN(input)) alert("Було написано не число, спробуйте ще раз")
            else total+=input
        input=prompt("Введіть число")
    }
    alert(total)