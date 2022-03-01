const generateManager = managerText => {
    if (!managerText) {
        return '';
    }

    return `
    <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${managerText}</p>
    </section>
    `;
};

module.exports = templateData => {
    const { manager, ...header } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTA-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
            </div>
        </header>
        <main class="container my-5">
            ${generateManager(manager)}
        </main>
    </body>
    </html>
    `;
};