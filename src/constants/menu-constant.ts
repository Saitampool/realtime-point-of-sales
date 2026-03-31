export const HEADER_TABLE_MENU = [
  'No',
  'Name',
  'Category',
  'Price',
  'Available',
  'Action',
];

export const CATEGORY_LIST = [
  {
    value: 'mains',
    label: 'Mains',
  },
  {
    value: 'beverages',
    label: 'Beverages',
  },
  {
    value: 'desserts',
    label: 'Desserts',
  },
];

export const INITIAL_MENU = {
  name: '',
  description: '',
  price: '',
  discount: '',
  category: '',
  image_url: '',
  is_available: '',
};

export const INITIAL_STATE_MENU = {
  status: 'idle',
  errors: {
    id: [],
    name: [],
    description: [],
    price: [],
    discount: [],
    category: [],
    image_url: [],
    is_available: [],
    _form: [],
  },
};
