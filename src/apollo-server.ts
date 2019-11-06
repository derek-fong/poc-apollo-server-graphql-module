import { ApolloServer } from 'apollo-server-express';

import { resolvers } from './resolvers';
import typeDefs from './type-defs.graphql';

export const apolloServer = new ApolloServer({ resolvers, typeDefs });
