const slide = document.getElementById("slide");

window.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    slide.style.left = `${x}px`
})