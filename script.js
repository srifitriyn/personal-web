let blogContent = document.querySelector('.blog-content');
let readButton = document.querySelector('#read-button');

readButton.addEventListener('click', function (event) {
    event.preventDefault();
    blogContent.classList.toggle('active');
    readButton.classList.toggle('active');
    if (readButton.classList.contains('active')) {
        readButton.innerHTML = "Read Less";
    } else {
        readButton.innerHTML = "Read Article";
    }
});