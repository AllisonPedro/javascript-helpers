const pessoas = [
    { name: 'Carlinhos da massa', age: 25, title: 'JR', teste: 35 },
    { name: 'Joãozinho da pastel', age: 32, title: 'PL', teste: 56 },
    { name: 'Harry do potter', age: 80, title: 'SR', teste: 90 },
    { name: 'Vitinho o pequeno', age: 50, title: 'JR', teste: 55 },
    { name: 'Juvenal', age: 80, title: 'SR', teste: 55 },
    { name: 'Torquato', age: 32, title: 'JR', teste: 55 },
]

let sumTest = 0;

for (let i = 0; i < pessoas.length; i++) {
    sumTest += pessoas[i].teste;
}

console.log(sumTest);

//---------------------------------------------


let sumTest2 = 0;

pessoas.forEach((pessoa) => {
    sumTest2 += pessoa.teste;
});

console.log(sumTest2);

//---------------------------------------------

let sumTest3 = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.teste;
}, 0);

console.log(sumTest3);


//---------------------------------------------

let reduceList = pessoas.reduce(
    (acc, item) =>
    {
        const sumTest = acc.sumTest + item.teste;
        const menorIdade = acc.menorIdade < item.age ? acc.menorIdade : item.age;
        const maiorIdade = acc.maiorIdade > item.age ? acc.maiorIdade : item.age;

        return {sumTest, menorIdade, maiorIdade}
    },
    {sumTest: 0, menorIdade: undefined, maiorIdade: undefined,}
);
console.log(reduceList);

//---------------------------------------------

const howManyTitles = pessoas.reduce(
    (acc, item) =>
    {
        if (acc[item.title] == null) {
            acc[item.title] = 1
        }else{
            ++acc[item.title]
        }
        return acc;
    },
    {}
);
console.log(howManyTitles);

//---------------------------------------------
const peoplePerAge = pessoas.reduce(
    (acc, item)=>{

        if (acc[item.age] == null) acc[item.age] = []
        acc[item.age].push(item.name)

        return acc;
    }, {})

console.log(peoplePerAge);
// 29:34
