const data = [
    {
        name: "Bossdog",
        ratings: ["3", "4", "4", "3"],
    },
    {
        name: "Dick Wilde",
        ratings: ["8", "10", "9", "8"],
    },
    {
        name: "Hincey",
        ratings: ["3", "4", "4", "3"],
    },
    {
        name: "Bobo",
        ratings: ["8", "10", "9", "8"],
    },
    {
        name: "Bendell",
        ratings: ["3", "4", "4", "3"],
    },
    {
        name: "Northern",
        ratings: ["8", "10", "9", "8"],
    },
    {
        name: "Tony",
        ratings: ["3", "4", "4", "3"],
    },
    {
        name: "Heinz",
        ratings: ["8", "10", "9", "8"],
    },
    {
        name: "LTB",
        ratings: ["3", "4", "4", "3"],
    },
    {
        name: "Nicksy",
        ratings: ["8", "10", "9", "8"],
    },
];

const container = document.querySelector('.pitch');

data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = './static/card.png';
    img.classList.add('shield');

    const portrait = document.createElement('img');
    portrait.src = "./static/turkey.png";
    portrait.classList.add('portrait');

    const ratingsSum = item.ratings.reduce((acc, rating) => acc + parseFloat(rating), 0);
    const ratingsMean = ratingsSum / item.ratings.length;
    const roundedMean = Math.round(ratingsMean)

    const overallDiv = document.createElement('div');
    overallDiv.classList.add('overall');
    overallDiv.textContent = roundedMean;

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = item.name;

    const statsDiv = document.createElement('div');
    statsDiv.classList.add('stats');

    const events = ["CLAY", "GOLF", "POOL", "FTBL"]
    const eventsDiv = document.createElement('div');
    eventsDiv.classList.add('events');
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('item');
        eventDiv.textContent = event;
        eventsDiv.appendChild(eventDiv);
    });

    const ratingsDiv = document.createElement('div');
    ratingsDiv.classList.add('ratings');
    item.ratings.forEach(rating => {
        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add('item');
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