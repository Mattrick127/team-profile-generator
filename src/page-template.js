// export function to generate entire page
let managerCards = (managerArray) => {
  let manCards = ``
    for (let i = 0; i < managerArray.length; i++) {
      let manager = managerArray[i]
      newCard = `
      <h1 class="page-title text-secondary bg-dark py-2 px-3">
      Name: ${manager.name},  
      ID:  ${manager.id},  
      Email: <a href="https://${manager.email}">Email</a>  
      Office Number:   ${manager.officeNumber}</h1>
      `
      manCards += newCard;
    }
    return manCards
}

let engineerCards = (engineerArray) => {
  let engCards = ``
    for (let i = 0; i < engineerArray.length; i++) {
      let engineer = engineerArray[i]
      newCard = `
      <h1 class="page-title text-secondary bg-dark py-2 px-3">
      Name: ${engineer.name},  
      ID:  ${engineer.id},  
      Email: <a href="https://${engineer.email}">Email</a>  
      Github:   <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></h1>
      `
      engCards += newCard;
    }
    return engCards
}

let internCards = (internArray) => {
  let intCards = ``
    for (let i = 0; i < internArray.length; i++) {
      let intern = internArray[i]
      newCard = `
      <h1 class="page-title text-secondary bg-dark py-2 px-3">
      Name: ${intern.name},  
      ID:  ${intern.id},  
      Email: <a href="https://${intern.email}">Email</a>  
      School:   ${intern.school}</h1>
      `
      intCards += newCard;
    }
    return intCards
}

module.exports = (managerArray, engineerArray, internArray) => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator!!!</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <h1 class="welcome">Welcome to your Team!</h1>
    </header>
    <br>
    <main class="container my-5">
      <div class="container flex-row justify-space-between align-center py-3">
      <br>
      <h1 class="manager">This is your manager!:</h1>
      ${managerCards(managerArray)}
      <br>
      <h1 class="engineer">Your engineer(s)!:</h1>
      ${engineerCards(engineerArray)}
      <br>
      <h1 class="intern">Meet your intern(s)!:</h1>
      ${internCards(internArray)}
      </div>
    </main>
    <footer class="container text-center py-3">
    </footer>
  </body>
  </html>
  `;
};