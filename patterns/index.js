// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function print1() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// *
// * *
// * * *
// * * * *
// * * * * *
function print2() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function print3() {
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    console.log();
  }
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function print4() {
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`${i}`);
    }
    console.log();
  }
}

// * * * * *
// * * * *
// * * *
// * *
// *

function print5() {
  for (let i = 0; i < 6; i++) {
    for (let j = 5; j > i; j--) {
      process.stdout.write(`* `);
    }
    console.log();
  }
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function print6() {
  for (let i = 1; i < 6; i++) {
    for (let j = 5; j >= i; j--) {
      process.stdout.write(`${6 - j} `);
    }
    console.log();
  }
}

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

function print7() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6 - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < 6 - i - 1; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

// ***********
//  *********
//   *******
//    *****
//     ***
//      *

function print8() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * 6 - (2 * i + 1); j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

function print9() {
  print7();
  print8();
}

//      *
//      **
//      ***
//      ****
//      *****
//      ******
//      *****
//      ****
//      ***
//      **
//      *

function print10() {
  for (let i = 1; i <= 2 * 6 - 1; i++) {
    let stars = i;
    if (i > 6) stars = 2 * 6 - i;
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

// 1
// 01
// 101
// 0101
// 10101
// 010101

function print11() {
  let start = 1;
  for (let i = 0; i < 6; i++) {
    if (i % 2 == 0) start = 1;
    else start = 0;
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${start}`);
      start = 1 - start;
    }
    process.stdout.write("\n");
  }
}
function main() {
  print11();
}
main();
