const express = require('express');
const app = express();
const PORT = 8080;

const productsRouter = require('./routes/products.js');
const cartsRouter = require('./routes/carts.js');

app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
