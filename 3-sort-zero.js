const array = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

function sortZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == 1 && array[j] == 0) {
        //Swap
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

sortZero(array);
console.log(array);