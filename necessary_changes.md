##### Within API
*Under src folder*

`config`
  - `params.json` add new params for product(style) and user(gender)

`migrations`
  - will add migrations with new fields on tables as well as new joins table
    for crate_products

`modules`
  - need to add a new folder for crate_products with
    - `model.js`
    - `mutation.js`
    - `query.js`
    - `resolver.js`
    - `types.js`

`modules` -> `user`
  - `model.js` update to have style and gender field
  - `mutations.js` within `userSignup` add gender field to fill in
  - user has query to `getGenders`. Need to figure out how if no field currently in DB

`modules` -> `crate`
  - `model.js` update to have gender field
  - `mutations.js` within `crateCreate` and `crateUpdate` add gender
  - `query.js` crate by gender

`modules` -> `product`
  - `model.js` update to have style field
  - `mutations.js` within `productCreate` and `productUpdate` add style
  - `query.js` product by style

`seeders`
  - update `1-user.js`, `2-products.js`, and `3-crates.js` to reflect new schema

`setup`
  - `models.js`
    - `const models` hash update to have crate_products


##### Within WEB

`modules` -> `pages`
  - add page for user to select pictures which will create style preference

 `setup` -> `routes`
  - add route before selecting create to bring user to style preference page
