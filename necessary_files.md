Code
└── api
    ├── public
    │   └── images
    │       └── new foler - holds style catergory pics
    └── src
      ├── config
      │   ├── database.json
      │   └── params.json
      ├── migrations - migration for style preferences linked to user table
      ├── modules
      │   ├── new folder - wardrobe
      │   │   ├── occasion
      │   │   └── style
      │   └── user
      │       ├── model.js - update relationships
      │       └── mutations.js
      └── setup
          ├── schema
          │   ├── mutations.js - add new fields for catergories/wardrobe
          │   └── queries.js - add new fields for catergories/wardrobe
          └── models.js - need to import new modules (categrories/wardrobe)


Code
└── web
    ├── src
        ├── modules
        │   ├── pages
        │   
        └── setup
            ├── routes
