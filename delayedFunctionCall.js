const delayedFunction = () => {
  console.log('hello');
};

const addCounter = (callback, theCounter) => {
  if (theCounter > 4) {
    callback();
    return 0;
  }
  console.log(theCounter)
  return theCounter + 1;
};

let counter =  0;
for (let i = 0; i < 14; i += 1) {
  counter = addCounter(delayedFunction, counter)
}
