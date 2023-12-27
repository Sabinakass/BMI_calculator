const express=require('express');
const path=require('path');
const router=express.Router();
const bmiHistory = [];

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','bmiCalculator.html'));
});

router.post('/bmicalculator', (req, res) => {
    let unit = req.body.unit;
    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        return res.status(400).send('Please enter valid height and weight.');
    }

    if (unit === 'Imperial') {
        height *= 2.54; 
        weight *= 0.453592; 
    }

    const bmi = weight / ((height / 100) ** 2);
    let resultClass = '';

    if (bmi < 18.5) {
        resultClass = 'underweight';
    } else if (bmi < 25) {
        resultClass = 'normal';
    } else if (bmi < 30) {
        resultClass = 'overweight';
    } else {
        resultClass = 'obese';
    }

    let result = `
<html>
<head>
    <style>
        #bmiResult {
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
        }

        .normal { color: #28a745; }
        .underweight, .overweight, .obese { color: #dc3545; }
    </style>
</head>
<body>
    <div id='bmiResult' class='${resultClass}'>Your BMI is ${bmi.toFixed(2)}. You are ${resultClass}.</div>
</body>
</html>
`;
res.send(result);


    if (resultClass === 'underweight') {
        result += 'You are underweight.';
    } else if (resultClass === 'normal') {
        result += 'You have a normal weight.';
    } else if (resultClass === 'overweight') {
        result += 'You are overweight.';
    } else {
        result += 'You are obese.';
    }

    result += '</div>';
    bmiHistory.push({
        timestamp: new Date().toLocaleString(),
        height: height,
        weight: weight,
        bmi: bmi.toFixed(2),
        category: resultClass
    });

    res.send(result);
});


router.get('/bmihistory',(req,res)=>{
    res.json(bmiHistory);
})
 module.exports=router;