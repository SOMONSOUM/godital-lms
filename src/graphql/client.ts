import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { Kind, OperationTypeNode, DocumentNode } from "graphql";
import { createClient as createWsClient } from "graphql-ws";
import { env } from "@/configs/env";

const extractedUrl = env.api.replace(/^https?:\/\//, "");
const httpLink = new HttpLink({
  uri: `${env.api}/graphql`,
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createWsClient({
          url: env.api.startsWith("https://")
            ? `wss://${extractedUrl}/graphql`
            : `ws://${extractedUrl}/graphql`,
        })
      )
    : null;
const link =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }: { query: DocumentNode }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === Kind.OPERATION_DEFINITION &&
            definition.operation === OperationTypeNode.SUBSCRIPTION
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
