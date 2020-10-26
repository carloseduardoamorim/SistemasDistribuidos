## Sistemas Distribuidos
## Realizado por Carlos Amorim

### 1 - qual problema percebeu ao realizar tais alterações?
Muitas vezes o tempo para aparecer o conteúdo JSON foi maior que o conteúdo da tag `<h2>`, mesmo ela sendo inserida depois do JSON. Pude assim perceber o funcionamento do `async`.

### 2 - explique porque o problema ocorreu e o qual a relação com chamadas assíncronas.
A função `request` é uma função assíncrona, dito isso, ela não espera a finalização da requisição dos dados JSON para inserir o `<h2>` de confirmação.

### 3 - altere o código para resolver o problema.
Alterado! inseri um `if` verificando se existe dados ou não para inserir a mensagem de confirmação.
