# FastAPI CRUD com MySQL e MongoDB
Este é um exemplo de aplicação CRUD (Create, Read, Update, Delete) usando o framework FastAPI do Python. O aplicativo é projetado para ler, alterar, e criar um banco de dados simples em arquivo .txt 

## Requisitos
- Python 3.x
- FastAPI

## Instalação
Clone este repositório:
```
git clone https://github.com/DaviBMachado/APICadastroGestaoPessoas
```

Navegue até o diretório do projeto

Instale as dependências:
```
pip install -r requirements.txt
```
Uso
Execute o aplicativo:
```
uvicorn main:app --reload

ou 

python main.py
```
Acesse a documentação interativa do Swagger em:
```
http://localhost:8000/docs
```
Experimente as rotas CRUD fornecidas para manipulação de usuários.
## Estrutura do Projeto
- main.py: Arquivo principal que inicializa o aplicativo FastAPI.
- controllers.py: Script de CRUD para manuseio da API.
- model.py: Modelo em que o registro deve ser cadastrado.
  
## Contribuindo
Sinta-se à vontade para abrir uma issue para relatar problemas, fazer sugestões ou contribuir com código.

## Licença
Este projeto está licenciado sob a MIT License.
