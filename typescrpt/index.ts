import express from 'express';
import {parseBmiParameters, calculateBmi} from './bmiCalculator';

const app = express();

app.use(express.json())
const PORT = 3002;


app.get('/bmi',(req,res)=>{  
  const heightcm= Number(req.query.height);
  const weightkg= Number(req.query.weight);
  // if( !heightcm || !weightkg){
  //   res.status(400);
  //   res.send({ error: 'missing parameter height or weight'})
  // }else{
try{
  const { height, weight
  } = parseBmiParameters(heightcm, weightkg)
const bmi = calculateBmi(height, weight)
  res.send({
    weight: weight,
    height: height,
    bmi: bmi
  })

} catch(e){
  res.status(400);
  res.send({
    error: e.message
  })
}
// }
})

app.listen(PORT, ()=>{
  console.log(`server started on port ${PORT}`)
})
