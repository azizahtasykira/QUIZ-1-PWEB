document.addEventListener("DOMContentLoaded", function() {
    const detailButtons = document.querySelectorAll(".btn-primary");

    detailButtons.forEach(button => {
        button.addEventListener("click", function() {
            const color = this.getAttribute("data-color");
            changeBackgroundColor(color);
        });
    });
});

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color; // Mengubah warna latar belakang body
}
