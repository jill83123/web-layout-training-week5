import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//nav
document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
        return false;
    }
    console.log(window.location.href);
});

//ck-editor
ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });