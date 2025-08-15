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

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB Atlas (gratuito) ou MongoDB local
- npm ou yarn

## 🛠️ Instalação

1. **Clone o repositório:**
```bash
git clone <seu-repositorio>
cd Encurtador-de-Link
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o MongoDB:**
   - Crie uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Crie um cluster gratuito
   - Configure o acesso (usuário e IP)
   - Copie a string de conexão

4. **Configure as variáveis:**
   - Edite `config/Constants.ts`
   - Substitua a string de conexão do MongoDB

5. **Compile o projeto:**
```bash
npm run build
```

6. **Execute o servidor:**
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:5000`

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
├── public/                      # Frontend
│   ├── index.html              # Página principal
│   ├── styles.css              # Estilos CSS
│   └── script.js               # JavaScript
├── dist/                       # Arquivos compilados
└── package.json
```

## 📖 Como Usar

### **Interface Web**
1. Acesse `http://localhost:5000`
2. Cole uma URL longa no campo
3. Clique em "Encurtar"
4. Copie a URL encurtada gerada

### **API REST**

**Encurtar URL:**
```bash
POST /api/shorten
Content-Type: application/json

{
  "originURL": "https://www.google.com"
}
```

**Resposta:**
```json
{
  "_id": "...",
  "hash": "abc123",
  "originURL": "https://www.google.com",
  "shortURL": "http://localhost:5000/abc123",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Acessar URL encurtada:**
```bash
GET /api/abc123
```

**Testar API:**
```bash
GET /api
```

## 🎨 Frontend

O frontend inclui:
- **Design Moderno**: Gradientes e animações suaves
- **Responsivo**: Adapta-se a qualquer dispositivo
- **UX Otimizada**: Feedback visual e validação em tempo real
- **Acessibilidade**: Suporte a teclado e leitores de tela
- **Performance**: Carregamento rápido e otimizado

## 🔧 Scripts Disponíveis

- `npm run build` - Compila o TypeScript
- `npm run build:watch` - Compila em modo watch
- `npm run dev` - Executa em modo desenvolvimento
- `npm run start` - Executa em produção
- `npm run clean` - Remove arquivos compilados
- `npm run rebuild` - Limpa e recompila

## 🐛 Solução de Problemas

### **MongoDB não conecta**
- Verifique se o MongoDB Atlas está configurado
- Confirme a string de conexão em `config/Constants.ts`
- Verifique se o IP está liberado no MongoDB Atlas

### **Erro de compilação**
- Execute `npm run rebuild`
- Verifique se todas as dependências estão instaladas

### **Frontend não carrega**
- Verifique se o servidor está rodando
- Confirme se os arquivos em `public/` existem

## 📝 Próximas Melhorias

- [ ] Estatísticas de cliques
- [ ] URLs personalizadas
- [ ] Autenticação de usuários
- [ ] Rate limiting
- [ ] Dashboard administrativo
- [ ] API rate limiting
- [ ] Cache com Redis
- [ ] Testes automatizados

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
