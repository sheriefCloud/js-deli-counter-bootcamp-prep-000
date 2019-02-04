

// Take a number and set user place in line


function takeANumber (katzDeli,name){
  katzDeli.push(name);
  var position = katzDeli.length
  var message = `Welcome, ${name}. You are number ${position} in line.`
  return message
}


function nowServing (deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var toBeServed = deliLine[1]
    deliLine.shift()
    return `Currently service ${toBeServed}.`
  }
}
