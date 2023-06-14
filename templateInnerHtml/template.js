import selectElements, {arrayData} from './querySelector.js';
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

export function templateInnerHtml (data = arrayData.getAll()){

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
                    if (firstName == item.firstName && lastName == item.lastName) {
                        Swal.showValidationMessage('Os dados digitados são iguais aos já existentes');
                    }

                    const data = {
                        firstName: firstName,
                        lastName: lastName,
                    }

                    return data;
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const { firstName, lastName } = result.value;

                    const data = {
                        firstName: firstName,
                        lastName: lastName
                    }

                    arrayData.put(data, index);
                    templateInnerHtml();

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });

        });
        tr.querySelector(`[delete="${index}"]`).addEventListener('click', () => {
            Swal.fire({
                title: 'He is sure?',
                text: 'Do you want to delete this item?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {

                    arrayData.delete(index);
                    templateInnerHtml();

                    Swal.fire(
                        'Deletado!',
                        'Seu item foi deletado com sucesso.',
                        'success'
                    );
                }
            });

        });

        tableName.insertBefore(tr, tableName.firstChild);
    });

}