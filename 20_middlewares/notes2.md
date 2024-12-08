## Form Validation

When we enter data in the form, the browser and/or the web server will check to see if the data is in the `correct format` and `within the constraints` set by the application.

1. **Client-side validation**: Ensures data being sent is in the correct order/format for the database.
2. **Server-side validation**: Ensures data being stored is in the correct schema and also handles errors related to it.

The steps to have Bootstrap validation in the form are:

1. Use the `novalidate` boolean attribute on the form. This disables the browser default feedback tooltips.
2. Add `class="needs-validation"` and `onsubmit="validateForm(event)"` to the form for error inputs (makes input fields red and asks for correct input).

The code follows as:

```html
<form
  method="post"
  action="/listing"
  novalidate
  class="needs-validation"
  onsubmit="validateForm(event)"
></form>
```

3. Add the `formnovalidate` boolean attribute to the submit button at the end.
4. The script of the page should contain this:

```javascript
function validateForm(event) {
  var form = event.target;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
}
```

## How to Show Success and Failure Messages

1. Add a new `div` inside your `subdiv` with a class of `valid-feedback` or `invalid-feedback` depending on the scenario and place a proper message with respect to it.

Like this:

```html
<div class="mb-3">
  <label for="title" class="form-label">Title:</label>
  <input
    type="text"
    name="listing[title]"
    placeholder="Enter a Catchy Title"
    class="form-control"
    required
  />
  <div class="valid-feedback">Title Looks Good</div>
</div>
```

For server-side schema validation in a post request, we are going to use Joi, an npm package that verifies each field of the post request that is going to be pushed into the database. (The other tedious way to do it is a lot of if statements to check if the field is filled or not.)

The multiple if-else statements look like this:

```javascript
if (!newListing.title) {
  throw new ExpressError(400, "send valid title");
}
if (!newListing.price) {
  throw new ExpressError(400, "enter valid price");
}
if (!newListing.location) {
  throw new ExpressError(400, "send valid location");
}
```

## How to Use Joi for Server-Side Schema Validation

1. Create `schema.js` in the same folder as `app.js` with this content:

```javascript
const Joi = require("joi");
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
  }).required(),
});
```

2. Require this in the `app.js`:

```javascript
const listingSchema = require("./schema.js");
```

3. For server-side validation, we can do this:

```javascript
app.post(
  "/listing",
  wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    if (result.error) {
      throw new ExpressError(400, result.error);
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save("listing saved successfully");
    res.redirect("/listing");
  })
);
```

## How to Do All This in the Form of Middleware

1. First, create a middleware like this:

```javascript
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};
```

2. Then we can pass this middleware in various post and put requests like this:

```javascript
app.post(
  "/listing",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save("listing saved successfully");
    res.redirect("/listing");
  })
);
```

> This middleware creates an object with many details. We can extract those like this:

```javascript
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
```