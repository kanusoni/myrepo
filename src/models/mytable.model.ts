import {Entity, model, property} from '@loopback/repository';

@model()
export class Mytable extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  loc: string;


  constructor(data?: Partial<Mytable>) {
    super(data);
  }
}

export interface MytableRelations {
  // describe navigational properties here
}

export type MytableWithRelations = Mytable & MytableRelations;
