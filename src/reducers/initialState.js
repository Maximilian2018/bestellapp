import uid from 'uid'

export default {
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

  starters: [
    { text: 'Gazpacho', isSelected: false, id: uid() },
    { text: 'Minestrone', isSelected: false, id: uid() },
    { text: 'Vitello Tonnato', isSelected: false, id: uid() },
    { text: 'Käseplatte', isSelected: false, id: uid() },
    { text: 'Eier Benedikt', isSelected: false, id: uid() },
    { text: 'Carpaccio', isSelected: false, id: uid() }
  ],

  mainCourses: [
    { text: 'ZwiebelTarte', isSelected: false, id: uid() },
    { text: 'Salat Sommer', isSelected: false, id: uid() }
  ]
}
