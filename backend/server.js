const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');
const app = express();

const OrgModel = require("./models/organizations");
const UserModel = require("./models/users");


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://vedsoolgiri:iC9lF7L1pnJNBkPQ@cluster0.zoz0idj.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));




app.listen(3001, ()=> {
    //  console.log('Server up and running on 3001');
});




app.post('/DevRegister', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const skillset = req.body.skillset;
    const user = new UserModel({
        username: username,
        password: password,
        email: email,
        skillset: skillset
    });

    try {
        await user.save();
        res.send({ user });
    } catch (error) {
        res.status(500).send({ message: "Error registering user", error });
    }
});

app.post('/NGORegister', async (req, res) => {
    const name = req.body.name;
    const password= req.body.password;
    const email = req.body.email;
    const location = req.body.location;
    const purpose= req.body.purpose;
    const lookingFor= req.body.lookingFor;

    const org = new OrgModel({
        name: name,
        password: password,
        email : email,
        location : location,
        purpose: purpose,
        lookingFor: lookingFor
    });

    try {
        await org.save();
        res.send({ org });
    } catch (error) {
        res.status(500).send({ message: "Error registering user", error });
    }
});
