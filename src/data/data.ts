import { IPlaces, IOptions } from '../interfaces/dataInterface';

const places: IPlaces[] = [
  {
    city: 'Helsinki',
    country: 'Finland',
    superHost: false,
    title: 'Stylist apartment in center of the city',
    rating: 4.4,
    maxGuests: 8,
    type: 'Entire apartment',
    beds: 2,
    photo:
      'https://i.ibb.co/nkM6j7N/img-1.jpg',
  },
  {
    city: 'Turku',
    country: 'Finland',
    superHost: false,
    title: 'Nice apartment in center of Helsinki',
    rating: 4.2,
    maxGuests: 5,
    type: 'Entire apartment',
    beds: 3,
    photo:
      'https://i.ibb.co/HNvX684/img-2.jpg',
  },
  {
    city: 'Helsinki',
    country: 'Finland',
    superHost: true,
    title: 'Arty interior in 1900 wooden house',
    rating: 4.5,
    maxGuests: 10,
    type: 'Entire house',
    beds: 6,
    photo:
      'https://i.ibb.co/vjfr02D/img-3.jpg',
  },
  {
    city: 'Helsinki',
    country: 'Finland',
    superHost: false,
    title: 'Apartment next to market spuare',
    rating: 4.48,
    maxGuests: 3,
    type: 'Entire apartment',
    beds: null,
    photo:
      'https://i.ibb.co/3F1h1LD/img-4.jpg',
  },
  {
    city: 'Turku',
    country: 'Finland',
    superHost: true,
    title: 'Villa Aurora guest-house',
    rating: 4.75,
    maxGuests: 9,
    type: 'Entire house',
    beds: null,
    photo:
      'https://i.ibb.co/5xt0M1M/img-5.jpg',
  },
  {
    city: 'Vaasa',
    country: 'Finland',
    superHost: true,
    title: 'A cosy family house',
    rating: 4.95,
    maxGuests: 6,
    type: 'Entire house',
    beds: null,
    photo:
      'https://i.ibb.co/sg8rkCk/img-6.jpg',
  },
  {
    city: 'Vaasa',
    country: 'Finland',
    superHost: false,
    title: 'Lovely Studio near Railway Station',
    rating: 4.68,
    maxGuests: 2,
    type: 'Private room',
    beds: null,
    photo:
      'https://i.ibb.co/fnHP30K/img-7.jpg',
  },
  {
    city: 'Oulu',
    country: 'Finland',
    superHost: false,
    title: 'Peaceful little home in city center',
    rating: 4.12,
    maxGuests: 6,
    type: 'Entire house',
    beds: 3,
    photo:
      'https://i.ibb.co/HCJB1br/img-8.jpg',
  },
  {
    city: 'Oulu',
    country: 'Finland',
    superHost: false,
    title: 'Beautiful new studio apartment nearby the center',
    rating: 4.49,
    maxGuests: 2,
    type: 'Entire apartment',
    beds: 1,
    photo:
      'https://i.ibb.co/8rhmLdv/img-9.jpg',
  },
  {
    city: 'Oulu',
    country: 'Finland',
    superHost: true,
    title: 'Cozy woodhouse flat with wooden sauna',
    rating: 4.38,
    maxGuests: 4,
    type: 'Entire house',
    beds: null,
    photo:
      'https://i.ibb.co/xjNLcWf/img-10.jpg',
  },
  {
    city: 'Vaasa',
    country: 'Finland',
    superHost: false,
    title: 'Brand new studio apartment near the harbour',
    rating: 4.89,
    maxGuests: 6,
    type: 'Entire apartment',
    beds: 3,
    photo:
      'https://i.ibb.co/KrVbF6F/img-11.jpg',
  },
  {
    city: 'Helsinki',
    country: 'Finland',
    superHost: false,
    title: 'Beautiful and comfortable old wooden house',
    rating: 4.63,
    maxGuests: 10,
    type: 'Entire house',
    beds: null,
    photo:
      'https://i.ibb.co/rfJp6wy/img-12.jpg',
  },
  {
    city: 'Turku',
    country: 'Finland',
    superHost: false,
    title: 'Turku Nordic Home near city center',
    rating: 4.24,
    maxGuests: 5,
    type: 'Entire apartment',
    beds: 3,
    photo:
      'https://i.ibb.co/gMCWG5G/img-13.jpg',
  },
  {
    city: 'Turku',
    country: 'Finland',
    superHost: true,
    title: 'Nice 2 room apartment close to everything',
    rating: 4.34,
    maxGuests: 6,
    type: 'Entire apartment',
    beds: 3,
    photo:
      'https://i.ibb.co/0MPYMjm/img-14.jpg',
  },
  {
    city: 'Vaasa',
    country: 'Finland',
    superHost: true,
    title: 'Nice 3 room apartment close to the town',
    rating: 4.55,
    maxGuests: 5,
    type: 'Entire apartment',
    beds: 4,
    photo:
      'https://i.ibb.co/cLZ74cT/img-15.jpg',
  },
];

export const options: IOptions[] = [
  {
    type: 'adults',
    rule: 'Ages 13 or above',
  },
  {
    type: 'children',
    rule: 'Ages 2-12',
  },
];

export default places;
