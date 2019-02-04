

// Take a number and set user place in line


function takeANumber (katzDeli,name){
  [...katzDeli, name];
  var position = katzDeli.length+1
  var message = "Welcome, " +name+"\. You are number "+ position  +" in line."
  return message
}
