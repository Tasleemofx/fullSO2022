interface InitialValues{
    dailyHours: Array<number>;
    target: number
}

const parseArguments = ( dailyHours: Array<number>, target: number): InitialValues=>{
    if((dailyHours.some(isNaN)) && (isNaN(target))){
        throw new Error('Some of the values provided are not numbers')
} else{
    return {
        dailyHours: dailyHours,
        target: target
    }
}
}

interface ExerciseAverage{
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises =(dailyHours: Array<number>, target: number): ExerciseAverage=>{
    let periodLength = dailyHours.length;
    let trainingDays = dailyHours.filter((v)=> v > 0).length;
    let total = dailyHours.reduce((day, next)=>day + next)
    let average = Math.ceil(total / periodLength);
    let success = average > target? true: false;
    let rating;
    let ratingDescription;

    if ( average > target){
        rating = 1;
        ratingDescription = "Good job, keep it up"
    } else if( average == target){
        rating = 2;
        ratingDescription = "Not too bad but you could be better"
    } else{
        rating = 3;
        ratingDescription = "Not good enough, Do better next week"
    }
    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average,
    }
}

console.log(calculateExercises([2,5,4,6,1,2,4], 3))


