

// Take a number and set user place in line


function takeANumber (katzDeli,name){
  katzDeli.push(name);
  var position = katzDeli.length
  var message = `Welcome, ${name}. You are number ${position} in line.`
  return message
}
