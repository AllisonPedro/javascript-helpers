import selectElements, { arrayData } from './querySelector.js';
const { components:{ containers:{ tableName } } } = selectElements();

export function template (item, index){
    return`
        <th scope="row">${index + 1}</th>
        <td>${item?.firstName}</td>
        <td>${item?.lastName}</td>
        <td>
            <button type="button" class="btn btn-success" edit=${index}>Edit</button>
            <button type="button" class="btn btn-danger" delete=${index}>Delete</button>
        </td>
    `
}

export function templateInnerHtml (data = arrayData.get()){

    tableName.innerHTML = '';
    data.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('id', `tr-${index}`);
        tr.innerHTML = template(item, index);

        tr.querySelector(`[edit="${index}"]`).addEventListener('click', () => {

            const html = `
                <input id="editFirstName" value="${item?.firstName}" class="swal2-input" placeholder="First Name">
                <input id="editLastName" value="${item?.lastName}" class="swal2-input" placeholder="Last Name">
            `;

            Swal.fire({
                title: 'Edit',
                html: html,
                showCancelButton: true,
                confirmButtonText: 'Enviar',
                cancelButtonText: 'Cancelar',
                preConfirm: () => {

                    const firstName = document.getElementById('editFirstName').value;
                    const lastName = document.getElementById('editLastName').value;
                    if (!firstName || !lastName) {
                        Swal.showValidationMessage('Por favor, preencha ambos os campos');
                    }
                    return { firstName: firstName, lastName: lastName };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const { firstName, lastName } = result.value;
                    Swal.fire(`Nome: ${firstName}, Sobrenome: ${lastName}`);
                }
            });

        });
        tr.querySelector(`[delete="${index}"]`).addEventListener('click', () => {


        });

        tableName.insertBefore(tr, tableName.firstChild);
    });

}