let l = "pen";
//console.log(l[l.length - 1]);

let f = {
    1: "Камень",
    2: "Ножницы",
    3: "Бумага"
}

let playerStep = prompt('Введите: Камень, Ножницы или Бумага');

let c = f[Math.floor(Math.random() * 3) + 1]

function game(playerStep,c){
    if (c == "Камень" && playerStep == "Ножницы" ){
        return "Вы проиграли!  Камень затупил ножницы"
    } else if ( c == "Ножницы" && playerStep == "Ножницы"){
        return "Ничья"
    } else if (c == "Бумага" && playerStep == "Ножницы"){
        return "Вы победили! Ножницы режут бумагу"
    } else if (c == "Камень" && playerStep == "Камень"){
        return "Ничья"
    } else if (c == "Ножницы" && playerStep == "Камень"){
        return "Вы победили!  Ваш Камень затупил ножницы соперника"
    } else if (c == "Бумага" && playerStep == "Камень"){
        return "Вы проиграли! Ваш камень был накрыт бумагой соперника"
    } else if (c == "Камень" && playerStep == "Бумага"){
        return "Вы победили!"
    } else if (c == "Ножницы" && playerStep == "Бумага"){
        return "Вы проиграли!"
    } else if (c == "Бумага" && playerStep == "Бумага"){
        return "Ничья"
    }

}

console.log(`Ход компьютера:${c}
Ход игрока:${playerStep}\n`
    +game(playerStep,c))