import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/trips', (req, res) => {
  res.send({
    data: [
      {
        name: 'Trip 1',
        price: 1000,
        currency: 'EUR',
      },
      {
        name: 'Trip 2',
        price: 1000,
        currency: 'USD',
      },
      {
        name: 'Trip 3',
        price: 3000,
        currency: 'EUR',
      },
    ],
  });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);