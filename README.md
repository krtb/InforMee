# InforMee-WebApp
With a Rails back-end and a React front-end, Informee seeks to shed some light on American politics by allowing users to view the newest bills being introduced to the House, before becoming laws in the Senate.

![](InforMee.gif)

## To Start

* App usese PostgreSql as a database, can't be run without it. Currently working on a solution by using AWS
* Link to [my youtube video](https://youtu.be/HXDGytM1vys) walk through of the app
  
1. cd InforMee-Backend
2. run `rails s -p 3001`
3. open a second tab in your terminal
4. cd InforMee-Frontend
5. run npm start
6. it will ask if you want to run on a different port other than port 3000 currently hosting your rails server
7. Y for yes
8. Site should be accessible on `http://localhost:3000/` if you have no other apps running in the background.
