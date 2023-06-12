export function getValue (input) {
    if (!input.value){
        return false;
    }
    return input.value;
}
export function resetValue (input) {
    input.value = '';
}

export default function selectElements() {
    //inputs
    const inputfirstName = document.getElementById('inputfirstName');
    const inputlastName = document.getElementById('inputlastName');
    //containers
    const tableName = document.getElementById('tableName');
    //buttons
    const btnAddItem = document.getElementById('btnAddItem');

    const components = {
        inputs: {
            inputfirstName,
            inputlastName
        },
        containers: {
            tableName,
        },
        buttons: {
            btnAddItem,
        }
    }
    return { components };
}