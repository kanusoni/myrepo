import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';
//import {UserCredentials} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(User, dataSource);
  }



}
