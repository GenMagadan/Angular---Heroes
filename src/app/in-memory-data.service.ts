import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Доктор АйУбит' },
      { id: 13, name: 'НеБомбит' },
      { id: 14, name: 'СуперЛентяй' },
      { id: 15, name: 'Сувенирчик' },
      { id: 16, name: 'Штопанный' },
      { id: 17, name: 'Кидала' },
      { id: 18, name: 'Док АУЕ' },
      { id: 19, name: 'Сварка' },
      { id: 20, name: 'Ветрище' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
