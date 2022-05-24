
const calculateBmi =(weight: number, height: number): string=>{
    let bmi = weight/Math.pow((height/100),2)
    if(bmi < 18.5){
        return `Your BMI is ${bmi} and you are Underweight`
    }else if (bmi < 25){
        return `Your BMI is ${bmi} and you are Healthy`
    }else if (bmi < 30){
        return `Your BMI is ${bmi} and you are Overweight`
    }else {
        return `Your BMI is ${bmi} and you are Obese`
    }
}

const weight = Number(process.argv[2]);
const height = Number(process.argv[3])
console.log(calculateBmi(weight, height))
