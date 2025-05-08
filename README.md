# 📝 Futurame To-Do List

Uma aplicação full stack para gerenciar tarefas do dia a dia, inspirada no estilo visual da [FutureMe.tech](https://www.futureme.tech).


## ✨ Funcionalidades

* ✅ Adicionar tarefas
* 📋 Listar todas as tarefas
* 🔄 Marcar tarefas como concluídas
* ❌ Remover tarefas
* 📂 Dados persistidos com MongoDB Atlas

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [Bootstrap](https://getbootstrap.com)

### Backend

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Mongoose](https://mongoosejs.com/)

---

## 📦 Instalação Local

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/futurame-list.git
cd futurame-list
```

### Instale as dependências

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Configure o MongoDB Atlas

Crie um arquivo `.env` no diretório `backend` com a string de conexão:

```env
MONGODB_URI=mongodb+srv://SEU_USUARIO:SUA_SENHA@cluster.mongodb.net/NOME_DO_BANCO
```

---

### Inicie os servidores

```bash
# Backend
cd backend
node server.js

# Frontend
cd ../frontend
npm run dev
```

---

## 📷 Layout de Inspiração

[https://www.futureme.tech](https://www.futureme.tech)

---

## 📌 Autor

Desenvolvido por [Weslley Macedo](https://github.com/seu-usuario) 💻
