# 📝 Todo App – Aplicação Full Stack

<p align="center">
  <img src="https://i.ibb.co/0ZLq1YF/todolist.png" alt="Todo App" width="800">
</p>

O **Todo App** é uma aplicação de gerenciamento de tarefas desenvolvida com uma **arquitetura full stack moderna**, criada para demonstrar na prática a integração entre um **backend robusto** e um **frontend dinâmico**.

O projeto simula um cenário real de organização de tarefas, explorando conceitos essenciais do desenvolvimento web como **CRUD, gerenciamento de estado, consumo de API e organização de código**, utilizando tecnologias amplamente adotadas pelo mercado.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend
- **Node.js** com **Express** — API RESTful para operações de CRUD  
- **MongoDB** — Banco de dados NoSQL para persistência das tarefas  
- **Mongoose** — Modelagem e validação dos dados  
- **Cors** — Comunicação segura entre frontend e backend  

### 🎨 Frontend
- **React** — Construção da interface do usuário  
- **Redux** — Gerenciamento de estado global da aplicação  
- **React Router** — Controle de rotas no frontend  
- **Bootstrap** e **Font Awesome** — Estilização responsiva e ícones  
- **Redux Middleware** — Uso de `redux-thunk`, `redux-promise` e `redux-multi` para ações assíncronas e múltiplas ações  

---

## ✨ Funcionalidades

- ➕ Adicionar novas tarefas  
- 📋 Listar tarefas concluídas e pendentes  
- ✅ Marcar tarefas como concluídas ou não concluídas  
- 🗑️ Excluir tarefas  
- 🔍 Busca dinâmica para facilitar a organização  

---

## 📂 Estrutura do Projeto

```bash
todo-app/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── reducers/
│   │   └── store/
│
└── README.md

1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/todo-app.git

2️⃣ Backend
cd backend
npm install
npm start

3️⃣ Frontend
cd ../frontend
npm install
npm start

4️⃣ Acesse no navegador
http://localhost:3000


