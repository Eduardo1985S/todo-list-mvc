# 📝 To-Do List MVC API

Uma API RESTful simples para gerenciar uma lista de tarefas, construída com Node.js, Express e organizada no padrão MVC (Model-View-Controller). Este projeto utiliza ES6 Modules e é ideal para aprendizado de back-end.

## ✨ Funcionalidades
- **Criar uma tarefa** (`POST /tarefas`) 🆕
- **Listar todas as tarefas** (`GET /tarefas`) 📋
- **Atualizar uma tarefa** (`PUT /tarefas/:id`) 🔄
- **Deletar uma tarefa** (`DELETE /tarefas/:id`) 🗑️

Os dados são armazenados em memória (array) para simplicidade.

## 📂 Estrutura do Projeto
```
todo-list-mvc/
├── controllers/
│   └── tarefaController.js  # Lógica das requisições
├── models/
│   └── tarefaModel.js      # Gerenciamento dos dados
├── routes/
│   └── tarefaRoutes.js     # Definição das rotas
├── server.js               # Arquivo principal do servidor
├── package.json            # Configurações e dependências
└── README.md               # Este arquivo
```

## 🔧 Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 14 ou superior) 🟢
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) 📦

## 🚀 Instalação
1. Clone o repositório ou copie os arquivos para sua máquina:
```
git clone <URL_DO_REPOSITORIO>
cd todo-list-mvc
```

2. Instale as dependências:
```
npm install
```

## ▶️ Como Rodar
### Desenvolvimento (com Nodemon) 🔄
- Inicie o servidor com recarregamento automático:
```
npm run dev
```
O servidor estará disponível em `http://localhost:3000`.

### Produção ⚙️
- Inicie o servidor sem recarregamento:
```
npm start
```

## 🔌 Uso da API
### Endpoints
| Método | Endpoint          | Descrição                  | Corpo (JSON)            |
|--------|-------------------|----------------------------|-------------------------|
| GET    | `/tarefas`        | Lista todas as tarefas     | -                       |
| POST   | `/tarefas`        | Cria uma nova tarefa       | `{ "descricao": "Tarefa" }` |
| PUT    | `/tarefas/:id`    | Atualiza uma tarefa        | `{ "concluida": true }` |
| DELETE | `/tarefas/:id`    | Deleta uma tarefa          | -                       |

### 📝 Exemplos
- **Listar tarefas:**
```
curl http://localhost:3000/tarefas
```

Resposta:
```json
[{ "id": 1, "descricao": "Estudar Node.js", "concluida": false }]
```

- **Criar uma tarefa:**
```
curl -X POST -H "Content-Type: application/json" -d '{"descricao": "Nova tarefa"}' http://localhost:3000/tarefas
```

Resposta:
```json
{ "id": 2, "descricao": "Nova tarefa", "concluida": false }
```

- **Atualizar uma tarefa:**
```
curl -X PUT -H "Content-Type: application/json" -d '{"concluida": true}' http://localhost:3000/tarefas/1
```

Resposta:
```json
{ "id": 1, "descricao": "Estudar Node.js", "concluida": true }
```

- **Deletar uma tarefa:**
```
curl -X DELETE http://localhost:3000/tarefas/1
```

Resposta: Status 204 (No Content)

## 🧪 Testando
Use ferramentas como Postman ou curl para interagir com a API.

## ❓ Resolução de Problemas
- **Erro ao rodar npm run dev**: Certifique-se de que o arquivo server.js existe e que o Nodemon está instalado (`npm install --save-dev nodemon`).
- **Porta ocupada**: Altere a porta no server.js se necessário (ex.: `const port = 3001`).

## 🤝 Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests!

## 📄 Licença
Este projeto está sob a licença ISC. Veja o arquivo package.json para detalhes.
