import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://saravanan:123456>@ds117148.mlab.com:17148/socketchat",
  "bodyLimit": "100kb"
}
