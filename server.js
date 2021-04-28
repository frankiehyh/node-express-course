const express = require('express');
const app = express();

const mockUserData = [{name: 'Jack'}, {name: 'Jill'}];

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/test', function(req, res) {
    console.log("This is merely a test");
});

app.listen(8000, function() {
    console.log("Server is running");
});