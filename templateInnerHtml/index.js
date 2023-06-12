import getElements from './querySelector.js';
const { components:{buttons,containers,inputs} } = getElements();
import { getValue } from './querySelector.js';
import { ClassCounter } from './classCounter.js';
import { templateInnerHtml } from './template.js';
let count = new ClassCounter();

const main = () => {
    [inputs.inputfirstName, inputs.inputlastName].forEach(input => {
        input.addEventListener('input', (event) => {
            if (getValue(inputs.inputfirstName) && getValue(inputs.inputlastName))
                return buttons.btnAddItem.disabled = false;
            return buttons.btnAddItem.disabled = true;
        });
    })

    buttons.btnAddItem.addEventListener('click', () => {
        const inputfirstName = getValue(inputs.inputfirstName);
        const inputlastName  = getValue(inputs.inputlastName);

        if (!inputfirstName || !inputlastName){
            return false;
        }

        count.increment();
        const position = count.getCount();
        const dataForTemplate = { inputfirstName, inputlastName, position };
        templateInnerHtml(dataForTemplate, containers.tableName);
    });







}
main();