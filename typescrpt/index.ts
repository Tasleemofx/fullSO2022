import express from 'express';
import {parseBmiParameters, calculateBmi} from './bmiCalculator';
import { parseArguments, calculateExercises} from "./exerciseCalculator";
const app = express();

app.use(express.json());
const PORT = 3002;


app.get('/bmi',(req,res)=>{  
  const heightcm= Number(req.query.height);
  const weightkg= Number(req.query.weight);
  if( !heightcm || !weightkg){
    res.status(400);
    res.send({ error: 'missing parameter height or weight'});
  }else{
try{
  const { height, weight
  } = parseBmiParameters(heightcm, weightkg);
const bmi = calculateBmi(height, weight);
  res.send({
    weight: weight,
    height: height,
    bmi: bmi
  });

} catch(e){
  res.send( `error: ${e.message}`).status(404);
}
}
});
app.post('/',(req, res)=>{
  console.log(req.body)
  const {dailyHours, target} = req.body;

  if(!dailyHours.every(isNaN) || !isNaN(target)){
    throw new Error('Some of the parameters are not numbers')
  }else{
    try{
      parseArguments(dailyHours, target);
      calculateExercises(dailyHours, target)
    } 
    catch({err}){
      res.status(404);
      throw new Error(err.message);
    }
  }
});

app.listen(PORT, ()=>{
  console.log(`server started on port ${PORT}`);
});
