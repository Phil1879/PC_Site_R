window.onscroll = function() { stickyFunction() };

var stickyElement = document.querySelector("#contacts");
var stickyPosition = stickyElement.offsetTop;
var stickyLeft = stickyElement.offsetLeft;

function stickyFunction() {
    if (window.pageYOffset > stickyPosition) {
        stickyElement.classList.add("sticky");
        // Сохраняем позицию слева, чтобы он не сдвигался
        stickyElement.style.left = stickyLeft + "px";
    } else {
        stickyElement.classList.remove("sticky");
        // Убираем изменение left
        stickyElement.style.left = "auto";
    }
}
