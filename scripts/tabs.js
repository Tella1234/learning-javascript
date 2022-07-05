const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    btns.forEach(function(btn) {
        btn.classList.remove("active")
    })
    e.target.classList.add("active")

    contents.forEach(function(content) {
        content.classList.remove("content-active")
    })
    const article = document.getElementById(id)
    article.classList.add("content-active")

})
