const serverlessExpress = require('@codegenie/serverless-express');

async function express(event, context) {
  const { reqHandler } = await import('./dist/grapette/server/server.mjs');
  const server = serverlessExpress({ app: reqHandler });
  return server(event, context);
}

exports.handler = express;
