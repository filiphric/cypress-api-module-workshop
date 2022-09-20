# Card endpoints

**`GET`** `/api/cards`

Returns all cards in the database a new card

**example response**
```json
{
  "boardId": {boardId}, // required
  "listId": {listId}, // required
  "name": "buy milk"
}

```
---

**`POST`** `/api/cards`

Creates a new card

**example request**
```json
{
  "boardId": {boardId}, // required
  "listId": {listId}, // required
  "name": "buy milk"
}

```
---
**`PATCH`** `/api/cards/{cardId}`

Changes details of a card  `cardId`

**example request**
```json
{
  "completed": true
}

```
---
**`DELETE`** `/api/cards/{cardId}`

Changes details of a card  `cardId`


---
**`DELETE`** `/api/cards`

Deletes all cards