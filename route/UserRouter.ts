import express from "express";
import { User } from "../db/entities/User.js";
import Users from "../@types/UserType.js";

const router = express.Router();

router.get('/users', async (req: Users.Request, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);

    } catch (error) {
        console.log('error');
        res.send('Sth wrong !')
    }
});

router.post('/register', async (req: Users.Request, res) => {
    try {
        const { username, password } = req.body;
        const user = new User();
        user.username = username;
        user.password = password;
        await user.save();
        res.status(200).send("User registered successfully");
    } catch (error) {
        console.log('error');
        res.send('Sth wrong !')
    }
});

export default router;