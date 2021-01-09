/*
* This program uses recursion to find all the magic squares of 15 in java.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2021-01-08
*/


/**
 * Recursive function runs through all possible random numbers with 9 digits
 * and picks out all the numbers with more than 1 instance
 * of the same number.
 */
function magicTest(magicBox, locationVal) {

  /* nested for loops to run through every number. I would have used nested
   * recursive statements instead but I ended up getting stack overflows
   * having to do with the fact that there are 300,000,000 possible numbers
   * which took up way to much storage and crashed my ide.
   */
  for (let counter1 = 1; counter1 <= 9; counter1++) {
    for (let counter2 = 1; counter2 <= 9; counter2++) {
      for (let counter3 = 1; counter3 <= 9; counter3++) {
        for (let counter4 = 1; counter4 <= 9; counter4++) {
          for (let counter5 = 1; counter5 <= 9; counter5++) {
            for (let counter6 = 1; counter6 <= 9; counter6++) {
              for (let counter7 = 1; counter7 <= 9; counter7++) {
                for (let counter8 = 1; counter8 <= 9; counter8++) {
                  
                  // sets counters to array values
                  magicBox[0] = locationVal;
                  magicBox[1] = counter1;
                  magicBox[2] = counter2;
                  magicBox[3] = counter3;
                  magicBox[4] = counter4;
                  magicBox[5] = counter5;
                  magicBox[6] = counter6;
                  magicBox[7] = counter7;
                  magicBox[8] = counter8;
                  
                  /* 
                  * eliminates all numbers with more than one instance of the 
                  * same number.
                  */
                  if (locationVal != counter1 && locationVal != counter2
                      && locationVal != counter3 && locationVal != counter4 
                      && locationVal != counter5 && locationVal != counter6 
                      && locationVal != counter7 && locationVal != counter8
                      && counter1 != counter2 && counter1 != counter3
                      && counter1 != counter4 && counter1 != counter5
                      && counter1 != counter6 && counter1 != counter7
                      && counter1 != counter8 && counter2 != counter3 
                      && counter2 != counter4 && counter2 != counter5 
                      && counter2 != counter6 && counter2 != counter7 
                      && counter2 != counter8 && counter3 != counter4
                      && counter3 != counter5 && counter3 != counter6
                      && counter3 != counter7 && counter3 != counter8
                      && counter4 != counter5 && counter4 != counter6 
                      && counter4 != counter7 && counter4 != counter8
                      && counter5 != counter6 && counter5 != counter7
                      && counter5 != counter8 && counter6 != counter7
                      && counter6 != counter8 && counter7 != counter8) {
          
                    // checks is magic box to determine if its a magic box
                    if (isMagic(magicBox) == true) {
                      // Printing out the square that was found
                      printMagicSquare(magicBox);
                    }

                    // debugging tool to print all numbers
                    /*
                     *console.log(magicBox[0] + ", " + magicBox[1] 
                     *                  + ", " + magicBox[2] + ", " 
                     *                  + magicBox[3] + ", " + magicBox[4] 
                     *                  + ", " + magicBox[5] + ", " 
                     *                  + magicBox[6] + ", " + magicBox[7] 
                     *                  + ", " + magicBox[8]);
                     */
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (locationVal == 9) {
    return ("complete");
  }
  return (magicTest(magicBox, (locationVal + 1)));
}

/**
 * function to check if square is magic.
 */
function isMagic(possibleSquare) {
  // returns true or false for whether or not inputted array is a magic square
  let magicnum = 15;
  let row1 = possibleSquare[0] + possibleSquare[1] + possibleSquare[2];
  let row2 = possibleSquare[3] + possibleSquare[4] + possibleSquare[5];
  let row3 = possibleSquare[6] + possibleSquare[7] + possibleSquare[8];
  let col1 = possibleSquare[0] + possibleSquare[3] + possibleSquare[6];
  let col2 = possibleSquare[1] + possibleSquare[4] + possibleSquare[7];
  let col3 = possibleSquare[2] + possibleSquare[5] + possibleSquare[8];
  let diag1 = possibleSquare[0] + possibleSquare[4] + possibleSquare[8];
  let diag2 = possibleSquare[2] + possibleSquare[4] + possibleSquare[6];

  if (row1 == magicnum && row2 == magicnum && row3 == magicnum
      && col1 == magicnum && col2 == magicnum && col3 == magicnum
      && diag1 == magicnum && diag2 == magicnum) {
    return true;
  } else {
    return false;
  }
}

/**
 * function used to print out the found magic square.
 */
// This function prints a magic square should one be found
function printMagicSquare(outputSquare) {
  // Printing a magic square
  console.log("*****");
  console.log(outputSquare[0] + " " + outputSquare[1] + " " + outputSquare[2]);
  console.log(outputSquare[3] + " " + outputSquare[4] + " " + outputSquare[5]);
  console.log(outputSquare[6] + " " + outputSquare[7] + " " + outputSquare[8]);
  console.log("*****");
  console.log();
}


// sets initial values of all 9 segments
let magicBox = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// sets value of recursive 
let locationVal = 1;
// calls magictest function
magicTest(magicBox, locationVal);


