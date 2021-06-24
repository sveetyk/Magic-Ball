var userName;

if (userName === null) {
  console.log('Hello,' + ' Jane!');
}
else{
  console.log('Hello');
}

var userQuestion = "What is the temperature outside?";

console.log(userQuestion + "asked Mike");

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = ['It is certain',
'It is decidedly so',
'Reply hazy try again',
'Cannot predict now',
'Do not count on it',
'My sources say no',
'Outlook not so good',
'Signs point to yes'];


if (randomNumber === 1) {
  console.log('It is certain');
}
else if(randomNumber === 2){
  console.log('It is decidedly so');
}
