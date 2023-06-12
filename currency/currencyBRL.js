const amount = 12;

const currencyIntlBRL = (value) => {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

const currencyToLocaleStringBRL = (value) => {
    let options = {
        style: 'currency',
        currency: 'BRL'
    };
    return value.toLocaleString('pt-BR', options);
}

console.log(currencyIntlBRL(amount)); //R$ 12,00
console.log(currencyToLocaleStringBRL(amount)); //R$ 12,00
