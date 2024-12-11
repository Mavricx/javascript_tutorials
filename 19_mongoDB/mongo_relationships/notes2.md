## mongo relationships

MongoDB relationships refer to how documents are related to one another within a database. There are three main types of relationships:

1. **One-to-One**(1 x 1): A single document is related to one other document.
2. **One-to-Many**(1 x N): A single document is related to multiple documents.
3. **Many-to-Many** (N x N): Multiple documents are related to multiple other documents.

These relationships can be implemented using embedded documents or references.

> We are going to learn one to many relationship with great details
> This is divided into 3 categories

1. **one to few** (e.g, one flipkart user stores a few number of addresses not too many )

   > we are not going to use the address stores by any user individually so we don't need to create an another schema for address and going to store them inside the user data(document)
   > like this

   ```javascript
   {
   _id: ObjectId("jldkjlkasdjkdjkljasdjlh"),
   username: 'whypiku',
   address:[
       {location:'221B Baker Street',city:'london'},
       {location: 'P36  DownTown ', city:'London'}
   ],
   __v:1
   }
   ```

   > after inserting data into the database we can notice that the mongodb has automatically inserted unique ids to each addresses assuming it is a document itself.
   > to avoid this we should write

   ````javascript
      _id:false
      ```

   ````

2. **one to thousands**
   > here in this case when we need to store more than few document inside the main document do don't store them directly.
   > we store the a reference to the child documents inside the parent.

```javascript

{_id: Objectld( "651d223314f1e136d6766e14"),
name:'Rahul Kumar'
orders: [
   Objectld ("651d1e5aØ6e366283d3aeØØ2") ,
   Objectld ("651d1e5aØ6ehjgvhgjkgvhj2") ,
]
__v:0
}
```

3. one to millions
