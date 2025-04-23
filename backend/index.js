const express = require('express');
const cors = require('cors');
const walletRoutes = require('./routes/walletRoutes.js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/wallet', walletRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
