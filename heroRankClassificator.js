let heroName = "Zhin"
let heroExp = 8000;

const level = ["Ferro", "Bronze", "Ouro", "Platina", "Ascedente", "Imortal", "Radiante"];
const xpClassification = [0, 1000, 2000, 3000, 5000, 7000, 9999, Infinity];
let index = 9999;
let iterator = 1;

while(index==9999){
    if(heroExp>xpClassification[iterator -1]&&heroExp<=xpClassification[iterator]){
        index = iterator-1;
    }
    else{
        iterator++;
    }
}

console.log(`O Herói de nome ${heroName} está no nível de ${level[index]}`);