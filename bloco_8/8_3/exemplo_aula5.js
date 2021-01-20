const numbers = [50, 85, -30, 3, 15];

function getBiggerWihtForFuncion () {
    let maior = numbers[0];
    for (index=1; index<numbers.length; index +=1){
        if (numbers[index]>maior){
            maior = numbers[index];
            console.log(maior)
        }
    }
    return maior;
}

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85
getBiggerWihtForFuncion();
