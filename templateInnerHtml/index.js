import getElements from './querySelector.js';
const { components:{ buttons, inputs } } = getElements();
import { getValue } from './querySelector.js';
import createTemplate from './createTemplate.js';

const main = () => {
    [inputs.inputfirstName, inputs.inputlastName].forEach(input => {
        input.addEventListener('input', (event) => {
            if (getValue(inputs.inputfirstName) && getValue(inputs.inputlastName))
                return buttons.btnAddItem.disabled = false;
            return buttons.btnAddItem.disabled = true;
        });
    })

    buttons.btnAddItem.addEventListener('click', () => {
        if (!getValue(inputs.inputfirstName) || !getValue(inputs.inputlastName)){
            return false;
        }
        createTemplate();
    });
}
main();