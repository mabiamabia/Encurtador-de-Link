export const config = {
    // Para desenvolvimento local:
    API_URL: process.env.API_URL || "http://localhost:5000",
    
    // Para produção (quando tiver o domínio):
    // API_URL: "https://linklift.com",
    
    // Para MongoDB Atlas (substitua pela sua string de conexão):
    MONGO_CONNECTION: process.env.MONGO_CONNECTION || "mongodb+srv://duartecos:JDLOYOpijmzbiMsW@cluster0.owgwiyi.mongodb.net/url-shortener?retryWrites=true&w=majority&appName=Cluster0"
}