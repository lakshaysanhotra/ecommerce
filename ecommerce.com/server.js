import express from "express"
import dotenv from "dotenv"
import stripe from "stripe"

// load Variables
dotenv.config();

// start Server
const app = express();

app.use(express.static("public"));
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public"});
});

// Success
app.get("/success.html", (req, res) => {
    res.sendFile("success.html", { root: "public"});
});

// cancel
app.get("/cancel.html", (req, res) => {
    res.sendFile("cancel.html", { root: "public"});
});

// Stripe
let stripeGateway = stripe(process.env.stripe_key);
app.post("/stripe-checkout", async (req, res) => {
    const lineItems =req.body.items.map((item) => {
        const unitAmount = parseInt(parseFloat(item.price) * 100);
        console.log("item-price:", item.price);
        console.log("unitAmount:", unitAmount);
        return{
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.title,
                    images: [item.image],
                },
                unit_amount: unitAmount,
            },
            quantity: item.quantity,
        };
    });

    const session = await stripeGateway.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `http://localhost:3000/success.html`,
        cancel_url: `http://localhost:3000/cancel.html`,
        billing_address_collection: "required",
        line_items: lineItems,
    });
    res.json({ url: session.url });
});


app.listen(3000, () => {
    console.log("listing on posrt 3000");
});