const express = require('express');
const app = express.Router();
const category = require('../controllers/CategoryController');

app.get('/',category.getAllCategories);
app.post('/insertCategory',category.insertNewCategory);
app.get('/:categoryId/:newCategoryName',category.editCategory);
app.delete('/:categoryId',category.deleteCategory);

module.exports = app;