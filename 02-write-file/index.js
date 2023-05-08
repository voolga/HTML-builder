const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const writeStream = fs.createWriteStream('02-write-file/text.txt', { flags: 'a' });

console.log('Введите текст. Для выхода введите "exit" или нажмите Ctrl + C');

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('До свидания!');
    process.exit(0);
  } else {
    writeStream.write(`${input}\n`);
  }
});

process.on('SIGINT', () => {
    console.log('Завершение программы');
    fileStream.end();
    process.exit(0);
  });

