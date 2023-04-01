import swaggerJsDocs from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
}

const specs = swaggerJsDocs({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    paths: {
      '/user': {
        get: {
          tags: ['Todo CRUD operations'],
          description: 'Get todos',
          operationId: 'getTodos',
          parameters: [],
          responses: {
            200: {
              description: 'Todos were obtained',
              content: {
                'application/json': {},
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/app.js'],
})
export default [swaggerUi.serve, swaggerUi.setup(specs)]
