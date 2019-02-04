

// Take a number and set user place in line


function takeANumber (katzDeli,name){
  [...katzDeli, name];
  var position = katzDeli.length
  var message = "Welcome, Ada. You are number "+ (position+1) +" in line."
  return message
}
