import express from 'express'
import usersRouter from './route/UserRouter.js';
import db from './db/dataSource.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Server UP !')
});
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    db.initialize();
});

export default app;