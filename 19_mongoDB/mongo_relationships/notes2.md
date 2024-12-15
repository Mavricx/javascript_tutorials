## MongoDB Relationships

MongoDB relationships refer to how documents are related to one another within a database. There are three main types of relationships:

1. **One-to-One** (1 x 1): A single document is related to one other document.
2. **One-to-Many** (1 x N): A single document is related to multiple documents.
3. **Many-to-Many** (N x N): Multiple documents are related to multiple other documents.

These relationships can be implemented using embedded documents or references.

> We are going to learn the one-to-many relationship in great detail.
> This is divided into three categories:

1. **One to Few**

   > (e.g., one Flipkart user stores a few addresses, not too many) [refer user.js in the model]

   > We are not going to use the addresses stored by any user individually, so we don't need to create another schema for addresses and will store them inside the user data (document) like this:

   ```javascript
   {
     _id: ObjectId("jldkjlkasdjkdjkljasdjlh"),
     username: 'whypiku',
     address: [
       { location: '221B Baker Street', city: 'London' },
       { location: 'P36 DownTown', city: 'London' }
     ],
     __v: 1
   }
   ```

   > After inserting data into the database, we can notice that MongoDB has automatically inserted unique IDs to each address, assuming it is a document itself. To avoid this, we should write:

   ```javascript
   _id: false;
   ```

2. **One to Thousands**

   > [refer customer.js in the models]
   > In this case, when we need to store more than a few documents inside the main document, we don't store them directly. We store a reference to the child documents inside the parent.

   ```javascript
   {
     _id: ObjectId("651d223314f1e136d6766e14"),
     name: 'Rahul Kumar',
     orders: [
       ObjectId("651d1e5a06e366283d3ae002"),
       ObjectId("651d1e5a06ehjgvhgjkgvhj2")
     ],
     __v: 0
   }
   ```

### Using Populate

> Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query. In simple terms, if we replace the ObjectId with real documents in the above example, we call it population.
> This only changes how to show data not the data itself.
> We can do that by writing:

```javascript
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  // instead of
  // let result = await Customer.find({});
  console.log(result[0]);
  //if you only want to show username from the given objectId the we can write this
  let result = await Customer.find({}).populate("orders", "username");
};
```

3. **One to Squillions**

   > [refer customer.js in models]
   > This is the largest implementation of the one-to-many relationship, where we store a large number of documents related to a single document/user. For example, multiple users have multiple posts, and instead of storing a large number of posts inside a single user, the better approach is to store the user information inside each post. The child document should contain the parent information. This implementation is similar to the primary key and foreign key concept, but here the parent is the foreign key. This makes individual documents smaller and easier to access.

   ```javascript
   {
     _id: new ObjectId('675aedfe8fec34855a7e4ff1'),
     content: 'This is my first post',
     likes: 4798,
     user: {
       _id: new ObjectId('675aedfe8fec34855a7e4ff0'),
       username: 'whypiku',
       email: 'whypiku@gmail.com',
       __v: 0
     },
     __v: 0
   }
   ```

## For More Details

> Refer to the blog on MongoDB:

[6 Rules of Thumb for MongoDB Schema Design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design)

## Summary of the Blog

1. **Favor embedding unless there is a compelling reason not to.**
2. **Needing to access an object on its own is a compelling reason not to embed it.**
3. **Arrays should not grow without bound.** If there are more than a couple of hundred documents on the “many” side, don’t embed them; if there are more than a few thousand documents on the “many” side, don’t use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed.
4. **Don’t be afraid of application-level joins:** If you index correctly and use the projection specifier, then application-level joins are barely more expensive than server-side joins in a relational database.
5. **Consider the read-to-write ratio with denormalization.** A field that will mostly be read and only seldom updated is a good candidate for denormalization. If you denormalize a field that is updated frequently, then the extra work of finding and updating all the instances of redundant data is likely to overwhelm the savings that you get from denormalization.
6. **As always with MongoDB, how you model your data depends entirely on your particular application’s data access patterns.** You want to structure your data to match the ways that your application queries and updates it.

### Relationship cases on the basis of relationships

1.  `<100s`: can be embedded
2.  `>100s` : array of ObjectId
3.  `>1000s`: store parent inside of the child for high cardinality cases like this.

## Handling Deletion Using Mongoose Middlewares

We can these two mongoose middlewares:

1. **pre**: Runs before the query is executed. (do some task before the delete query)
   > Pre middleware functions are executed one after another, when each middleware calls `next`
2. **post**: Runs after the query is executed. (do some task after the delete query)

> Query middleware is supported for the following Query functions. Query middleware executes when you call `exec()` or `then()` on a Query object, or await on a Query object. In query middleware functions, `this` refers to the `query`.

Here we go with an example:

```javascript
const addCust = async () => {
  let newCust = new Customer({
    name: "karan arjun",
  });
  let newOrder = new Order({
    item: "bhel",
    price: 20,
  });
  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer and orders");
};

// addCust();
```

Let's create a function to delete that:

```javascript
const delCust = async () => {
  let res = await Customer.findOneAndDelete({ name: "karan arjun" });
  console.log(res);
};

delCust();
```

From the above example, we can delete the customer from the database, but the issue is that the documents of the related orders still remain there.

Here we are going to learn how to delete that automatically using a mongoose middleware(either pre or post ).

>note: we have used the query named `findByIdAndDelete()` which which is not on the list of queries which we can pass on to the middlewares(pre or post) 
>but it falls under the query type `findOneAndDelete()` and we can pass on that to the pre intended middlewares.

here is an example
```javascript
