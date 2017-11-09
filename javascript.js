var quotes = [
"Life is what happens to you while you're busy making other plans.",
"You're only as strong as the drinks you mix, the tables you dance on, and the friends you party with.",
"It's not the number of breaths we take, but the number of moments that take our breath away.",
"You have to look through the rain to see the rainbow.",
"Sing like no one is listening. Love like you've never been hurt. Dance like nobody is watching.",
"Shoot for the moon. Even if you miss, you'll land among the stars.",
"You have to kiss a lot of frogs before you find your prince.",
"You'll find love when you stop looking.",
"When you become the image of your own imagination, it's the most powerful thing you'll ever do!",
"If You Can't Love Yourself How In The Hell Are You Gonna Love Somebody Else?",
"We are all basically the universe—pretending to be humans for a brief moment of time!",
"If they ain't paying your bills, pay them bitches no mind!",
"Get up, look sickening and make them eat it!"
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}