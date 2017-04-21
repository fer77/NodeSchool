var argv = process.argv,
    total = 0;

// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console
for (var num = 2; num < argv.length; num++) {
    total += Number(argv[num]);
}

console.log(total);
