let students = [
    { name: "Goodness", gender: "female", track: "Web Development", favouriteFood: "Fried Rice", hobby: "listening to music", pic: "goodness" },
    { name: "Emmanuel", gender: "male", track: "Android Development", favouriteFood: "Afang and Eba", hobby: "being alive", pic: "emmanuel" },
    { name: "Grace", gender: "female", track: "Web Development", favouriteFood: "Sharwama", hobby: "being alive", pic: "grace" },
    { name: "Sarah", gender: "female", track: "Product Design", favouriteFood: "Rice", hobby: "being alive", pic: "brenda" },
    { name: "Valentine", gender: "male", track: "Embedded Systems", favouriteFood: "Pounded yam and White Soup", hobby: "being alive", pic: "lastman" },
    { name: "Tilda", gender: "female", track: "Web Development", favouriteFood: "Pizza", hobby: "being alive", pic: "tilda" },
]

let cardsContainer = document.querySelector('.web-box');

let cardSplit = "";

students.forEach((student) => {
    cardSplit += `
        <div class="person-card">
            <div class="flex justify-between">
                <div class="main-info">
                    <h4>${student.name}</h4>
                    <p>${student.track}</p>
                    <p>${student.gender}</p>
                </div>
                <div class="person-image">
                    <img src="img/${student.pic}.jpg" alt="">
                </div>
            </div>
            <div class="other-info">
                <p>My favorite food is ${student.favouriteFood}</p>
                <p>I love ${student.hobby}</p>
            </div>
        </div>
    `
})

cardsContainer.innerHTML = cardSplit