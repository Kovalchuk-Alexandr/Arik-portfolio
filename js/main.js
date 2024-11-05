// Вывод карточек в цикле из каталога
const testimonialCol1 = document.querySelector(".col1");
const testimonialCol2 = document.querySelector(".col2");

function showItems() {
    cards.forEach((card, index) => {
        // console.log(card.name);
        // console.log("index: " + index);
        
        let text = `
                     <article class="card">
                            <div class="card__logo">
                                <img src="./img/logo-small/${card.logo}" alt="logo ${card.id}">
                            </div>

                            <div class="card__header">
                                <h3 class="card__title">${card.title}</h3>
                                <p class="card__desc">
                                    ${card.desc}
                                </p>
                            </div>

                            <div class="card__avatar">
                                <div class="avatar__img">
                                    <img src="./img/cards/${card.img}" alt="avatar img" width="60" height="60">
                                </div>
                                <div class="avatar__desc">
                                    <div class="avatar__name">${card.name}</div>
                                    <div class="avatar__company">${card.company}</div>
                                </div>
                            </div>
                        </article>`;
        
        let testimonial = index < 3 ? testimonialCol1 : testimonialCol2;

        // console.log(testimonial.getAttribute("class"));
        
        testimonial.innerHTML += text;
    })
}

showItems();


// --------- Mobile nav ---------------------
document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.querySelector(".mobile-nav-btn");
    const closeBtn = document.querySelector(".mobile-close-btn");
    const nav = document.querySelector(".nav");
    // const menuIcon = document.querySelector(".nav-icon");
    // const fade = document.querySelector(".mobile-nav-fade");

    navBtn.onclick = toggleMobile;
    closeBtn.onclick = toggleMobile;
    // fade.onclick = toggleMobile;

    function toggleMobile() {
        nav.classList.toggle("active");
        navBtn.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
        // fade.classList.toggle("mobile-nav-fade--open");
    }
});