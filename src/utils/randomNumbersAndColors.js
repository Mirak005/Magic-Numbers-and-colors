/*
Logic to solve the problem : 

Red hex : #ff0000  => rgb(100% , 0 , 0 ) => rgb(255 , 0 , 0)
Green hex : #00ff00 => rgb(0 , 100% , 0 ) => rgb(0 , 255 , 0)
if red is 100 and green is -100 the colors between the red 
and the green are all colors with the follwing rgb : 
100  ==> rgb(100% , 0 , 0 ) red  =>  rgb(255 , 0 , 0)
50 ==> rgb(50% , 0 , 0 )  a darker red =>  rgb(127.5 , 0 , 0)
-20 ==> rgb(0 , 20% , 0 ) a darker green => rgb(0 ,51 , 0  )
-100 ==> rgb(0 , 100% , 0 ) a green =>   rgb(0 , 255 , 0 )
conclusion : 
All positive values refer the the pourcentage of the red 
all negative values refers to the pourcentage of the green 

1- create an array of random numbers between -100 and 100
2-create an array of colors 
3-create an array of objects , it represents each box (color , number)

*/

export default function randomNumbersAndColors(x, min, max) {
  let result = [];
  //potential infinite loop !!!
  // while (result.length < x) {
  //   let random = randomNumberBetween(min, max);
  //   if (result.indexOf(random) < 0) {
  //     result.push(random);
  //   }
  // }

  for (let i = 0; i < x; i++) {
      result.push(randomNumberBetween(min, max)); 
  }

  return converToArrayOfBoxes(pourcentageToRgb(result), result);
}

/**
 Generate a random number between min and max 
 */

function randomNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/*
converts an array of Numbers to an array of colors 
the css proprety color  dont accept the pourcentage value
so we must convert the pourcentage to a color level with max value 255 and must be positive
*/

function pourcentageToRgb(arrayOfRandomNumbers) {
  const maxColorLevel = 255;
  const maxPourcentage = 100;
  return arrayOfRandomNumbers
    .map((number) => Math.round((number * maxColorLevel) / maxPourcentage))
    .map((number) =>
      number > 0 ? `rgb(${number} , 0 , 0)` : `rgb(0 , ${Math.abs(number)} , 0)`
    );
}

/**
 convert the arrayOfPourcenrages and the arrayOfColors to 
 an array of objects [ { color , number} , ..... ]
 each object represents a box whith a color and a number
 */

function converToArrayOfBoxes(arrayOfColors, arrayOfPourcentages) {
  let result = [];

  for (let i = 0; i < arrayOfColors.length; i++) {
    result.push({
      color: arrayOfColors[i],
      number: arrayOfPourcentages[i],
    });
  }
  return result;
}
