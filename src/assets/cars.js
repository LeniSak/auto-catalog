const cars = [
  {
    id: '2f311014-06fe-47ae-848d-ca9e8ff3eda8',
    model_name: 'Новый Touareg',
    price: 5541000,
    features: [
      'Литые диски',
      'Светодиодные фары',
      'Кожаные сидения',
      'Электропривод сидений',
      'Память сидений',
      '2х-зонный климат контроль',
      'Премиум Аудио',
      'Навигация',
      'App Connect',
      'Беспроводная зарядка',
      'Кожаный руль',
      'Мультируль',
      'Камера заднего вида',
      'Система Keyless Access',
      'Электропривод зеркал',
      'Датчик контроля давления в шинах',
      'Фронтальные подушки безопасности',
      'Передние боковые подушки безопасности',
      'Шторки безопасности',
      'Park Assist',
      'Система Front Assist',
      'Система Light Assist',
      'Подогрев передних сидений',
      'Подогрев задних сидений',
      'Подогрев лобового стекла',
      'Подогрев руля',
      'Подогрев зеркал',
    ],
    dealer: {
      name: 'ТЦ Кунцево',
      city: 'Москва',
      address: 'ул. Горбунова, 29',
      latitude: 55.7224,
      longitude: 37.3842,
      url: 'http://www.volkswagen-kuntsevo.ru ',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_status/suv/2T2T/1.png',
    ],
  },
  {
    id: '5234df27-aa4c-4be7-a539-8a23db9f6eab',
    model_name: 'Polo',
    kit_name: 'Drive',
    price: 903880,
    features: [
      'Штампованые диски',
      'Галогеновые фары',
      'Электропривод зеркал',
      'Фронтальные подушки безопасности',
      'Подогрев передних сидений',
      'Подогрев зеркал',
      'Кондиционер',
    ],
    dealer: {
      name: 'Фольксваген Центр Подольск',
      city: 'Подольск',
      address: 'Пр-т Юныx Ленинцев, д. 1И',
      latitude: 55.468249,
      longitude: 37.558852,
      url: 'http://www.vw-avtoruss.ru/',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/polo/polo_sedan_2016/new_polo_drive/sedan/K5K5/1.png',
    ],
  },
  {
    id: '40c15123-8c8d-4cfc-9918-2028a73c3e47',
    model_name: 'Новый Touareg',
    kit_name: 'Status',
    price: 5195000,
    features: [
      'Литые диски',
      'Светодиодные фары',
      'Кожаные сидения',
      'Панорамный люк',
      'Электропривод сидений',
      'Вентиляция сидений',
      'Память сидений',
      'Сидения с массажем',
      '2х-зонный климат контроль',
      'Премиум Аудио',
      'Навигация',
      'App Connect',
      'Беспроводная зарядка',
      'Кожаный руль',
      'Мультируль',
      'Камера заднего вида',
      'Система Keyless Access',
      'Электропривод зеркал',
      'Датчик контроля давления в шинах',
      'Фронтальные подушки безопасности',
      'Передние боковые подушки безопасности',
      'Шторки безопасности',
      'Park Assist',
      'Система Front Assist',
      'Система Light Assist',
      'Подогрев задних сидений',
      'Подогрев лобового стекла',
      'Подогрев руля',
      'Стояночный отопитель',
    ],
    dealer: {
      name: 'Автоцентр Великан',
      city: 'Москва',
      address: 'Новорязанское ш., 15а',
      latitude: 55.6558,
      longitude: 37.907,
      url: 'http://velikan-vw.ru/',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_status/suv/8H8H/1.png',
    ],
  },
  {
    id: 'd3bfbadd-ed37-45e0-a070-d28d7d552ff2',
    model_name: 'Tiguan',
    kit_name: 'City',
    price: 2094500,
    features: [
      'Литые диски',
      'Светодиодные фары',
      'Динамический поворотный свет',
      '3х-зонный климат контроль',
      'Диагональ дисплея: 8 дюймов',
      'Bluetooth',
      'Кожаный руль',
      'Мультируль',
      'Камера заднего вида',
      'Электропривод двери багажника',
      'Электропривод зеркал',
      'Датчик контроля давления в шинах',
      'Задние боковые подушки безопасности',
      'Передние боковые подушки безопасности',
      'Фронтальные подушки безопасности',
      'Шторки безопасности',
      'Park Assist',
      'Park Pilot',
      'Функция Auto-hold',
      'Адаптивный круиз-контроль',
      'Датчик дождя',
      'Система Side Assist',
      'Система Front Assist',
      'Подогрев задних сидений',
      'Подогрев передних сидений',
      'Подогрев лобового стекла',
      'Подогрев руля',
      'Подогрев зеркал',
      'Тонировка',
      'Рейлинги',
    ],
    dealer: {
      name: 'АА Мэйджор Авто',
      city: 'Москва',
      address: 'Новорижское шоссе, 9 км от МКАД',
      latitude: 55.7894,
      longitude: 37.247,
      url: 'http://www.major-vw.ru',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/tiguan/tiguan_2017/tiguan_2017_city/suv/0Q0Q/1.png',
    ],
  },
  {
    id: '9a03cc9f-17a6-40e4-bfcf-fcca6c081887',
    model_name: 'Polo',
    kit_name: 'Comfortline',
    price: 820890,
    features: [
      'Штампованые диски',
      'Галогеновые фары',
      'Кожаный руль',
      'Мультируль',
      'Электропривод зеркал',
      'Фронтальные подушки безопасности',
      'Подогрев передних сидений',
      'Подогрев зеркал',
      'Кондиционер',
    ],
    dealer: {
      name: 'Фольксваген Центр Лосиный Остров',
      city: 'Москва',
      address: 'Ярославское шоссе, владение 2В, строение 1',
      latitude: 55.8812,
      longitude: 37.7316,
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/polo/polo_sedan_2016/new_polo_comfortline/sedan/2T2T/1.png',
    ],
  },
  {
    id: '05aff938-7ba6-45e6-a5df-ef09525b0333',
    model_name: 'Polo',
    kit_name: 'Highline',
    price: 961880,
    features: [
      'Литые диски',
      'Ксеноновые фары',
      'Кожаный руль',
      'Мультируль',
      'Электропривод зеркал',
      'Фронтальные подушки безопасности',
      'Подогрев передних сидений',
      'Подогрев лобового стекла',
      'Подогрев зеркал',
    ],
    dealer: {
      name: 'Фаворит xофф',
      city: 'Москва',
      address: 'Дорожный 1-й проезд, д.4',
      url: 'http://www.vw-favorit.ru ',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/polo/polo_sedan_2016/new_polo_highline/sedan/2T2T/1.png',
    ],
  },
  {
    id: '2aa9f9f1-972b-41f3-bc80-cf4e9d01741b',
    model_name: 'Polo',
    kit_name: 'Drive',
    price: 888880,
    features: [
      'Штампованые диски',
      'Галогеновые фары',
      'Электропривод зеркал',
      'Фронтальные подушки безопасности',
      'Подогрев передних сидений',
      'Подогрев зеркал',
      'Кондиционер',
    ],
    dealer: {
      name: 'Автоцентр Сити Каширка',
      city: 'Москва',
      address: ' Внешняя сторона МКАД, 23 км. ',
      latitude: 0,
      longitude: 0,
      url: 'http://vw.avto-city.ru',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/polo/polo_sedan_2016/new_polo_drive/sedan/7H7H/1.png',
    ],
  },
  {
    id: '279570bf-6bf2-4213-bc97-e3a3c3f940b2',
    model_name: 'Polo',
    kit_name: 'Trendline',
    price: 855880,
    features: [
      'Штампованые диски',
      'Фронтальные подушки безопасности',
      'Кондиционер',
    ],
    dealer: {
      name: 'Фаворит xофф',
      city: 'Москва',
      address: 'Дорожный 1-й проезд, д.4',
      url: 'http://www.vw-favorit.ru ',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/polo/polo_sedan_2016/new_polo_trendline/sedan/2T2T/1.png',
    ],
  },
  {
    id: 'd64ee03c-e156-4906-8e57-be85d9d08383',
    model_name: 'Polo',
    kit_name: 'Trendline',
    price: 795890,
    features: [
      'Штампованые диски',
      'Фронтальные подушки безопасности',
      'Кондиционер',
    ],
    dealer: {
      name: 'ТЦ Кунцево',
      city: 'Москва',
      address: 'ул. Горбунова, 29',
      latitude: 55.7224,
      longitude: 37.3842,
      url: 'http://www.volkswagen-kuntsevo.ru ',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/polo/polo_sedan_2016/new_polo_trendline/sedan/8E8E/1.png',
    ],
  },
  {
    id: 'd792fe8d-e2b8-48a5-81ae-c9768ee95783',
    model_name: 'Polo',
    kit_name: 'Highline',
    price: 976880,
    features: [
      'Литые диски',
      'Ксеноновые фары',
      'Кожаный руль',
      'Мультируль',
      'Электропривод зеркал',
      'Фронтальные подушки безопасности',
      'Подогрев передних сидений',
      'Подогрев лобового стекла',
      'Подогрев зеркал',
    ],
    dealer: {
      name: 'АА Мэйджор Авто',
      city: 'Москва',
      address: 'Новорижское шоссе, 9 км от МКАД',
      latitude: 55.7894,
      longitude: 37.247,
      url: 'http://www.major-vw.ru',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/polo/polo_sedan_2016/new_polo_highline/sedan/7H7H/1.png',
    ],
  },
  {
    id: '7bd27a4a-3fe0-4361-b239-740c4b639382',
    model_name: 'Tiguan',
    kit_name: 'City',
    price: 1919000,
    features: [
      'Литые диски',
      'Светодиодные фары',
      'Динамический поворотный свет',
      '3х-зонный климат контроль',
      'Диагональ дисплея: 8 дюймов',
      'Bluetooth',
      'Кожаный руль',
      'Мультируль',
      'Камера заднего вида',
      'Электропривод двери багажника',
      'Электропривод зеркал',
      'Датчик контроля давления в шинах',
      'Задние боковые подушки безопасности',
      'Передние боковые подушки безопасности',
      'Фронтальные подушки безопасности',
      'Шторки безопасности',
      'Park Assist',
      'Park Pilot',
      'Функция Auto-hold',
      'Адаптивный круиз-контроль',
      'Датчик дождя',
      'Система Side Assist',
      'Система Front Assist',
      'Подогрев задних сидений',
      'Подогрев передних сидений',
      'Подогрев лобового стекла',
      'Подогрев руля',
      'Подогрев зеркал',
      'Тонировка',
      'Рейлинги',
    ],
    dealer: {
      name: 'Автоцентр Великан',
      city: 'Москва',
      address: 'Новорязанское ш., 15а',
      latitude: 55.6558,
      longitude: 37.907,
      url: null,
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/tiguan/tiguan_2017/tiguan_2017_city/suv/0Q0Q/1.png',
    ],
  },
  {
    id: 'f96dadd7-c49a-4c57-bcce-b4b951c4f08c',
    model_name: 'Новый Touareg',
    kit_name: 'R-Line',
    price: 5336000,
    features: [
      'Литые диски',
      'Светодиодные фары',
      'Кожаные сидения',
      'Пакет отделки R-line',
      'Электропривод сидений',
      'Память сидений',
      '2х-зонный климат контроль',
      'Active Info Display',
      'Навигация',
      'App Connect',
      'Беспроводная зарядка',
      'Кожаный руль',
      'Мультируль',
      'Камера заднего вида',
      'Система Keyless Access',
      'Электропривод зеркал',
      'Датчик контроля давления в шинах',
      'Фронтальные подушки безопасности',
      'Передние боковые подушки безопасности',
      'Шторки безопасности',
      'Park Assist',
      'Адаптивный круиз-контроль',
      'Система Front Assist',
      'Система Light Assist',
      'Подогрев передних сидений',
      'Подогрев задних сидений',
      'Подогрев лобового стекла',
      'Подогрев руля',
      'Подогрев зеркал',
    ],
    dealer: {
      name: 'ТЦ Кунцево',
      city: 'Москва',
      address: 'ул. Горбунова, 29',
      latitude: 55.7224,
      longitude: 37.3842,
      url: 'http://www.volkswagen-kuntsevo.ru ',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_rline/suv/2T2T/1.png',
    ],
  },
  {
    id: '827405d8-8eb8-4f61-be64-61ee892c3dba',
    model_name: 'Passat',
    kit_name: 'Alltrack',
    price: 2457360,
    features: [
      'Литые диски',
      'Светодиодные фары',
    ],
    dealer: {
      name: 'Автоцентр Немецкий Дом',
      city: 'Балашиха',
      latitude: '',
      longitude: '',
      url: 'http://www.nemdom.ru',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/passat_alltrack/passat_alltrack_b8/passat_alltrack_b8_alltrack/vagon/2T2T/1.png',
    ],
  },
  {
    id: 'c53dc21b-37a3-47c1-947d-3c412387c14a',
    model_name: 'Tiguan',
    kit_name: 'City',
    price: 2321300,
    features: [
      'Литые диски',
      'Светодиодные фары',
      'Динамический поворотный свет',
      'Сидения с массажем',
      '3х-зонный климат контроль',
      'Диагональ дисплея: 8 дюймов',
      'Bluetooth',
      'Кожаный руль',
      'Мультируль',
      'Камера заднего вида',
      'Электропривод двери багажника',
      'Электропривод зеркал',
      'Датчик контроля давления в шинах',
      'Фронтальные подушки безопасности',
      'Шторки безопасности',
      'Задние боковые подушки безопасности',
      'Передние боковые подушки безопасности',
      'Park Assist',
      'Park Pilot',
      'Функция Auto-hold',
      'Адаптивный круиз-контроль',
      'Датчик дождя',
      'Система Side Assist',
      'Система Front Assist',
      'Подогрев задних сидений',
      'Подогрев передних сидений',
      'Подогрев лобового стекла',
      'Подогрев руля',
      'Подогрев зеркал',
      'Тонировка',
      'Рейлинги',
    ],
    dealer: {
      name: 'Автоцентр Немецкий Дом',
      city: 'Балашиха',
      latitude: 55.788662,
      longitude: 37.8793516,
      url: 'http://www.nemdom.ru',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/tiguan/tiguan_2017/tiguan_2017_city/suv/K5K5/1.png',
    ],
  },
  {
    id: '1c4aff34-55cf-4082-ba49-91b0c27a3866',
    model_name: 'Tiguan',
    kit_name: '',
    price: 1984400,
    features: ['2х-зонный климат контроль',
      'Навигация',
    ],
    dealer: {
      name: 'Автоцентр Великан',
      city: 'Москва',
      address: 'Новорязанское ш., 15а',
      url: 'http://velikan-vw.ru/',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/tiguan/tiguan_2017/tiguan_2017_trendline/suv/K5K5/1.png',
    ],
  },
  {
    id: '6e747379-e2f6-449e-b135-8ebd9f5388f6',
    model_name: 'Новый Touareg',
    kit_name: 'Status',
    price: '5155000',
    features: [
      'Литые диски',
      'Светодиодные фары',
      'Кожаные сидения',
      'Пакет отделки R-line',
      'Электропривод сидений',
      'Память сидений',
      '2х-зонный климат контроль',
      'Навигация',
      'App Connect',
      'Беспроводная зарядка',
      'Кожаный руль',
      'Мультируль',
      'Камера заднего вида',
      'Система Keyless Access',
      'Электропривод зеркал',
      'Датчик контроля давления в шинах',
      'Шторки безопасности',
      'Передние боковые подушки безопасности',
      'Фронтальные подушки безопасности',
      'Park Assist',
      'Система Front Assist',
      'Система Light Assist',
      'Подогрев задних сидений',
      'Подогрев передних сидений',
      'Подогрев лобового стекла',
      'Подогрев руля',
      'Подогрев зеркал',
      'Стояночный отопитель',
    ],
    dealer: {
      name: 'АА Мэйджор Авто',
      city: 'Москва',
      address: 'Новорижское шоссе, 9 км от МКАД',
      latitude: 55.7894,
      url: 'http://www.major-vw.ru',
    },
    images: [
      'https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_status/suv/0R0R/1.png',
    ],
  },
];

export default cars