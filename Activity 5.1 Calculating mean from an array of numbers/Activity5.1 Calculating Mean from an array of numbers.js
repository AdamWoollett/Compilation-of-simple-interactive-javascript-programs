let samples = [4.2, 5.1, 3.8, 4.7, 5.3];
function meanCalculation(/*samples*/) {
    let sum = 0;
    for (let i=0; i < samples.length; i++){
        sum += samples[i];
    }
    let average = sum/samples.length;
    console.log("Mean: ", average);
    /*return sum/samples.length;*/
    return average;
}


let mean = meanCalculation(samples);

    let roundedAverage = Math.round(mean*100)/100;
    console.log("Rounded to 2 dp: ", roundedAverage)

    let roundedToNoDP = Math.round(mean);
    console.log("Rounded to 0 dp: ", roundedToNoDP);