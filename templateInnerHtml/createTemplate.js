import selectElements from './querySelector.js';
const { components:{ arrayData } } = selectElements();

export default function createTemplate(){

    arrayData.push({position: 1, inputfirstName: 'firstName', inputlastName: 'lastName'});
    console.log(...arrayData.get());


}

