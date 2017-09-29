# Pokemon CRUD

The model and most views are filled out, but the controller's API routes, client-side javascript, and `new` views are not! So we have to fill them in.

0. Run the seedfile. Then, in `db/index.js`, change the `user` property of the `cn` configuration object from `timothygardner` to whatever your user name is on your computer.
1. Build out the API routes in `controllers/pokemon-controller.js`. We can test them with postman...
2. Build out the client-side Javascript in `public/js/script.js`, so the `edit` view can hit the `put` route in controller.js with appropriate data, and update the database.
3. Fill out the `new.html` form and update the client side javascript in `script.js` so we can create new Pokemon at the `"pokemon/new"` route
