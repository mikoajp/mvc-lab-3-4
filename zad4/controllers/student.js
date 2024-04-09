const students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.addStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    students.push({ id: nextId, fullName, code, fieldOfStudies });
    nextId++;
    res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', { title: 'Success' });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', { title: 'List', students });
};

