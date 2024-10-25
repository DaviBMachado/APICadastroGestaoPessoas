class ItemForm {
    constructor(fetchService, renderCallback) {
        this.fetchService = fetchService;
        this.renderApp = renderCallback;
    }

    render() {
        return `
            <form id="addItemForm">
                Nome: <input type="text" id="name" required><br>
                Data de Nascimento: <input type="date" id="dateBirth" required><br>
                CPF: <input type="text" id="cpf" required><br>
                Endereço: <input type="text" id="endereco" required><br>
                Estado: <input type="text" id="estado" required><br>
                <button type="submit">Adicionar Pessoa</button>
            </form>
        `;
    }

    afterRender() {
        document.getElementById('addItemForm').addEventListener('submit', (e) => this.addItem(e));
    }

    async addItem(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const dateBirth = document.getElementById('dateBirth').value;
        const cpf = document.getElementById('cpf').value;
        const endereco = document.getElementById('endereco').value;
        const estado = document.getElementById('estado').value;

        if (!name || !dateBirth || !cpf || !endereco || !estado) {
            alert('Todos os campos são obrigatórios.');
            return;
        }

        await this.fetchService.fetch('/items/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, dateBirth, cpf, endereco, estado }),
        });

        alert('Pessoa adicionada com sucesso.');
        this.renderApp('itemsList', this.renderApp);
    }
}
export default ItemForm;
