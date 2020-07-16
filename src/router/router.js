// koa-router
const Router = require('koa-router');
// Our Controllers
const DepartmentController = require('../controllers/DepartmentController');

// const { a, b, c } = require() => a b c
// const f = require() => f.a f.b f.c

// http header contains '/api'
const router = new Router({
    prefix: '/api'
});

// DepartmentInfo
router
    .get('/department/all', DepartmentController.readAllDepartment)
    .put('/department', DepartmentController.createDepartment)

// CourseInfo
router
    .get('/course/all')
    .put('/course')

// UserInfo
router
    .get('/user/all')
    .put('/user')

module.exports = router;