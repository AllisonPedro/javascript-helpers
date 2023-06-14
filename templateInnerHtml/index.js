import selectElements, { getValue } from './querySelector.js';
const { components:{ buttons, inputs } } = selectElements();
import createTemplate from './createTemplate.js';

const main = () => {
    [inputs.inputfirstName, inputs.inputlastName].forEach(input => {
        input.addEventListener('input', () => {
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