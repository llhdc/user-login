const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

// Turn on default template engine
app.set('view engine', 'mustache');

// Set where we store our views
app.set('views', __dirname + '/views');

// Setup Body Parser
app.use(bodyParser.urlencoded({extended: false}));

// Setup cookie parser
app.use(cookieParser());

// Setup Express Validator
app.use(expressValidator());

// Add session handler middleware
app.use(session ({
  secret: '12344343-dfskdbfskdjflsdjfskjdbfljs11-sdljkfn',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}));

// Listen for connection to port
app.listen(3000, () => {
  console.log('Node running successfully at http://localhost:3000');
})
