import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Riu Cancun',
      'Live it up in Cancun',
      'https://www.riu.com/blog/wp-content/uploads/2018/07/XLA_16_002-USP.jpg',
      199.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p2',
      'Hotel Paradisus Punta Cana',
      'Kick back at the pool in DR!',
      'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v2255525-1440-1024x683.jpg',
      189.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p3',
      'Pod 51 NYC',
      'Ever stayed in the city that never sleeps?',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/85/b2/3d/pod-51-hotel.jpg?w=900&h=-1&s=1',
      99.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    )
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return { ...this._places.find(p => p.id === id) };
  }
}
