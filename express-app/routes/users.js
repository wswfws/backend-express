var express = require('express');
var router = express.Router();

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toObject() {
        return {id: this.id, name: this.name};
    };
}

const users = [];
users.push(new User(1, 'John Doe'));
users.push(new User(2, 'Jane Smith'));
users.push(new User(3, 'Alice Johnson'));

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send({items: users.map(t => t.toObject())});
});

router.post('/', function (req, res, next) {
    const {name} = req.body;
    console.log(req.body);
    users.push(new User(users.length + 1, name));
    res.send("ok");
});

module.exports = router;
