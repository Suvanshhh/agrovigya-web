const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());

const getSchemesData = () => {
  const filePath = path.join(__dirname, 'Schemes (1).xlsx');
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  return data;
};

app.get('http://localhost:3000/governmentschemes', (req, res) => {
  const filters = req.query;
  let data = getSchemesData();

  // Apply filters from query params
  for (let key in filters) {
    if (filters[key]) {
      data = data.filter(row =>
        row[key] && row[key].toString().toLowerCase().includes(filters[key].toLowerCase())
      );
    }
  }

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
