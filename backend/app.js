var express = require('express');
var cors = require('cors');
var mysql = require('mysql2');
const helmet = require("helmet");
require('dotenv').config();
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json({ limit: '100mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

app.use(cors());
app.use(helmet({
    frameguard: false
}));

var connection = mysql.createConnection({
    host     : process.env.MYSQL_DB_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/tests', function (req, res) {
    const limit = parseInt(req.query.limit ? req.query.limit : 10);
    const offset = parseInt(req.query.offset ? req.query.offset : 0);
    let selectList = 'test.id, test.question, test.image_path, test.sound_path, answer.answers_json, answer.is_multiple, answer.test_id';
    const query = "select " + selectList + "  from test left join answer on test.id = answer.test_id LIMIT ? offset ?";
    connection.query(query, [limit, offset], (error, result) => {
        if (error) {
            res.status(422);
            res.send("Error occured");
        }
        else {
            res.json(result);
        }
    })
});

app.post('/check-answer/:id', function (req, res) {
    if (!req.params.id) {
        res.status(405);
        res.send('Provide test id to get answer!');
    }
    const testId = parseInt(req.params.id);
    const query = "select right_answer_keys from answer where test_id = ?";
    connection.query(query, [testId], (error, result) => {
        if (error) {
            res.status(422);
            res.send("Error occured");
        }
        else {
            let userCorrectAnswerSum = 0;
            const userAnswers = req.body.data.answer_keys;
            const correctAnswersList = result[0].right_answer_keys;
            const correctAnswersLength = correctAnswersList.length;
            for (let i = 0; i < userAnswers.length; i++) {
                if (correctAnswersList.includes(userAnswers[i].toString())) userCorrectAnswerSum++;
            }
            res.status(200);
            res.json({
                'success': userCorrectAnswerSum === result.length,
                'percentage': correctAnswersLength > 0 ? ((userCorrectAnswerSum / correctAnswersLength) * 100) : 0
            });
        }
    })
})

app.post('/get-answers-by-q-ids', function (req, res) {
    if (!req.body.data.question_ids) {
        res.status(405);
        res.send('Provide question ids to get answers!');
    }

    const questionIds = req.body.data.question_ids;

    let selectList = 'test.id, answer.right_answer_keys';
    const query = "select " + selectList + "  from test left join answer on test.id = answer.test_id where test.id in (?)";
    connection.query(query, [questionIds], (error, result) => {
        if (error) {
            console.log(error);
            res.status(422);
            res.send("Error occured");
        }
        else {
            res.status(200);
            res.json({
                result
            });
        }
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});