

// Take a number and set user place in line


var takeANumber = function(katzDeli,name){
  katzDeli.push(name);
  var position = katzDeli.length +1
  var message = "Welcome, Ada. you are number "+position+" in line."
  return message
}
