// index.js
import dotenv from 'dotenv';
import app from "./app/app.js";


dotenv.config({path:"../env"})


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});