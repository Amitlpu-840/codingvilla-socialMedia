import express from 'express'
import bodyParser from 'body-Parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Amit_Giri:j0SVcxpJZh0oSetR@cluster0.jqexwyl.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log(`server is running on port number ${PORT}`))).catch((error) => console.log(error.message));

// mongoose.set('useFindAnyModify', false);