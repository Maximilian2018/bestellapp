import uid from 'uid'
import BestellButton from '../components/BestellButton'
const initialState = {
  items: [],
  cartOpen: true,
  total: 0
}

export default {
  selectedTable: 1,
  tables: {},
  userInput: '',
  tableNumbers: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,

    10,

    20,
    30,
    40,

    61,
    62,
    63,
    64,

    100,
    200,
    300,
    400
  ],

  buttons: [
    {
      text: 'Gazpacho',
      price: 8.5,
      id: uid(),
      category: 'bestSeller'
    },
    {
      text: 'Sommer Salad',
      price: 10.0,
      id: uid(),
      category: 'bestSeller'
    },
    {
      text: 'Beef Kobe Steak',
      price: 34.99,
      id: uid(),
      category: 'bestSeller'
    },
    {
      text: 'Champagner',
      price: 90.0,
      id: uid(),
      category: 'bestSeller'
    },
    {
      text: 'Pitcher Salitos',
      price: 18.99,
      id: uid(),
      category: 'bestSeller'
    },
    {
      text: 'Grilled Snapper ',
      price: 32.5,
      id: uid(),
      category: 'bestSeller'
    },
    {
      text: 'Corn Chicken',
      price: 24.6,
      id: uid(),
      category: 'bestSeller'
    },
    { text: 'Gazpacho', price: 8.5, count: 0, id: uid(), category: 'starters' },
    {
      text: 'Minestrone',
      price: 9.2,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Vitello Tonnato',
      price: 16.5,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Cheese Plate',
      price: 19.0,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Egs Benedikt',
      price: 12.8,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Fish Soup',
      price: 12.99,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Antipasti mix',
      price: 10.0,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Sommer Salad',
      price: 11.99,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Sushi mix',
      price: 18.99,
      id: uid(),
      category: 'starters'
    },
    {
      text: 'Beef Filet',
      price: 36.99,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Beef Kobe Steak',
      price: 34.99,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Beef Wagyu',
      price: 45.99,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Chicken Sommer',
      price: 22.6,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Corn Chicken',
      price: 24.6,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Grilled Tuna Steaks',
      price: 32.99,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Grilled Snapper ',
      price: 32.5,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Beach Burger Sommer',
      price: 15.0,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Salad Scallops ',
      price: 19.0,
      id: uid(),
      category: 'mainCourses'
    },
    {
      text: 'Margarita Cupcakes ',
      price: 9.99,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Banana Pudding ',
      price: 7.5,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Peanut Butter Cookie',
      price: 4.5,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Pumpkin Pie Brownie ',
      price: 4.5,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Cookie Dough Cheesecake',
      price: 8.0,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Red Velvet Cake ',
      price: 8.0,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Triple Chocolate Mousse',
      price: 6.0,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Caramel Apple Cake',
      price: 8.0,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Lemon Blueberry Cake',
      price: 8.0,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Giant Oreo Cake',
      price: 6.9,
      id: uid(),
      category: 'dessert'
    },
    {
      text: 'Pitcher Heineken ',
      price: 16.99,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Pitcher Becks ',
      price: 18.99,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Pitcher Salitos',
      price: 18.99,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Pitcher Astra',
      price: 15.99,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'White Wine 0.75',
      price: 22.5,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Red Wine 0,75l',
      price: 22.5,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Sparkling Wine 0,75l',
      price: 24.99,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Sparkling Wine 0,2l',
      price: 7.5,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Champagner 0,75l',
      price: 90.0,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Champagner 0,2l',
      price: 15.0,
      id: uid(),
      category: 'alcohol'
    },
    { text: 'Shoots', price: 4.0, count: 0, id: uid(), category: 'alcohol' },
    {
      text: 'Coktail of the day',
      price: 12.5,
      id: uid(),
      category: 'alcohol'
    },
    {
      text: 'Flasche Wasser 0.75l mit ',
      price: 4.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Flasche Wasser 0.75l ohne ',
      price: 4.4,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Apfelschorle 0.3l',
      price: 3.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Apfelschorle 0.5l',
      price: 4.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Cola 0.3l',
      price: 3.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Cola 0.5l',
      price: 4.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Fanta 0.3l',
      price: 3.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Fanta 0.5l',
      price: 4.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Sprite 0.3l',
      price: 3.0,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Sprite 0.5l',
      price: 4.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Capuchino',
      price: 3.8,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Latte Macciato',
      price: 4.0,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Espresso',
      price: 2.5,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Espresso double',
      price: 3.8,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Home Coffee',
      price: 3.0,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'Hot Milk with Honey',
      price: 2.8,
      id: uid(),
      category: 'softdrinks'
    },
    {
      text: 'extra Parmesan ',
      price: 2.5,
      id: uid(),
      category: 'extrawuensche'
    },
    {
      text: 'extra Chicken',
      price: 7.5,
      id: uid(),
      category: 'extrawuensche'
    },
    {
      text: 'extra Beef',
      price: 12.0,
      id: uid(),
      category: 'extrawuensche'
    },
    {
      text: 'extra Fisch',
      price: 11.0,
      id: uid(),
      category: 'extrawuensche'
    },
    { text: 'mit Zitrone', count: 0, id: uid(), category: 'extrawuensche' },
    { text: 'ohne Koriander', count: 0, id: uid(), category: 'extrawuensche' },
    { text: 'ohne Gluten ', count: 0, id: uid(), category: 'extrawuensche' },
    { text: 'ohne Koffein', count: 0, id: uid(), category: 'extrawuensche' },
    { text: 'ohne Dressing', count: 0, id: uid(), category: 'extrawuensche' },
    { text: 'ohne Eiswürfel ', count: 0, id: uid(), category: 'extrawuensche' },
    { text: 'extra Eiswürfel', count: 0, id: uid(), category: 'extrawuensche' },
    {
      text: 'extra Sahne',
      price: 2.0,
      id: uid(),
      category: 'extrawuensche'
    },
    { text: 'ohne Sahne', count: 0, id: uid(), category: 'extrawuensche' }
  ]
}
