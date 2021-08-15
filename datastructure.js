function distinct(arr1, arr2) {
  const z = [...arr1, ...arr2];
  z.sort();

  let sum = 0;
  for (let i = 0; i < z.length; i++) {
    if (z[i] != z[i + 1]) {
      sum += z[i];
    } else {
      i++;
    }
  }

  return sum;
}

function distinct1(arr1, arr2) {
  const z = [...arr1, ...arr2];

  let unique = {};

  for (let i = 0; i < z.length; i++) {
    if (unique[z[i]] === undefined) {
      unique[z[i]] = true;
    } else {
      unique[z[i]] = false;
    }
  }

  let sum = 0;
  for (let key in unique) {
    if (unique[key]) {
      sum += +key;
    }
  }

  return sum;
}

function distinct2(arr1, arr2) {
  var difference1 = arr1.filter((x) => arr2.indexOf(x) === -1);
  var difference2 = arr2.filter((x) => arr1.indexOf(x) === -1);
  const z = [...difference1, ...difference2];

  let sum = 0;
  for (let item of z) {
    sum += item;
  }

  return sum;
}
