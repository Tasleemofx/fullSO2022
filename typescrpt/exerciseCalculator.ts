interface InitialValues{
    dailyHours: Array<number>;
    target: number
}

export const parseArguments = ( dailyHours: Array<number>, target: number): InitialValues=>{
    // if(dailyHours.length < 6) throw new Error('Too little parameters');
    // if(dailyHours.length > 6) throw new Error('Too many parameters')
    if((dailyHours.some(isNaN)) && (isNaN(target))){
        throw new Error('Some of the values provided are not numbers');
} else{
    return {
        dailyHours: dailyHours,
        target: target
    };
}
};

interface ExerciseAverage{
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export const calculateExercises =(dailyHours: Array<number>, target: number): ExerciseAverage=>{
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter((v)=> v > 0).length;
    const total = dailyHours.reduce((day, next)=>day + next);
    const average = Math.ceil(total / periodLength);
    const success = average > target? true: false;
    let rating;
    let ratingDescription;

    if ( average > target){
        rating = 1;
        ratingDescription = "Good job, keep it up";
    } else if( average == target){
        rating = 2;
        ratingDescription = "Not too bad but you could be better";
    } else{
        rating = 3;
        ratingDescription = "Not good enough, Do better next week";
    }
    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average,
    };
};

// const daily = (process.argv[2]).split(',');
// console.log(daily);
// const dailyHours = daily.map((init)=> Number(init));
// const target = Number(process.argv[3]);
// console.log(target);

// parseArguments(dailyHours, target)?
// console.log(calculateExercises(dailyHours, target)): 
// new Error('Not happening');


