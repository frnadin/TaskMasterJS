![Expo](https://img.shields.io/badge/expo-%5E50.0.0-blue?style=flat&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/react--native-mobile--app-blueviolet?logo=react)


# TaskMasterJS 📋✅

Aplicativo de gerenciamento de tarefas desenvolvido com **React Native** e **Expo**, oferecendo autenticação de usuários e visualização flexível de tarefas nos modos **lista** e **kanban**.

---

## 🚀 Funcionalidades Principais

- **Autenticação segura**: Login e cadastro de usuários
- **Dual-view**: Visualização de tarefas em:
  - 📃 **Modo Lista** (tradicional)
  - 🗂 **Modo Kanban** (column-based)
- **CRUD completo**:
  - ➕ Criar novas tarefas
  - ✏️ Editar tarefas existentes
  - 🗑️ Excluir tarefas
  - ✅ Marcar como concluído
- **UI/UX profissional**:
  - Feedbacks visuais com toasts
  - Design responsivo
  - Temas claros/escuros (se implementado)

---

## 🛠️ Tecnologias Utilizadas

| Categoria       | Tecnologias                          |
|-----------------|--------------------------------------|
| 🖥 Frontend     | React Native, Expo                   |
| 🗺 Navegação    | React Navigation                     |
| 🧠 Estado       | Context API (Auth + Tasks)           |
| 🎨 Estilização  | Styled Components                    |
| 🔧 Utilitários  | React Native Toast Message           |

---

## 📥 Instalação e Execução

### Pré-requisitos
- Node.js 16+
- Expo CLI (`npm install -g expo-cli`)
- Yarn (recomendado) ou npm
- Dispositivo físico com [Expo Go](https://expo.io/client) ou emulador Android/iOS



### Passo a Passo
```bash
# 1. Clone o repositório
git clone https://github.com/frnadin/TaskMasterJS
cd TaskMasterJS

# 2. Instale as dependências
yarn install
# ou
npm install

# 3. Inicie o servidor de desenvolvimento
expo start
```

Executando no dispositivo físico:

- Abra o app Expo Go no seu smartphone
- Escaneie o QR code exibido no terminal ou na página web do Expo

## 🏗️ Estrutura do Projeto

TaskMasterJS/
├── assets/                 
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── contexts/            # Context API: Auth, Tarefas, Tema
│   ├── navigation/          # Configuração das rotas com React Navigation
│   ├── screens/             # Telas (Login, Cadastro, Tarefas)
│   ├── services/            # Serviços para integrar com API
│   ├── styles/              # Temas globais e estilo base
├── App.js                   # Ponto de entrada principal
├── package.json             # Dependências e scripts
├── toastConfig.js       # Configuração de toasts de feedback

---

## 🛠️ Decisões Técnicas

- React Native + Expo: Facilita o desenvolvimento e testes rápidos com QR Code.
- Context API: Escolhido pela simplicidade e leveza, já que o projeto não exige um estado global complexo.
- React Navigation: Navegação entre telas e fluxos de autenticação.
- Styled Components: Para estilização de componentes com escopo isolado e melhor manutenção.
- Componentização: Componentes como Input, PrimaryButton, TaskModal foram criados para reutilização e limpeza do código.

---

## 🔌 Preparação para Integração com o Back-End
- Arquitetura preparada com Contexts e modularização para adicionar chamadas de API facilmente.
- Funções de autenticação e tarefas estão centralizadas em contextos, prontas para integrar com axios ou fetch.
- As funções que manipulam tarefas já estão abstraídas nos contexts, facilitando a substituição de dados mockados por dados reais da API.

---

## ⚠️ Desafios encontrados
- Organizar o fluxo de autenticação com navegação protegida.
- Lidar com a estrutura do Kanban de forma dinâmica e adaptável.
- Criar uma arquitetura simples, mas flexível para expansão futura com back-end real.

---

## 📲 Versão de Teste  
🔗 [Testar no Expo Go](https://expo.dev/accounts/fernando_gutilla/projects/TaskMasterJS/updates/0b51820a-dc8e-42f3-a15b-beed71e1a901)

## 📌 Próximos Passos

- 🔐 Autenticação com token JWT
- 🌐 Integração real com API usando Axios
- ⏳ Feedbacks visuais com loaders/spinners
- ✅ Testes automatizados com Jest e React Native Testing Library


