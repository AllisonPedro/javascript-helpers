export function template (item){
    return`
        <th scope="row">${item.position}</th>
        <td>${item.inputfirstName}</td>
        <td>${item.inputlastName}</td>
    `
}

export function templateInnerHtml (item, element){


    const tr = document.createElement('tr');
    tr.innerHTML = template(item);



    element.insertBefore(tr, element.firstChild);

}