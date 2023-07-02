<h1 align="center"> Ts Api Template with Prisma and MySql </h1>

</br>

## 📑 Architecture
</br>

```markdown
src/
├── adapters/
│   ├── controllers/
│   ├── middlewares/
│   └── repositories/
├── entities/
├── external/
│   ├── database/
│   │   └── prisma/
│   │       └── schema.prisma
│   ├── routes/
│   ├── app.ts
│   ├── envConfig.ts
│   └── server.ts
├── interfaces
├── services
└── shared/
    ├── errors
    ├── schemas
    ├── utils
    └── validators
``` 

---

</br>

## 💾 Techlogies
</br>


```markdown
package.json
|-- NodeJS
|-- Typescript
|   `-- Typescript paths
|-- Express
|-- Vitest
|   |-- Mock extended
|   `-- Coverage c8
|-- Eslint
|   |-- Standard with typescript
|   `-- Import helper plugin
|-- Husky
|   |-- lint staged
|   `-- git commit msg linter
|-- Joi
|   `-- Joi password complexity
|-- Json web token
|-- Cors
|-- Reflect Metadata
|-- Dotenv
`-- Bcrypt
```

### Inspired By: [Lissone](https://github.com/Lissone/simple-node-api-template)