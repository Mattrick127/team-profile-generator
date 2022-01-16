module.exports = templateData => {
    const { intern, engineer, ...header } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTA-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Team Profile</title>
        <link rel="stylesheet" hraf="styles.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
            </div>
        </header>
        <main class="container my-5">
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </main>
    </body>
    </html>
    `;
};