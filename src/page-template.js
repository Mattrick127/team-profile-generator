// export function to generate entire page
let managerCards = (managerArray) => {
  let manCards = ``
    for (let i = 0; i < managerArray.length; i++) {
      let manager = managerArray[i]
      newCard = `
      <h1 class="page-title text-secondary bg-dark py-2 px-3">
      Manager Info-     
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
      Engineer Info-     
      Name: ${engineer.name},  
      ID:  ${engineer.id},  
      Email: <a href="https://${engineer.email}">Email</a>  
      Github:   <a href="https://www.github.com/${engineer.github}"></h1>
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
      Intern Info-     
      Name: ${intern.name},  
      ID:  ${intern.id},  
      Email: <a href="https://${intern.email}">Email</a>  
      Office Number:   ${intern.school}</h1>
      `
      intCards += newCard;
    }
    return intCards
}

module.exports = (managerArray, engineerArray, internArray) => {
  // destructure page data by section
  // const {  ...header } = templateData;

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
      <h1>Welcome to your Team!</h1>
      <div class="container flex-row justify-space-between align-center py-3">
      ${managerCards(managerArray)}
      ${engineerCards(engineerArray)}
      ${internCards(internArray)}
      </div>
    </header>
    <main class="container my-5">

    </main>
    <footer class="container text-center py-3">
    </footer>
  </body>
  </html>
  `;
};