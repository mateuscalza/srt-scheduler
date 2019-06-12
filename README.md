# SRT/SRTF - Shortest Remaining Time First Scheduler Simulator

Simulador do escalonador por menor tempo restante.

## A fazer

- Testes automatizados!

## Configuração necessária

- Node (mínimo v10.15.3) e NPM instalados

## Comandos

### Para configurar o projeto

```shell
npm install
```

### Para rodar o projeto

```shell
npm start
```

## Estrutura

```
.
├── App.js - Arquivo inicial do código, lá monta os componentes e executa os códigos necessários
├── App.test.js - Serve para fazer Teste de Código Automatizado (TDD), por enquanto apenas testa se a aplicação roda
├── components - Pasta com os componentes visuais
│   ├── Jobs.js - Componente para configurar os jobs, quantos, nomes, chegada e execução
│   ├── Legend.js - Componente com a legenda
│   ├── RunControl.js - Componente com os botões de controle (roda, para, configura, reseta)
│   ├── ScaleRange.js - Componente com a escala visual
│   ├── TimeRange.js - Componente com a capacidade do processador(escala de tempo)
│   ├── Timeline.js - Linha do tempo que monta embaixo mostrando a execução graficamente
│   ├── Title.js - Título colorido
│   └── icons - Icones
│       └── Close.js - Icone para fechar o painel de configuração de jobs
├── config - Pasta com configuração inicial
│   └── jobs.js - Configuração inicial dos jobs, alguns programas vem pré-definidos
├── fonts - Pasta com as fontes, só a mesma fonte estilo Arcade, em vários formatos
│   ├── ka1-webfont.ttf
│   ├── ka1-webfont.woff
│   └── ka1-webfont.woff2
├── index.css - Estilos visuais
├── index.js - Renderiza a aplicação na tela
├── logo.sketch - Logotipo da aplicação no formato Sketch do programa de edição Sketch
├── logo.svg - Logotipo vetorial da aplicação no formato SVG
├── schedulers - Pasta com escalonadores, por enquanto só um lá dentro
│   └── srt.js - É o escalonador em si, fazendo a manutenção dos jobs, é rodado a cada quantum
├── serviceWorker.js - Roda em background no navegador, mantendo a aplicação disponível mesmo sem internet
└── utils - Pasta com utilidades
    ├── empty.js - Verifica se o valor inserido é vazio ou não
    ├── exponentialSmoothing.js - Faz a média exponencial
    ├── job.js - Classe com a representação do Job, com os métodos para iniciar, parar, ou contar tempo
    ├── runner.js - Faz o controle de execução, controla o timer e chama o escalonador a cada ciclo pra ele alterar os jobs de acordo com a sua necessidade
    ├── states.js - Salva as constantes de estados, READY, RUNNING, BLOCKED e seus estilos
    └── timeEstimation.js - Estima tempos, salvando execuções e retornando uma estimativa de tempo quando necessário, chamando a média exponencial
```
