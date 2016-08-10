function addPromise(a, b) {
  return new Promise( function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject ('One or both of these arguments is not a number');
    }
  });
}

addPromise(4, 5).then(function (sum) {
  console.log('The sum of 4 and 5 is', sum);
}, function (err) {
  console.log(err);
});

addPromise(4, 'five').then(function (sum) {
  console.log('The sum of 4 and 5 is', sum);
}, function (err) {
  console.log(err);
});
