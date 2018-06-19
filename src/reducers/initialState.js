import uid from 'uid'
import BestellButton from '../components/BestellButton'

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

  bestSeller: [
    { text: 'Gazpacho', price: 8.5, count: 0, id: uid() },
    { text: 'Sommer Salad', price: 10.0, count: 0, id: uid() },
    { text: 'Beef Kobe Steak', price: 34.99, count: 0, id: uid() },
    { text: 'Champagner', price: 90.0, count: 0, id: uid() },
    { text: 'Pitcher Salitos', price: 18.99, count: 0, id: uid() },
    { text: 'Grilled Snapper Asia-Style', price: 32.5, count: 0, id: uid() },
    { text: 'Corn Chicken', price: 24.6, count: 0, id: uid() }
  ],

  starters: [
    { text: 'Gazpacho', price: 8.5, count: 0, id: uid() },
    { text: 'Minestrone', price: 9.2, count: 0, id: uid() },
    { text: 'Vitello Tonnato', price: 16.5, count: 0, id: uid() },
    { text: 'Cheese Plate', price: 19.0, count: 0, id: uid() },
    { text: 'Egs Benedikt', price: 12.8, count: 0, id: uid() },
    { text: 'Fish Soup', price: 12.99, count: 0, id: uid() },
    { text: 'Antipasti mix', price: 10.0, count: 0, id: uid() },
    { text: 'Sommer Salad', price: 11.99, count: 0, id: uid() },
    { text: 'Sushi mix', price: 18.99, count: 0, id: uid() }
  ],

  mainCourses: [
    { text: 'Beef Filet', price: 36.99, count: 0, id: uid() },
    { text: 'Beef Kobe Steak', price: 34.99, count: 0, id: uid() },
    { text: 'Beef Wagyu', price: 45.99, count: 0, id: uid() },
    { text: 'Chicken Sommer', price: 22.6, count: 0, id: uid() },
    { text: 'Corn Chicken', price: 24.6, count: 0, id: uid() },
    { text: 'Grilled Tuna Steaks', price: 32.99, count: 0, id: uid() },
    { text: 'Grilled Snapper Asia-Style', price: 32.5, count: 0, id: uid() },
    { text: 'Beach Burger Sommer', price: 15.0, count: 0, id: uid() },
    { text: 'Salad Scallops ', price: 19.0, count: 0, id: uid() }
  ],

  dessert: [
    { text: 'Margarita Cupcakes ', price: 9.99, count: 0, id: uid() },
    { text: 'Banana Pudding ', price: 7.5, count: 0, id: uid() },
    { text: 'Peanut Butter Cookie', price: 4.5, count: 0, id: uid() },
    { text: 'Pumpkin Pie Brownie ', price: 4.5, count: 0, id: uid() },
    { text: 'Cookie Dough Cheesecake', price: 8.0, count: 0, id: uid() },
    { text: 'Red Velvet Cake ', price: 8.0, count: 0, id: uid() },
    { text: 'Triple Chocolate Mousse', price: 6.0, count: 0, id: uid() },
    { text: 'Caramel Apple Cake', price: 8.0, count: 0, id: uid() },
    { text: 'Lemon Blueberry Cake', price: 8.0, count: 0, id: uid() },
    { text: 'Giant Oreo Cake', price: 6.9, count: 0, id: uid() }
  ],
  alcohol: [
    { text: 'Pitcher Heineken ', price: 16.99, count: 0, id: uid() },
    { text: 'Pitcher Becks ', price: 18.99, count: 0, id: uid() },
    { text: 'Pitcher Salitos', price: 18.99, count: 0, id: uid() },
    { text: 'Pitcher Astra', price: 15.99, count: 0, id: uid() },
    { text: 'White Wine 0.75', price: 22.5, count: 0, id: uid() },
    { text: 'Red Wine 0,75l', price: 22.5, count: 0, id: uid() },
    { text: 'Sparkling Wine 0,75l', price: 24.99, count: 0, id: uid() },
    { text: 'Sparkling Wine 0,2l', price: 7.5, count: 0, id: uid() },
    { text: 'Champagner 0,75l', price: 90.0, count: 0, id: uid() },
    { text: 'Champagner 0,2l', price: 15.0, count: 0, id: uid() },
    { text: 'Shoots', price: 4.0, count: 0, id: uid() },
    { text: 'Coktail of the day', price: 12.5, count: 0, id: uid() }
  ],

  softdrinks: [
    { text: 'Flasche Wasser 0.75l mit ', price: 4.5, count: 0, id: uid() },
    { text: 'Flasche Wasser 0.75l ohne ', price: 4.4, count: 0, id: uid() },
    { text: 'Apfelschorle 0.3l', price: 3.5, count: 0, id: uid() },
    { text: 'Apfelschorle 0.5l', price: 4.5, count: 0, id: uid() },
    { text: 'Cola 0.3l', price: 3.5, count: 0, id: uid() },
    { text: 'Cola 0.5l', price: 4.5, count: 0, id: uid() },
    { text: 'Fanta 0.3l', price: 3.5, count: 0, id: uid() },
    { text: 'Fanta 0.5l', price: 4.5, count: 0, id: uid() },
    { text: 'Sprite 0.3l', price: 3.0, count: 0, id: uid() },
    { text: 'Sprite 0.5l', price: 4.5, count: 0, id: uid() },
    { text: 'Capuchino', price: 3.8, count: 0, id: uid() },
    { text: 'Latte Macciato', price: 4.0, count: 0, id: uid() },
    { text: 'Espresso', price: 2.5, count: 0, id: uid() },
    { text: 'Espresso double', price: 3.8, count: 0, id: uid() },
    { text: 'Home Coffee', price: 3.0, count: 0, id: uid() },
    { text: 'Hot Milk with Honey', price: 2.8, count: 0, id: uid() }
  ],

  extrawuensche: [
    { text: 'extra Parmesan ', price: 2.5, count: 0, id: uid() },
    { text: 'extra Chicken', price: 7.5, count: 0, id: uid() },
    { text: 'extra Beef', price: 12.0, count: 0, id: uid() },
    { text: 'extra Fisch', price: 11.0, count: 0, id: uid() },
    { text: 'mit Zitrone', count: 0, id: uid() },
    { text: 'ohne Koriander', count: 0, id: uid() },
    { text: 'ohne Gluten ', count: 0, id: uid() },
    { text: 'ohne Koffein', count: 0, id: uid() },
    { text: 'ohne Dressing', count: 0, id: uid() },
    { text: 'ohne Eiswürfel ', count: 0, id: uid() },
    { text: 'extra Eiswürfel', count: 0, id: uid() },
    { text: 'extra Sahne', price: 2.0, count: 0, id: uid() },
    { text: 'ohne Sahne', count: 0, id: uid() }
  ]
}
