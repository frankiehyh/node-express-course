const express = require('express');
const app = express();

const mockUserData = [{name: 'Mark'}, {name: 'Jill'}];

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "got an user",
        user: req.params.id
    });
});

app.listen(8000, function(req, res) {
    console.log("Server is running");
});
