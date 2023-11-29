const data = [
  {
    id: 'food-1',
    name: 'Огурцы',
    count: 6,
    price: '$1',
  },
  {
    id: 'food-2',
    name: 'Помидоры',
    count: 10,
    price: '$1.5',
  },
  {
    id: 'food-3',
    name: 'Торт',
    count: 2,
    price: '$20',
  },
  {
    id: 'food-4',
    name: 'Чай черный',
    count: 0,
    price: '$10',
  },
  {
    id: 'food-5',
    name: 'Шоколад (черный)',
    count: 6,
    price: '$25',
  },
  {
    id: 'food-6',
    name: 'Шоколад (белый)',
    count: 6,
    price: '$20',
  },
  {
    id: 'food-7',
    name: 'Шоколад (молочный)',
    count: 6,
    price: '$15',
  },
  {
    id: 'food-8',
    name: 'Капуста',
    count: 20,
    price: '$1.5',
  },
  {
    id: 'food-9',
    name: 'Печенье',
    count: 6,
    price: '$10',
  },
  {
    id: 'food-10',
    name: 'Персик',
    count: 30,
    price: '$1',
  },
  {
    id: 'food-11',
    name: 'Киви',
    count: 60,
    price: '$0.5',
  },
  {
    id: 'food-12',
    name: 'Ананас',
    count: 2,
    price: '$10',
  },
  {
    id: 'food-13',
    name: 'Апельсин',
    count: 3,
    price: '$0.8',
  },
  {
    id: 'food-14',
    name: 'Арбуз',
    count: 6,
    price: '$2',
  },
  {
    id: 'food-15',
    name: 'Лайм',
    count: 10,
    price: '$4',
  },
  {
    id: 'food-16',
    name: 'Кабачок',
    count: 9,
    price: '$1.2',
  },
]

export const foodMockData = data.reduce((acc, item) => ({ ...acc, [item.id]: item }), {})
