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
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuários                           | Apenas Admnistradores                  |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Apenas Admnistradores ou dono da conta |
| DELETE | /users/:id                 | Realiza um soft delete no usuário                 | Apenas Admnistradores                  |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /categories                | Criação de categoria                              | Apenas Admnistradores                  |
| GET    | /categories                | Lista todas as categorias                         | Qualquer usuário, não necessita token  |
| GET    | /categories/:id/realEstate | Lista todos imóveis que pertencem a uma categoria | Qualquer usuário, não necessita token  |
| POST   | /realEstate                | Criação de um imóvel                              | Apenas Admnistradores                  |
| GET    | /realEstate                | Lista todos os imóveis                            | Qualquer usuário, não necessita token  |
| POST   | /schedules                 | Agenda uma visita a um imóvel                     | Qualquer usuário, obrigatório token    |
| GET    | /schedules/realEstate/:id  | lista todos os agendamentos de um imóvel          | Apenas Admnistradores                  |

### **POST - /users**

Rota de criação de usuário. 

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

### **GET - /movies**

Deve ser possível listar os filmes armazenados no banco de dados. **_Seguindo as regras de paginação_**

**Url da requisição**: `http://localhost:3000/movies/?sort=price&order=desc&page=2&perPage=3`

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{
    "prevPage": "http://localhost:3000/movies?page=1&perPage=3",
    "nextPage": "http://localhost:3000/movies?page=3&perPage=3",
    "count": 14,
    "data": [
        {
            "id": 8,
            "name": "Filme 08",
            "description": null,
            "duration": 88,
            "price": 72
        },
        {
            "id": 4,
            "name": "Filme 04",
            "description": null,
            "duration": 75,
            "price": 72
        },
        {
            "id": 11,
            "name": "Filme 11",
            "description": null,
            "duration": 7,
            "price": 68
        }
    ]
}
```

### **PATCH - /movies/:id**

Deve ser possível atualizar um filme pelo id recebido nos parâmetros da rota.

**Url da requisição**: `http://localhost:3000/movies/4`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
    "id": 55,
    "duration": 130,
    "price": 200
}
```

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{
    // repare no valor enviado e no recebido do id
    "id": 4,
    "name": "Filme 04",
    "description": null,
    "duration": 130,
    "price": 200
}
```

### **DELETE - /movies/:id**

Deve ser possível deletar um filme pelo id recebido nos parâmetros da rota.

| Resposta do servidor:                                  |
| ------------------------------------------------------ |
| Body: **Nenhum body deve ser retornado**               |
| Status code: <b style="color:green">204 NO CONTENT</b> |

```json

```

