const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mockUserData = [{name: 'Mark'}, {name: 'Jill'}];

app.use(bodyParser.json());

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "got an user",
        user: req.params.id
    });
});

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "frankie";
    const mockPassword = "12345";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: `${username}, hello!`,
            token: 'encrypted token goes here...'
        })
    } else {
        res.json({
            success: false,
            message: 'the username or the password is wrong.'
        });
    }
    });

app.listen(8000, function(req, res) {
    console.log("Server is running");
});
