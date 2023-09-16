import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { schema } from './schemas/schema.js';
import './config.js';

const app = express();
const httpServer = http.createServer(app);

interface MarkoContext {
  token?: String;
}

// Set up Apollo Server
const server = new ApolloServer<MarkoContext>({
  schema: schema as any,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json({ limit: '10mb' }), expressMiddleware(server));

await new Promise<void>((resolve) =>
  httpServer.listen({ port: process.env.PORT || 4000 }, resolve),
);
console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}`);
