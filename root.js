const express=require('express');
const app=express();
const routes=require('./routes/bmiRoutes');
const port=3000;


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/',routes);

app.listen(port, () => {
    console.log(`BMI Calculator app listening at http://localhost:${port}`);
});