

// Take a number and set user place in line


var takeANumber = function(katzDeli,name){
  [...katzDeli, name];
  var position = katzDeli.length +1
  var message = "Welcome, Ada. You are number "+position+" in line."
  return message
}
