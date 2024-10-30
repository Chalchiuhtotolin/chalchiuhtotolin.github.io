// Add ratings for CLAY GOLF POOL FTBL
const data = [
    {
        name: "Bossdog",
        stats: ['16st', '5,11'],
        ratings: ["4", "3", "4", "3"],
    },
    {
        name: "Dick Wilde",
        stats: ['12st', '5,0'],
        ratings: ["?", "?", "?", "?"],
    },
    {
        name: "Hincey",
        ratings: ["?", "?", "?", "?"],
    },
    {
        name: "Bobo",
        ratings: ["?", "?", "?", "?"],
    },
    {
        name: "Bendell",
        ratings: ["?", "?", "?", "?"],
    },
    {
        name: "Northern",
        ratings: ["?", "?", "?", "?"],
    },
    {
        name: "Tony",
        ratings: ["?", "?", "?", "?"],
    },
    {
        name: "Heinz",
        ratings: ["8", "10", "8", "9"],
    },
    {
        name: "LookeTB",
        ratings: ["?", "?", "?", "?"],
    },
    {
        name: "Nicksy",
        ratings: ["?", "?", "?", "?"],
    },
];

const container = document.querySelector('.pitch');

data.forEach(player => {

    const card = document.createElement('div');
    card.classList.add('card');

    const shield = document.createElement('img');
    shield.src = './static/shield.png';
    shield.classList.add('shield');

    const portrait = document.createElement('img');
    portrait.src = "./static/turkey.png";
    portrait.classList.add('portrait');

    const ratingsSum = player.ratings.reduce((acc, rating) => acc + parseFloat(rating), 0);
    const ratingsMean = ratingsSum / player.ratings.length;
    const roundedMean = (ratingsMean) ? Math.round(ratingsMean) : "?";

    const overallDiv = document.createElement('div');
    overallDiv.classList.add('overall');
    overallDiv.textContent = "?";

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = player.name;

    card.appendChild(shield);
    card.appendChild(portrait);
    card.appendChild(overallDiv);
    card.appendChild(nameDiv);


    function generate(titles, values, cls) {

        const statsDiv = document.createElement('div');
        statsDiv.classList.add('stats');
        statsDiv.classList.add(cls);

        const titlesDiv = document.createElement('div');
        titlesDiv.classList.add('titles');
        titles.forEach(title => {
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title');
            titleDiv.textContent = title;
            titlesDiv.appendChild(titleDiv);
        });

        const valuesDiv = document.createElement('div');
        valuesDiv.classList.add('values');
        values.forEach((value) => {
            const valueDiv = document.createElement('div');
            valueDiv.classList.add('value');
            valueDiv.textContent = value;
            valuesDiv.appendChild(valueDiv);
        });

        statsDiv.appendChild(titlesDiv);
        statsDiv.appendChild(valuesDiv);
        return statsDiv
    }

    const eventsDiv = generate(["CLAY", "GOLF", "POOL", "FTBL"], player.ratings, 'std')
    eventsDiv.style.display = 'none';
    card.appendChild(eventsDiv);

    if (player.stats) {
        const attributeDiv = generate(["WEIGHT", "HEIGHT"], player.stats, 'atr')
        card.appendChild(attributeDiv);
    }

    const box = document.createElement('div');
    box.classList.add('box');

    box.onmouseenter = function () {
        this.classList.add('flipped');
        setTimeout(() => {
            portrait.src = "./static/star.png" //"./static/" + player.name + ".png"
            overallDiv.textContent = roundedMean;
            card.querySelector('.std').style.display = 'block';
            card.querySelector('.atr').style.display = 'none';
        }, 400);
    };

    box.onmouseleave = function () {
        this.classList.add('flipped');

        setTimeout(() => {
            portrait.src = "./static/turkey.png";
            overallDiv.textContent = '?';
            card.querySelector('.std').style.display = 'none';
            card.querySelector('.atr').style.display = 'block';
        }, 400);
    };

    card.onanimationend = function () {
        box.classList.remove('flipped');
    };

    box.appendChild(card);
    container.appendChild(box);
});