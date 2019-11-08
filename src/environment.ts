const defaultPort = 4000;

export interface Environment {
  apollo: {
    server: {
      introspection: boolean;
      playground: boolean;
    };
  };
  port: number | string;
  voyager: {
    endpointUrl: string | undefined;
  };
}

export const environment: Environment = {
  apollo: {
    server: {
      introspection: process.env.APOLLO_SERVER_INTROSPECTION === 'true',
      playground: process.env.APOLLO_SERVER_PLAYGROUND === 'true',
    },
  },
  port: process.env.PORT || defaultPort,
  voyager: {
    endpointUrl: process.env.VOYAGER_ENDPOINT_URL,
  },
};
