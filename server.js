const express = require('express');
const app = express();

const mockUserData = [{name: 'Mark'}, {name: 'Jill'}];

app.get('/Users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        user: mockUserData
    });
});

app.listen(8000, function(req, res) {
    console.log("Server is running");
});
