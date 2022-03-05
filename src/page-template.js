// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const {  ...header } = templateData;

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
      <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3">Manager Info:     ${header['0'].name} ${header['0'].id} <a href ="https://${header['0'].email}"> ${header['0'].officeNumber}</h1>
      <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://${header['0'].email}">Email</a>
      <h1 class="page-title text-secondary bg-dark py-2 px-3">Manager Info:     ${header['1'].name} ${header['1'].id} ${header['1'].email} ${header['1'].github}</h1>
      <h1 class="page-title text-secondary bg-dark py-2 px-3">Manager Info:     ${header['2'].name} ${header['2'].id} ${header['2'].email} ${header['2'].school}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header['1'].github}">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${header['0'].name}</h3>
    </footer>
  </body>
  </html>
  `;
};
