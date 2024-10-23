// Add ratings for CLAY GOLF POOL FTBL
const data = [
    {
        name: "Bossdog",
        ratings: ["4", "3", "4", "3"],
    },
    {
        name: "Dick Wilde",
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

    const img = document.createElement('img');
    img.src = './static/shield.png';
    img.classList.add('shield');

    const portrait = document.createElement('img');
    portrait.src = "./static/turkey.png";
    portrait.classList.add('portrait');

    const ratingsSum = player.ratings.reduce((acc, rating) => acc + parseFloat(rating), 0);
    const ratingsMean = ratingsSum / player.ratings.length;
    const roundedMean = Math.round(ratingsMean)

    const overallDiv = document.createElement('div');
    overallDiv.classList.add('overall');
    if (roundedMean) {
        overallDiv.textContent = roundedMean;
    }
    else {
        overallDiv.textContent = "?";
    }

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = player.name;

    const statsDiv = document.createElement('div');
    statsDiv.classList.add('stats');

    const events = ["CLAY", "GOLF", "POOL", "FTBL"]
    const eventsDiv = document.createElement('div');
    eventsDiv.classList.add('events');
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.textContent = event;
        eventsDiv.appendChild(eventDiv);
    });

    const ratingsDiv = document.createElement('div');
    ratingsDiv.classList.add('ratings');
    player.ratings.forEach(rating => {
        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add('rating');
        ratingDiv.textContent = rating;
        ratingsDiv.appendChild(ratingDiv);
    });

    statsDiv.appendChild(eventsDiv);
    statsDiv.appendChild(ratingsDiv);
    card.appendChild(img);
    card.appendChild(portrait);
    card.appendChild(overallDiv);
    card.appendChild(nameDiv);
    card.appendChild(statsDiv);

    container.appendChild(card);
});