# routes-express
Rotas criadas com express e configurações de filtragem, listagem e deleção de entidades usando seletores do mongoDB

Após importar o mongoose para o estabelecimento da conexão com o mongoDB, vemos que é necessária uma string de conexão que, nesse caso, é uma url.
Logo, é interessante criar uma conta no MongoDB Atlas ( https://www.mongodb.com/cloud/atlas ). Feito isso, substitua os campos password e test com a senha e nome do banco a ser incrementado.
Caso ocorra um erro 'DeprecationWarning' adicione ao objeto do método connect 'useCreateIndex: true'
