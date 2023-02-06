# Instagram clone

#### I want to introduce you my Instagram clone that I did using the [MERN](https://www.mongodb.com/mern-stack) methodology.
#### Instagram is still under development, but a lot of work has already been done and of course there is something to show 😊

#### But first things first

#### Technologies stack ([Mongodb](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React](https://reactjs.org/), [Node.js](https://nodejs.org/en/), [Redux](https://redux.js.org/), [SCSS](https://sass-lang.com/))

- ##### When you open the application, the first thing we see, is the login page.

> Login

<img width="1440" alt="Снимок экрана 2023-02-06 в 12 53 00" src="https://user-images.githubusercontent.com/50481830/216964708-fcfedea2-5ec0-4b42-8809-9b88aecb245f.png">

- ##### After login, we are redirected to the main page, where we can see our stories, our posts and recomendations. We have the ability to view and add comments to certain posts, all information such as text of comment, author, count of likes, photos of about each post and so on is stored in the database.

> Home page

https://user-images.githubusercontent.com/50481830/217020577-b2b343c1-d647-4c6b-a652-8216e980940f.mov
 
- ##### We can also save certain posts, and even after reloading the page, the posts will remain saved.

> Saved posts

https://user-images.githubusercontent.com/50481830/216971234-4c06727a-af36-4aff-923f-c01fba6859be.mov

- #### Next, let's look at the profile page, here you can see all the photos related to this account

> Peofile page

https://user-images.githubusercontent.com/50481830/217024909-0d4c6a2d-2048-4b99-a0b9-76f979a56577.mov

- #### Also in the header we have a menu that allows us to go to the profile settings, log out of the account, and also switch the theme, let me show you this

> Theme

https://user-images.githubusercontent.com/50481830/217070647-1988eeb4-74ae-4714-b056-8c3652248493.mov

<h2>But, How it work? 🤔</h2>

We have Mongodb database, since it's [NoSql](https://www.mongodb.com/nosql-explained/nosql-vs-sql) Database, my application's data is stored in the JSON format

<img width="996" alt="Снимок экрана 2023-02-06 в 21 13 33" src="https://user-images.githubusercontent.com/50481830/217075268-a5fb45d4-e2d7-4c1f-9389-80c81e500d70.png">

And the first time the application loads, our frontend makes a request to the backend ([Node.js](https://nodejs.org/en/)) endpoints, which in turn makes a request to our database, and receives the response that we see on the screen.

For example, when saving a post, each click on the save icon causes the post to be saved, and deletion. The same for comments also.

https://user-images.githubusercontent.com/50481830/217076561-2ef5b0b6-c2d3-41fa-ae91-806ddde80a69.mov

<h2>Thank you all for your attention 🥳</h2>
