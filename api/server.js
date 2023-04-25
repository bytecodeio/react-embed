var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();


// app.use(cors({
//         origin: "https://bytecode-minibyte.ue.r.appspot.com"
//     }
// ))
// app.options('*', cors())

app.use(cors())


// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://bytecode-minibyte.ue.r.appspot.com");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
//
//
// app.use(cors({
//     origin: "https://bytecode-minibyte.ue.r.appspot.com",
//     headers: ["Content-Type"],
//     credentials: true,
// }));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
