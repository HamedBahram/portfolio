import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV !== 'production') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        client = new MongoClient(URI, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(URI, options)
    clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
