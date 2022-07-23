//Grasshopper - Object syntax debug
//
//Object debugging
//While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.

var rooms = {
    first: {
      description: 'This is the first room',
      items: {
        chair: 'The old chair looks comfortable',
        lamp: 'This lamp looks ancient'
      }
    },
    second: {
      description: 'This is the second room',
      items: {
        couch: 'This couch looks like it would hurt your back',
        table: 'On the table there is an unopened bottle of water'
      }
    }
  }

Expected: '{ first: \n   { description: \'This is the first room\',\n     items: \n      { chair: \'The old chair looks comfortable\',\n        lamp: \'This lamp looks ancient\' } },\n  second: \n   { description: \'This is the second room\',\n     items: \n      { couch: \'This couch looks like it would hurt your back\',\n        table: \'On the table there is an unopened bottle of water\' } } }', 
instead got: '{ first: \n   { description: \'This is the first room\',\n     items: \n      { chair: \'The old chair looks comfortable\',\n        lamp: \'This lamp looks ancient\' },\n     second: { description: \'This is the second room\', items: [Object] } } }'