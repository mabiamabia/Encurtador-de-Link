# Encurtador de Links

Um serviço completo de encurtamento de URLs desenvolvido em TypeScript com Node.js, MongoDB e um frontend moderno e responsivo.

## 🚀 Funcionalidades

- ✅ **Frontend Moderno**: Interface bonita e responsiva
- ✅ **API RESTful**: Endpoints para encurtar e redirecionar URLs
- ✅ **Banco de Dados**: Armazenamento persistente no MongoDB
- ✅ **Validação**: Verificação de URLs duplicadas e validação de entrada
- ✅ **Responsivo**: Funciona perfeitamente em desktop e mobile
- ✅ **Copiar URL**: Botão para copiar URLs encurtadas
- ✅ **Feedback Visual**: Loading states e mensagens de erro

<img width="1291" height="576" alt="image" src="https://github.com/user-attachments/assets/2c7a09c5-ec7e-4b2e-b667-3efc2603f2f3" />


## 📋 Pré-requisitos

- Node.js 
- MongoDB Atlas 
- npm 

## 🏗️ Estrutura do Projeto

```
Encurtador-de-Link/
├── src/
│   └── server/
│       └── index.ts              # Servidor principal
├── controllers/
│   └── URLController.ts          # Lógica de negócio
├── database/
│   ├── MongoConnection.ts        # Conexão com MongoDB
│   └── URL.ts                   # Modelo de dados
├── config/
│   └── Constants.ts             # Configurações
├── interface/                   # Frontend
│   ├── index.html              # Página principal
│   ├── styles.css              # Estilos CSS
│   └── script.js               # JavaScript
├── dist/                       # Arquivos compilados
└── package.json
```

## 📖 Como Usar

1. Acesse `http://localhost:5000`
2. Cole uma URL longa no campo
3. Clique em "Encurtar"
4. Copie a URL encurtada gerada

## 📝 Próximas Melhorias

- [ ] Estatísticas de cliques
- [ ] URLs personalizadas
- [ ] Autenticação de usuários
- [ ] Rate limiting
- [ ] Dashboard administrativo
- [ ] API rate limiting
- [ ] Cache com Redis
- [ ] Testes automatizados
