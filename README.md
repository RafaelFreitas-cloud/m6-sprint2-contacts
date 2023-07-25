# PARA RODAR O PROJETO 

## Requisitos ##
- Ter o Node instalado
- Ter o nmp instalado (gerenciador de pacotes)

## Fazer os seguintes comandos ##

npm install (para instalar dependencias)

npm run typeorm migration:run -- -d src/data-source (para rodar as migrations)

npm run dev (para iniciar o servidor)


## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuários                           | Qualquer usuário, obrigatório token    |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Obrigatório token e dono da conta      |
| DELETE | /users/:id                 | Realiza um soft delete no usuário                 | Obrigatório token e dono da conta      |



### **POST - /login**

Rota de login do usuário. 

**Url da requisição**: `http://localhost:3000/login`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
	"email":"rafael@email.com",
	"password":"123456"
}
```

| Resposta do servidor:                               |
| --------------------------------------------------- |
| Body: Formato Json                                  |
| Status code: <b style="color:green">200 OK</b> |

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbEBlbWFpbC5jb20iLCJpYXQiOjE2OTAzMTU1MzIsImV4cCI6MTY5MDkyMDMzMiwic3ViIjoiYTk1NWRjZDctMDQxNS00MzQ3LTgxMDEtYjdkNTJmNzM0ODFjIn0.czMWiRh1AeEyYyv-k-iCTAUlt8uLTbieKHrEtBm8xlA"
}
```

### **POST - /users**

Rota de criação de usuário. 

**Url da requisição**: `http://localhost:3000/users`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
	"name":"Rafael",
	"email":"rafael@email.com",
	"phone":"719999-9999",
	"password":"123456"
}
```

| Resposta do servidor:                               |
| --------------------------------------------------- |
| Body: Formato Json                                  |
| Status code: <b style="color:green">201 CREATED</b> |

```json
{
	"id": "a955dcd7-0415-4347-8101-b7d52f73481c",
	"name": "Rafael",
	"email": "rafael@email.com",
	"phone": "719999-9999",
	"createdAt": "2023-07-25"
}
```

### **GET - /users**

Rota de listagem de todos usuários.

**Url da requisição**: `http://localhost:3000/users`

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
[
	{
		"id": 1,
		"name": "Rafael",
		"email": "rafael@email.com",
		"phone": "718888-9999",
		"createdAt": "2023-07-25"
	},
	{
		"id": 2,
		"name": "Carlos",
		"email": "carlos@email.com",
		"phone": "719999-9999",
		"createdAt": "2023-07-25"
	},
	{
		"id": 3,
		"name": "Silvia",
		"email": "silvia@email.com",
		"phone": "717777-9999",
		"createdAt": "2023-07-25"
	}
]
```

### **PATCH - /users/:id**

Atualizar o úsuário dono da conta pelo id recebido nos parâmetros da rota.

**Url da requisição**: `http://localhost:3000/users/3`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
	"name":"Silvia Helena",
	"phone":"71 6666-5555"
}
```

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{
	"id": 3,
	"name": "Silvia Helena",
	"email": "silvia@email.com",
	"phone": "71 6666-5555",
	"createdAt": "2023-07-25"
}
```

### **DELETE - /users/:id**

Deletar o úsuário dono da conta pelo id recebido nos parâmetros da rota.

| Resposta do servidor:                                  |
| ------------------------------------------------------ |
| Body: **Nenhum body deve ser retornado**               |
| Status code: <b style="color:green">204 NO CONTENT</b> |

```json

```

