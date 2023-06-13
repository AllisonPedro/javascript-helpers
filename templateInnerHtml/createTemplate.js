import selectElements, {arrayData, getValue, resetValue} from './querySelector.js';
import { templateInnerHtml } from "./template.js";

export default function createTemplate(){

    const { components:{ inputs } } = selectElements();

    const data = {
        firstName: getValue(inputs.inputfirstName),
        lastName: getValue(inputs.inputlastName)
    }

    arrayData.push(data);

    resetValue(inputs.inputfirstName);
    resetValue(inputs.inputlastName);

    templateInnerHtml();

}

