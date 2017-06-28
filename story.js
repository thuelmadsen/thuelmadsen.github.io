var favoriteAnimal1 = prompt('Please enter your favorite animal');
var firstName1 = prompt('Please enter a first name');
var adjective1 = prompt('Now enter an adjective');
var favoriteDish = prompt("What's your favorite dish?");
var worstPain = prompt("What's the worst pain you know?");
alert('All done. Ready for the your story?');
var story = '<p>There once was a ' + adjective1 + ' ' + favoriteAnimal1 + ', named ' + firstName1 + '. ' + firstName1 + ' loved ' + favoriteDish;
story += ', but one day ' + firstName1 + ' ate way too much ' + favoriteDish + ' and got a ' + adjective1 + ' ' + worstPain + '. The End!';
document.write(story);
