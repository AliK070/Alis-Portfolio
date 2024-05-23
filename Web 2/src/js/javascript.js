//Quotes from: https://gist.github.com/robatron/a66acc0eed3835119817

var quotes = [
  "If you are not willing to risk the usual you will have to settle for the ordinary. ~ Jim Rohn",
  "Trust because you are willing to accept the risk, not because it's safe or certain. ~Anonymous",
  "All our dreams can come true if we have the courage to pursue them. ~Walt Disney",
  "If you do what you always did, you will get what you always got. ~Anonymous",
  "Success is walking from failure to failure with no loss of enthusiasm. ~Winston Churchill",
  "Opportunities don't happen, you create them. ~Chris Grosser",
  "Try not to become a person of success, but rather try to become a person of value. ~Albert Einstein",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people. ~Eleanor Roosevelt",
  "I have not failed. I've just found 10,000 ways that won't work. ~Thomas A. Edison",
  "If you don't value your time, neither will others. Stop giving away your time and talents- start charging for it. ~Kim Garst",
  "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. ~David Brinkley",
  "No one can make you feel inferior without your consent. ~Eleanor Roosevelt",
  "The whole secret of a successful life is to find out what is one's destiny to do, and then do it. ~Henry Ford",
  "If you're going through hell keep going. ~Winston Churchill",
  "What seems to us as bitter trials are often blessings in disguise.~ Oscar Wilde",

  "To be successful you must accept all challenges that come your way. You can't just accept the ones you like. ~Mike Gafka",
  "Success is...knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others. ~ John C. Maxwell",
  "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice. ~Wayne Dyer",
  "To accomplish great things, we must not only act, but also dream, not only plan, but also believe.~ Anatole France",
  "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no help at all. ~Dale Carnegie",
  "You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals. ~Booker T. Washington",
  "Real difficulties can be overcome; it is only the imaginary ones that are unconquerable. ~Theodore N. Vail",
  "It is better to fail in originality than to succeed in imitation. ~Herman Melville",
];

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", (event) => {
  var quoteDisplay = document.getElementById("quote-display");
  quoteDisplay.textContent = getRandomQuote();
});
