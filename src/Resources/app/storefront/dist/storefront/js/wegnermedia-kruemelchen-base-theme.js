element = document.getElementsByClassName('k-parallax')[0];

const getPositionY = (el) => {

    // ok, lets move it
    var speed = 1;
    var imgY = el.parentElement.scrollTop;
    var winY = el.parentElement.getBoundingClientRect().top;
    var winH = el.offsetHeight;
    var parentH =  el.naturalHeight;

    var winBottom = winY + winH;

    var imgBottom = ((winBottom - imgY) * speed);

    var imgTop = winH + parentH;

    return ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
};

const handleScrollAnimation = () => {
    var newPosition = getPositionY(element);

    element.style.top =  newPosition + '%';
    element.style.transform = 'translate(-50%, -' + newPosition + '%)';
}

const applyBackgroundColor = (el) => {
    const containers = document.querySelectorAll(".container-main");
    const bgColor = document.querySelector('.k-background-wrapper').style.backgroundColor.replace(')', ',.2)');

    containers.forEach((container) => {
        container.style.backgroundColor = bgColor;
    });
}

// Action time

if ( element ) {
    window.addEventListener('DOMContentLoaded', () => {
        handleScrollAnimation();
        applyBackgroundColor();
    });
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    window.addEventListener('resize', () => {
        handleScrollAnimation();
    });
}




