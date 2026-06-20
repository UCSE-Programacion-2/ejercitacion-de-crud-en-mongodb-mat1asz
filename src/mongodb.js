const { MongoClient } = require('mongodb');
const dns = require('dns');

// Para versiones de Node 24.14.0 o superior
dns.setServers(['8.8.8.8']);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';

// Cliente de MongoDB
const client = new MongoClient(MONGO_URI);

/**
 * TODO: Inicializar la conexión a MongoDB
 * 1. Utiliza client.connect() para conectarte al motor de base de datos.
 * Opcional: Imprime por consola que te has conectado correctamente.
 */
async function connectDB() {
    try {
        await client.connect();
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
}

// Función para cerrar la conexión (útil para tests)
async function closeDB() {
    await client.close();
}

module.exports = { client, connectDB, closeDB };
