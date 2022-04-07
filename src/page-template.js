module.exports = templateHTML => {
    const {} = templateHTML; 
    
    return `
    <!doctype html>
    <html lang="en">

    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <title>Team Builder</title>
    </head>

    <body>
        <header>
            <h1 class="m_header m_container-fluid m_center m_bg-secondary>Team Organizer</h1>
        </header>
        <!-- Employee Cards -->
        <div>
        $//{managerCard}
        $//{engineerCard}
        $//{internCard}
        </div>
    </body>
</html>
`
}
