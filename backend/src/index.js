const express = require('express');
const cors = require('cors');
const carsRouter = require('./routes/cars');
const UsersRouter = require('./routes/users');
// const ownersRouter = require('./routes/owners');
// const repairsRouter = require('./routes/repairs');
// const partsRouter = require('./routes/parts');

const { portCon } = require('./config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(carsRouter);
// app.use(ownersRouter);
// app.use(repairsRouter);
// app.use(partsRouter);
app.use(UsersRouter);

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.all('*', (req, res) => {
  res.status(404).send({ error: 'Page not found' });
});

app.listen(portCon, () => console.log(`Listening on port ${portCon}`));
