// app.js
import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import indexRouter from './routes/index.js'
import composeRouter from './routes/compose.js'
import PostRouter from './routes/post.js'

const app = express();

// Connect to MongoDB
//clg mail mongoatlas compass
// to run npm run devStart
//server conn, mongodb conn
mongoose.connect("mongodb+srv://BlogUser:BlogUserPassword@atlascluster.ifoy5sh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set("view engine", "ejs"); 

// Routes
app.use('/', indexRouter);
app.use('/compose', composeRouter);
app.use('/post', PostRouter);

// Server config
app.listen(3000, () => {
    console.log("Server Connected");
});
