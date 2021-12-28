import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

// Whole application will lie in this 'app' variable
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// app.use(express.urlencoded({
//     extended: true
// }));

app.use('/users', usersRoutes);

// If we do not use Route, it will give error 'CANNOT GET /'
app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

