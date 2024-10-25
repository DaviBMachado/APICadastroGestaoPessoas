class UpdateItemForm {
    constructor(fetchService, renderCallback) {
        this.fetchService = fetchService;
        this.renderApp = renderCallback;
    }

    render() {
        return `
        <div id="updateItemModal" class="modal">
        <div class="modal-content"><div class="close"> X </div>
            <h4>Atualizar Pessoa</h4>
            <div class="input-field">
                <label for="updateId">ID para atualizar</label>
                <input type="text" id="updateId" class="validate" required>
            </div>
            <div class="input-field">
                <label for="updateName">Nome</label>
                <input type="text" id="updateName" class="validate" required>
            </div>
            <div class="input-field">
                <label for="updateDateBirth">Data de Nascimento</label>
                <input type="date" id="updateDateBirth" class="validate" required>
            </div>
            <div class="input-field">
                <label for="updateCpf">CPF</label>
                <input type="text" id="updateCpf" class="validate" required>
            </div>
            <div class="input-field">
                <label for="updateEndereco">Endereço</label>
                <input type="text" id="updateEndereco" class="validate" required>
            </div>
            <div class="input-field">
                <label for="updateEstado">Estado</label>
                <input type="text" id="updateEstado" class="validate" required>
            </div>
            <div class="modal-footer">
                <button id="updateButton" class="btn">Atualizar Pessoa</button>
            </div>
        </div>
    </div>
        `;
    }

    closeModal() {
        const modal = document.getElementById('updateItemModal');
        modal.style.display = 'none';
    }

    afterRender() {
        document.getElementById('updateButton').addEventListener('click', () => this.updateItem());
        document.querySelector('.close').addEventListener('click', () => this.closeModal());
    }

    async updateItem() {
        const id = document.getElementById('updateId').value;
        const name = document.getElementById('updateName').value;
        const dateBirth = document.getElementById('updateDateBirth').value;
        const cpf = document.getElementById('updateCpf').value;
        const endereco = document.getElementById('updateEndereco').value;
        const estado = document.getElementById('updateEstado').value;

        if (!id || !name || !dateBirth || !cpf || !endereco || !estado) {
            alert('Todos os campos são obrigatórios.');
            return;
        }

        await this.fetchService.fetch(`/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, dateBirth, cpf, endereco, estado }),
        });
        
        alert('Pessoa atualizada com sucesso.');
        this.renderApp();
    }

    async deleteItem(id) {
        await this.fetchService.fetch(`/items/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        alert('Pessoa deletada com sucesso.');
        this.renderApp();
    }
}
export default UpdateItemForm;
