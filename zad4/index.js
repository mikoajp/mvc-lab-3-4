const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('./controllers/student');
const errorController = require('./controllers/error');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', studentController.getAddNewStudentPage);
app.post('/add-student', studentController.addStudent);
app.get('/success', studentController.getAddingNewStudentSuccessPage);
app.get('/students-list', studentController.getStudentsListPage);

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
