import { Injectable } from '@angular/core';

import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService  implements InMemoryDbService{

  constructor() { }
  createDb(){
    const users=[
      { id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000'  },
      { id: 2, name: 'Shyam', email: 'sh@gmail.com', contact: '1111111111'  },
      { id: 3, name: 'Mohan', email: 'moh@live.in', contact: '2222222222'  },
      { id: 4, name: 'Rohan', email: 'rohan@gmail.com', contact: '6666666666' },
      { id: 5, name: 'Sumit', email: 'sumit@live.in', contact: '9909999999'  }

    ];
    return {users};
  }
}
