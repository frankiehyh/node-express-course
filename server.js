const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [{name: 'Jack'}, {name: 'Jill'}];

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    const username = req.params.id;
    const mockUsername = 'frankie';
    if (username === mockUsername) {
    res.json({
        success:true,
        message:'got one user',
        user: req.params.id
    });
} else {
    res.json({
        success: false,
        message: 'you are not who we are expecting'
    });
}
});

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "frankie";
    const mockPassword = "secret!";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'user & passwords match',
            token: 'encrypted token goes here'
        })}
        else {
            res.json({
                success: false,
                message: 'user and passwords do not match'
            });
        }
});

app.listen(8000, function() {
    console.log("Server is running");
});