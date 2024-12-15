const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err))


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}

const orderSchema = new Schema({
    item: String,
    price: Number,

});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("pre middleware triggered")
// })
customerSchema.post("findOneAndDelete", async (customers) => {
    console.log("post middleware triggered")
    if (customers.orders.length) {
        let res =await Order.deleteMany({ _id: { $in: customers.orders } })
        console.log(res)
    }
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};


const addCustomer = async () => {
    let cust1 = new Customer({
        name: "Bhupendra Yogi",
    })
    let order1 = await Order.findOne({ item: "samosa" });
    let order2 = await Order.findOne({ item: "vada pav" });

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);
}

// addCustomer();

const addOrders = async () => {
    let res = await Order.insertMany([
        {
            item: "samosa",
            price: 10,
        },
        {
            item: "vada pav",
            price: 15,
        },
        {
            item: "pav bhaji",
            price: 20,
        }]
    )
    console.log(res);
}
// addOrders();

//handling deletion part

const addCust = async () => {
    let newCust = new Customer({
        name: "karan arjun",
    })
    let newOrder = new Order({
        item: 'bhel',
        price: 20,
    })
    let newOrder2 = new Order({
        item: 'poha',
        price: 15,
    })
    newCust.orders.push(newOrder);
    newCust.orders.push(newOrder2);
    await newOrder.save();
    await newCust.save();

    console.log("added new customer and orders")
}

// addCust();

const delCust = async () => {
    let res = await Customer.findByIdAndDelete("675ebab181716a26cb0700bd");
    console.log(res);
}

delCust();

