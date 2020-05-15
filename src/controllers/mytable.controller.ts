import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Mytable} from '../models';
import {MytableRepository} from '../repositories';
//import {authenticate} from '@loopback/authentication';

//@authenticate('jwt')
export class MytableController {
  constructor(
    @repository(MytableRepository)
    public mytableRepository : MytableRepository,
  ) {}

  @post('/mytables', {
    responses: {
      '200': {
        description: 'Mytable model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mytable)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mytable, {
            title: 'NewMytable',
            exclude: ['id'],
          }),
        },
      },
    })
    mytable: Omit<Mytable, 'id'>,
  ): Promise<Mytable> {
    return this.mytableRepository.create(mytable);
  }

  @get('/mytables/count', {
    responses: {
      '200': {
        description: 'Mytable model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Mytable) where?: Where<Mytable>,
  ): Promise<Count> {
    return this.mytableRepository.count(where);
  }

  @get('/mytables', {
    responses: {
      '200': {
        description: 'Array of Mytable model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Mytable, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Mytable) filter?: Filter<Mytable>,
  ): Promise<Mytable[]> {
    return this.mytableRepository.find(filter);
  }

  @patch('/mytables', {
    responses: {
      '200': {
        description: 'Mytable PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mytable, {partial: true}),
        },
      },
    })
    mytable: Mytable,
    @param.where(Mytable) where?: Where<Mytable>,
  ): Promise<Count> {
    return this.mytableRepository.updateAll(mytable, where);
  }

  @get('/mytables/{id}', {
    responses: {
      '200': {
        description: 'Mytable model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Mytable, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Mytable, {exclude: 'where'}) filter?: FilterExcludingWhere<Mytable>
  ): Promise<Mytable> {
    return this.mytableRepository.findById(id, filter);
  }

  @patch('/mytables/{id}', {
    responses: {
      '204': {
        description: 'Mytable PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mytable, {partial: true}),
        },
      },
    })
    mytable: Mytable,
  ): Promise<void> {
    await this.mytableRepository.updateById(id, mytable);
  }

  @put('/mytables/{id}', {
    responses: {
      '204': {
        description: 'Mytable PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mytable: Mytable,
  ): Promise<void> {
    await this.mytableRepository.replaceById(id, mytable);
  }

  @del('/mytables/{id}', {
    responses: {
      '204': {
        description: 'Mytable DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mytableRepository.deleteById(id);
  }
}
