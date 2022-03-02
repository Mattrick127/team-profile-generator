const generateStructure = (manager, engineer, intern) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    ${generatePage(manager, engineer, intern)}
</body>
</html>
    
    `;
};

const generatePage = () => {
    return `
    <div>${manager.managerName(manager)}</div>
    `
}

module.exports = { generateStructure, generatePage };