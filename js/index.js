let hamburgerMenu = document.querySelector('.hamburger')
let header = document.querySelector('.header')
let close = document.querySelector('.close');

hamburgerMenu.addEventListener('click', () => {
    header.classList.add('show')
    console.log(header)
})

close.addEventListener('click', () => {
    header.classList.remove('show')
})

fetch('../faq.json')
.then(response => response.json())
.then((data) => {
    let output = ``
    data.forEach((post) => {
        output += `
            <div class="faq-card">
                <h3 class="faq-card-title">${post.name}</h3>
                <p class="faq-card-text">${post.answer}</p>
            </div>
        `
    });
    document.querySelector('.faq-card-wrapper').innerHTML = output

})
