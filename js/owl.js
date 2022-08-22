$('.owl-trusted').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.owl-testimonial').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }

    }
})

let navbar = document.getElementById('nav-bg');
window.onscroll = function() {
    let top = window.scrollY;
    console.log(top);
    if (top >= 50) {
        navbar.classList.add('bg-light');
        navbar.classList.remove('navbar-dark');
    } else {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('bg-light');
    }
};

let tabOne = document.getElementById('tabOne');
let tabTwo = document.getElementById('tabTwo');
let tabThree = document.getElementById('tabThree');

let tabContent = document.getElementById('tabContent');

tabOne.addEventListener('click', function() {
    tabTwo.classList.remove('active');
    tabThree.classList.remove('active');
    tabOne.classList.add('active');
    tabContent.innerHTML = ` <p>Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada a, commodo vitae lectus.
    Integer volutpat sapien in arcu fringilla, ac eleifend est facilisis.
    <br><br>Phasellus finibus lacus eu scelerisque rutrum. Duis purus eros, blandit ultricies iaculis in, commodo quis lacus. Pellentesque interdum varius enim nec accumsan.</p>`;
});

tabTwo.addEventListener('click', function() {
    tabOne.classList.remove('active');
    tabThree.classList.remove('active');
    tabTwo.classList.add('active');
    tabContent.innerHTML = ` <p>Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis. Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis
    augue volutpat.
    <br><br>Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh. Aenean sodales justo vitae ex pharetra, vitae tincidunt dolor condimentum. Cras vel mattis risus.</p>`;
});

tabThree.addEventListener('click', function() {
    tabOne.classList.remove('active');
    tabTwo.classList.remove('active');
    tabThree.classList.add('active');
    tabContent.innerHTML = `  <p>Fusce in semper velit, at tempus augue. Morbi quis auctor ipsum, ut accumsan neque. Vivamus dapibus ipsum placerat ante commodo, eget suscipit tortor hendrerit. Quisque lacinia sed velit et maximus.
    <br><br>Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus. Vestibulum et lorem non erat efficitur iaculis ut nec nibh. Vestibulum mauris ipsum, tempor tincidunt
    justo sit amet, bibendum tincidunt dui.</p>`;
});