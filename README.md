Gerenciador de Tarefas (React Native + Expo)

Este projeto é uma versão refatorada e modular do Gerenciador de Tarefas, originalmente desenvolvido em um único arquivo.  
A refatoração foi feita com base em boas práticas de organização, componentização e reutilização de código.

---

Objetivo da Atividade

O objetivo foi refatorar o código original para uma estrutura organizada e modular, separando componentes, hooks, estilos e constantes em pastas específicas.

---

Estrutura de Pastas

gestionador-tarefas/

├── src/

│ ├── components/

│ │ ├── Header.js

│ │ ├── TaskForm.js

│ │ ├── TaskItem.js

│ │ ├── TaskList.js

│ │ └── EmptyList.js

│ ├── hooks/

│ │ ├── useTasks.js

│ │ └── useAnimations.js

│ ├── styles/

│ │ └── styles.js

│ └── utils/

│ └── constants.js

├── App.js

├── README.md

└── package.json


---

Componentes

Header.js
Exibe o título principal e o contador de tarefas pendentes.

TaskForm.js
Contém o formulário de entrada para criar e editar tarefas.

TaskItem.js
Representa cada tarefa individual, com botões para editar, concluir ou excluir.

TaskList.js
Lista todas as tarefas usando FlatList, integrando com TaskItem.

EmptyList.js
Renderiza uma mensagem informativa quando não há tarefas cadastradas.

---

Hooks Customizados

useTasks.js
Responsável por gerenciar o estado global das tarefas:
- Criar, editar, excluir e marcar tarefas como concluídas  
- Controlar o ID da tarefa sendo editada  

useAnimations.js
Gerencia as animações de entrada e saída das tarefas:
- Usa Animated.Value do React Native  
- Suporte para fade-in e slide-up nos itens  

---

Estilos

Todos os estilos foram centralizados em:
src/styles/styles.js

---

Constantes

O arquivo `constants.js` contém:
- Cores principais da aplicação
- Textos fixos e padrões de formatação

---

Conceitos Aplicados

- Componentização: separação de responsabilidades por função  
- Hooks personalizados: lógica reutilizável isolada do componente  
- Centralização de estilos e constantes: manutenção facilitada  
- Reatividade com useState e useEffect  
- Animações suaves usando Animated do React Native  
- Boas práticas de UX/UI: mensagens, botões e cores consistentes

---

Tecnologias Utilizadas

- React Native  
- Expo  
- JavaScript (ES6+)  
- React Hooks  
- Animated API  
