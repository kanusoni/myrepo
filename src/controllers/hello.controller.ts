// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import {authorize} from '@loopback/authorization';
import {get} from '@loopback/rest';
@authorize({allowedRoles: ['ADMIN']})
export class HelloController {
  @authorize.skip()
  @get('/hello')
  hello(): string {
    return 'Hello world!';
}
  
  @get('/number-of-views')
  numOfViews(): number {
    return 100;
  }
}
