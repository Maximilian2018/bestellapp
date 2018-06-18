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
    { text: 'Gazpacho', count: 0, id: uid() },
    { text: 'Sommer Salad', count: 0, id: uid() },
    { text: 'Beef Kobe Steak', count: 0, id: uid() },
    { text: 'Champagner', count: 0, id: uid() },
    { text: 'Pitcher Salitos', count: 0, id: uid() },
    { text: 'Grilled Snapper Asia-Style', count: 0, id: uid() },
    { text: 'Corn Chicken', count: 0, id: uid() }
  ],

  starters: [
    { text: 'Gazpacho', count: 0, id: uid() },
    { text: 'Minestrone', count: 0, id: uid() },
    { text: 'Vitello Tonnato', count: 0, id: uid() },
    { text: 'Cheese Plate', count: 0, id: uid() },
    { text: 'Egs Benedikt', count: 0, id: uid() },
    { text: 'Fish Soup', count: 0, id: uid() },
    { text: 'Antipasti mix', count: 0, id: uid() },
    { text: 'Sommer Salad', count: 0, id: uid() },
    { text: 'Sushi mix', count: 0, id: uid() }
  ],

  mainCourses: [
    { text: 'Beef Filet', count: 0, id: uid() },
    { text: 'Beef Kobe Steak', count: 0, id: uid() },
    { text: 'Beef Wagyu', count: 0, id: uid() },
    { text: 'Chicken Sommer', count: 0, id: uid() },
    { text: 'Corn Chicken', count: 0, id: uid() },
    { text: 'Grilled Tuna Steaks', count: 0, id: uid() },
    { text: 'Grilled Snapper Asia-Style', count: 0, id: uid() },
    { text: 'Beach Burger Sommer', count: 0, id: uid() },
    { text: 'Salad Scallops ', count: 0, id: uid() }
  ],

  dessert: [
    { text: 'Margarita Cupcakes ', count: 0, id: uid() },
    { text: 'Banana Pudding ', count: 0, id: uid() },
    { text: 'Peanut Butter Cookie', count: 0, id: uid() },
    { text: 'Pumpkin Pie Brownie ', count: 0, id: uid() },
    { text: 'Cookie Dough Cheesecake', count: 0, id: uid() },
    { text: 'Red Velvet Cake ', count: 0, id: uid() },
    { text: 'Triple Chocolate Mousse', count: 0, id: uid() },
    { text: 'Caramel Apple Cake', count: 0, id: uid() },
    { text: 'Lemon Blueberry Cake', count: 0, id: uid() },
    { text: 'Giant Oreo Cake', count: 0, id: uid() }
  ],
  alcohol: [
    { text: 'Pitcher Heineken ', count: 0, id: uid() },
    { text: 'Pitcher Becks ', count: 0, id: uid() },
    { text: 'Pitcher Salitos', count: 0, id: uid() },
    { text: 'Pitcher Astra', count: 0, id: uid() },
    { text: 'White Wine', count: 0, id: uid() },
    { text: 'Red Wine 0,75l', count: 0, id: uid() },
    { text: 'Sparkling Wine 0,75l', count: 0, id: uid() },
    { text: 'Sparkling Wine 0,2l', count: 0, id: uid() },
    { text: 'Champagner 0,75l', count: 0, id: uid() },
    { text: 'Champagner 0,2l', count: 0, id: uid() },
    { text: 'Shoots', count: 0, id: uid() },
    { text: 'Coktail of the day', count: 0, id: uid() }
  ],

  softdrinks: [
    { text: 'Flasche Wasser 0.75l mit ', count: 0, id: uid() },
    { text: 'Flasche Wasser 0.75l ohne ', count: 0, id: uid() },
    { text: 'Apfelschorle 0.3l', count: 0, id: uid() },
    { text: 'Apfelschorle 0.5l', count: 0, id: uid() },
    { text: 'Cola 0.3l', count: 0, id: uid() },
    { text: 'Cola 0.5l', count: 0, id: uid() },
    { text: 'Fanta 0.3l', count: 0, id: uid() },
    { text: 'Fanta 0.5l', count: 0, id: uid() },
    { text: 'Sprite 0.3l', count: 0, id: uid() },
    { text: 'Sprite 0.5l', count: 0, id: uid() },
    { text: 'Capuchino', count: 0, id: uid() },
    { text: 'Latte Macciato', count: 0, id: uid() },
    { text: 'Espresso', count: 0, id: uid() },
    { text: 'Espresso double', count: 0, id: uid() },
    { text: 'Home Coffee', count: 0, id: uid() },
    { text: 'Hot Milk with Honey', count: 0, id: uid() }
  ],

  extrawuensche: [
    { text: 'extra Parmesan ', count: 0, id: uid() },
    { text: 'extra Chicken', count: 0, id: uid() },
    { text: 'extra Beef', count: 0, id: uid() },
    { text: 'extra Fisch', count: 0, id: uid() },
    { text: 'mit Zitrone', count: 0, id: uid() },
    { text: 'ohne Koriander', count: 0, id: uid() },
    { text: 'ohne Gluten ', count: 0, id: uid() },
    { text: 'ohne Koffein', count: 0, id: uid() },
    { text: 'ohne Dressing', count: 0, id: uid() },
    { text: 'ohne Eiswürfel ', count: 0, id: uid() },
    { text: 'extra Eiswürfel', count: 0, id: uid() },
    { text: 'extra Sahne', count: 0, id: uid() },
    { text: 'ohne Sahne', count: 0, id: uid() }
  ]
}
