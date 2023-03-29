function scuberGreetingForFeet(_feet){
  // Write your code here!
  if (_feet <= 400) {
    return 'This one is on me!';
  }
  if (_feet > 2000 &&  _feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (_feet > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(_city){
  // Write your code here!
  if (_city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else if (_city !== 'NYC') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(_tip){
  // Write your code here!
  if (_tip === 'generous') {
    return 'Thank you so much.'
  } else if(_tip === 'not as generous') {
    return 'Thank you.'
  } else return 'Bye.'
}