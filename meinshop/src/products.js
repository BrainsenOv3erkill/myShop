const getRandomTimer = () => Math.floor(Math.random() * 1000) + 300;

const products = [
    {
      name: 'Plastik Plane',
      preis: 6.79,
      imageURL: 'https://bilder.obi.at/80d8ca5d-a004-40db-8499-49a7db42a965/pr07F/419058_picture_1.jpg',
      menge: 10,
      timer: getRandomTimer(),
    },
    {
      name: 'Gaffa',
      preis: 9.59,
      imageURL: 'https://bilder.obi.at/dcfebcdd-3fa4-47cd-ba17-cb1288d30338/pr07F/4007872525637_S01_300518.jpg',
      menge: 5,
      timer: getRandomTimer(),
    },
    {
      name: 'Schaufel',
      preis: 23.49,
      imageURL: 'https://bilder.obi.at/d0a60003-3a79-4579-bf2b-a2bc7800db99/pr07F/646477_picture1.jpg',
      menge: 7,
      timer: getRandomTimer(),
    },
    {
      name: 'Säge',
      preis: 159.99,
      imageURL: 'https://bilder.obi.at/ae0a2dce-be3e-4fdb-a21f-be25981de5ac/pr07F/306868_1223_uc4041a_1.jpg',
      menge: 8,
      timer: getRandomTimer(),
    },
    {
      name: 'Tonne',
      preis: 44.99,
      imageURL: 'https://bilder.obi.at/75d3ee6e-cd2e-4bd9-adc7-e0e4655e2347/pr07F/123265_4669_01.jpg',
      menge: 3,
      timer: getRandomTimer(),
    },
    {
      name: 'Säure',
      preis: 49.95,
      imageURL: 'https://i.hood.de/fit-in/3000x3000/filters:no_upscale()/images/19878/198781898.jpg',
      menge: 13,
      timer: getRandomTimer(),
    },
  ];
  
  export default products;
  