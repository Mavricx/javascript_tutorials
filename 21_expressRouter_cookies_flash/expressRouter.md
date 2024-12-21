## Express Router
* Express Routers are way to organize your express application such that out primary app.js file does not not become bloated.
* A router object is an isolated instance of middleware and routes.
* You can think of it as a 'mini-application" capable only for performing middleware and routing functions.
* Every express application has a built-in app router.

```javascript
const router=express.Router(); //creates new router object
```


 