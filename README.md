

# 🤖 Robô Interativo - Animações e Controle de Estados

Aplicação web interativa desenvolvida com HTML, CSS e JavaScript que simula o funcionamento e os estados de um robô. O projeto utiliza manipulação do DOM para alternar imagens e aplicar classes de animações dinâmicas a cada interação do usuário.

---

## ✨ Funcionalidades

- **Controle de Estados:** Botões para Ligar, Desligar e Resetar o robô.
- **Animações Dinâmicas:** Aplicação de diferentes efeitos visuais via CSS (`animacao-neon`, `animacao-brilho-forte`, `animacao-pulsar`, `animacao-flicker` e `animacao-suave`).
- **Simulação de Movimento/Ação:** Ciclagem de um vetor de imagens para simular o comportamento e ações do robô em funcionamento.
- **Lógica de Estado do Robô:** Controle de estados especiais do sistema (como estado de robô quebrado/danificado).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação dos elementos de interface (botões de controle e exibição da imagem do robô).
- **CSS3:** Estilização geral, efeitos visuais e keyframes para criação das animações personalizadas.
- **JavaScript (ES6+):** Captura de elementos do DOM, manipulação de eventos de clique, controle de arrays de objetos e gerenciamento dos estados da aplicação.

---

## 📂 Estrutura do Projeto

```text
robo-interativo/
├── image/              # Imagens e quadros de animação do robô
├── css/
│   └── style.css       # Estilos da página e classes de animação
├── js/
│   └── script.js       # Lógica de alternância de imagens e estados
├── index.html          # Interface principal
├── .gitignore
└── README.md           # Documentação do projeto