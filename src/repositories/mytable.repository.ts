import {DefaultCrudRepository} from '@loopback/repository';
import {Mytable, MytableRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MytableRepository extends DefaultCrudRepository<
  Mytable,
  typeof Mytable.prototype.id,
  MytableRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Mytable, dataSource);
  }
}
