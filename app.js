// app.js

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware untuk parsing body JSON dari request
app.use(express.json());

// 2. Middleware untuk Logging setiap request
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFileSync('server.log', log + '\n');
  next(); // Lanjut ke middleware atau route berikutnya
});

// Import dan gunakan router untuk buku
const bookRoutes = require('./books');
app.use('/api/books', bookRoutes);

// 3. Middleware untuk menangani 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ message: '404 Not Found' });
});

// 3. Global Error Handler (harus ditempatkan paling akhir)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error untuk debugging
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});