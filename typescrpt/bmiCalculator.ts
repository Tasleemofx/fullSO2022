interface BmiParams{
    height: number,
    weight: number
}

export const parseBmiParameters=( 
    height: number,
    weight: number
    ): BmiParams =>{
        if( isNaN(height) || isNaN(weight)){
            throw new Error('Parameters provided were not numbers')
        }else{
            return{
                height: height,
                weight: weight
            }
        }
    }

export const calculateBmi =(height: number,weight: number): string=>{
    let bmi: number = (weight/Math.pow((height),2))*10000
    if(bmi < 18.5){
        return `Underweight`
    }else if (bmi < 25){
        return `Normal (healthy weight)`
    }else if (bmi < 30){
        return `Overweight`
    }else {
        return `Obese`
    }
}

