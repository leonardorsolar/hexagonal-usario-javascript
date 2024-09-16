# Estrutura de Diretórios e Arquivos atuais

buckpal
└── conta
├── adaptador
│ ├── persistencia
│ │ ├── AdaptadorPersistenciaConta.js
│ │ └── RepositorioContaSpringData.js
│ └── web
│ └── ControladorConta.js
├── dominio
│ ├── Conta.js
│ └── Atividade.js
├── aplicacao
│ └── ServicoEnviarDinheiro.js
└── porta
├── entrada
│ └── CasoUsoEnviarDinheiro.js
└── saida
├── PortaCarregarConta.js
└── PortaAtualizarEstadoConta.js

```javascript

buckpal
└── account
├── adapter
│ ├── persistence
│ │ ├── AccountPersistenceAdapter.js
│ │ └── SpringDataAccountRepository.js
│ └── web
│ └── AccountController.js
├── domain
│ ├── Account.js
│ └── Activity.js
├── application
│ └── SendMoneyService.js
└── port
├── in
│ └── SendMoneyUseCase.js
└── out
├── LoadAccountPort.js
└── UpdateAccountStatePort.js

```

# Estrutura de Diretórios e Arquivos Organizing By Layer

buckpal
├── domain
|
├── Account
|
├── Activity
|
├── AccountRepository
|
└── AccountService
├── persistence
|
└── AccountRepositoryImpl
└── web
└── AccountController

# Estrutura de Diretórios e Arquivos Organizing By Feature

buckpal
└── account
├── Account
├── AccountController
├── AccountRepository
├── AccountRepositoryImpl
└── SendMoneyService

# Estrutura de Diretórios e Arquivos Clean Architecture

account
├── domain
|
├── entity
|
├── Account
|
├── vo
|
├── Cpf
|
└── Email
|
├── Name
|
└── Password

└── application

    └── usecase
        └── GetAccount
        └── Signup
    └── repository
        └── AccountRepository
    └── gateway
        └── MailerGateway

├── infra

    └── controller
        |
        └── AccountController
        |
        └── QueueController

    └── repository
        |
        └── AccountRepositoryImpl

    └── http
        |
        └── HttpServer
