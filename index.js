

// Take a number and set user place in line


var takeANumber = function(katzDeli,name){
  katzDeli.push(name);
  var position = katzDeli.length
  var message = "Welcome, Ada. You are number "+position+" in line."
  return message
}
