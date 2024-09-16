# Como Funciona

domain: Define as classes básicas Account e Activity, representando as entidades do sistema.
port: Define as interfaces SendMoneyUseCase, LoadAccountPort, e UpdateAccountStatePort, que especificam os contratos para operações.
adapter: Implementa as interfaces e fornece adaptadores concretos para persistência e controle web.
AccountPersistenceAdapter usa SpringDataAccountRepository para manipulação de dados.
AccountController expõe a funcionalidade do caso de uso via uma API.
application: Implementa o serviço de aplicação SendMoneyService, que usa as interfaces definidas nos ports.

# Conclusão

Este modelo segue uma arquitetura modular e baseada em interfaces, que facilita a manutenção e escalabilidade do código. A separação de responsabilidades e a definição clara de contratos (interfaces) ajudam a garantir que diferentes partes do sistema possam ser modificadas ou ampliadas de forma independente.
