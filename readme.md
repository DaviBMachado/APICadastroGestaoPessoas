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
- router/routes_usuario.py: Define as rotas para manipulação de usuários.
- controller/controller_usuario.py: Controlador que lida com as operações CRUD.
- controller/token.py: controlador que lida com a geração e validação do token JWT.
- database/: Pasta que contém os módulos relacionados aos bancos de dados.
- db_mysql.py: Implementação da classe para interagir com o MySQL.
- db_mongo.py: Implementação da classe para interagir com o MongoDB.
- database_strategy.py: Definição da interface Strategy.
- model/: Pasta que contém os modelos de dados Pydantic.
- config/: Pasta que contém o helper para gerenciar o Cors.
## Contribuindo
Sinta-se à vontade para abrir uma issue para relatar problemas, fazer sugestões ou contribuir com código.

## Licença
Este projeto está licenciado sob a MIT License.
