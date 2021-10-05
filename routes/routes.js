const express = require('express');
const router = express.Router();
const todoSchema = require('../models/todoModels');
var getPassCat = todoSchema.find({}, {});

router.get('/get', (req, res, next) => {
    getPassCat.exec((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

router.post('/todo', (request, response) => {
    const addtodo = new todoSchema({
        todo: request.body.todo,
        desc: request.body.desc
    })
    addtodo.save()
        .then(data => {
            response.json(data)
        }).catch(error => {
            response.json(error)
        })
})

router.put('/update/:id', (request, response) => {
    var id = request.params.id;
    console.log(id);
    var passCategory0 = request.body.to_do;
    var passCategory1 = request.body.Desc;
    console.log(passCategory0, request.body.to_do);
    todoSchema.findById(id, (err, data) => {
        data.todo = passCategory0 ? passCategory0 : data.todo;
        data.desc = passCategory1 ? passCategory1 : data.desc;
        console.log(data.todo);
        data.save((err) => {
            if (err) throw err;
            else
                response.send("data updated");
        });
    });
});

router.delete('/delete/:id', (request, response, next) => {
    var id = request.params.id;
    console.log(id);
    todoSchema.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        response.send("data deleted");
    })

});

module.exports = router;