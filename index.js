function handleSlide(num) {
    let slide = document.getElementsByClassName("slide");
    let dot = document.getElementsByClassName("dot");

    // handle active slide
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    document.getElementById(`slide-${num}`).style.display = "block";

    // handle active dot
    for (i = 0; i < dot.length; i++) {
        dot[i].style.opacity = ".5";
    }
    document.getElementById(`dot-${num}`).style.opacity = "1";
}
