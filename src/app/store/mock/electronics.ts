const data = [
  {
    id: 'electronics-1',
    name: 'Огурцы',
    count: 6,
    price: '$1',
  },
  {
    id: 'electronics-2',
    name: 'Помидоры',
    count: 10,
    price: '$1.5',
  },
  {
    id: 'electronics-3',
    name: 'Торт',
    count: 2,
    price: '$20',
  },
  {
    id: 'electronics-4',
    name: 'Чай черный',
    count: 0,
    price: '$10',
  },
  {
    id: 'electronics-5',
    name: 'Шоколад (черный)',
    count: 6,
    price: '$25',
  },
  {
    id: 'electronics-6',
    name: 'Шоколад (белый)',
    count: 6,
    price: '$20',
  },
  {
    id: 'electronics-7',
    name: 'Шоколад (молочный)',
    count: 6,
    price: '$15',
  },
  {
    id: 'electronics-8',
    name: 'Капуста',
    count: 20,
    price: '$1.5',
  },
  {
    id: 'electronics-9',
    name: 'Печенье',
    count: 6,
    price: '$10',
  },
  {
    id: 'electronics-10',
    name: 'Персик',
    count: 30,
    price: '$1',
  },
  {
    id: 'electronics-11',
    name: 'Киви',
    count: 60,
    price: '$0.5',
  },
  {
    id: 'electronics-12',
    name: 'Ананас',
    count: 2,
    price: '$10',
  },
  {
    id: 'electronics-13',
    name: 'Апельсин',
    count: 3,
    price: '$0.8',
  },
  {
    id: 'electronics-14',
    name: 'Арбуз',
    count: 6,
    price: '$2',
  },
  {
    id: 'electronics-15',
    name: 'Лайм',
    count: 10,
    price: '$4',
  },
  {
    id: 'electronics-16',
    name: 'Кабачок',
    count: 9,
    price: '$1.2',
  },
]

export const electronicsMockData = data.reduce((acc, item) => ({ ...acc, [item.id]: item }), {})
