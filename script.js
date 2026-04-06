const roles = ["Java Developer", "Python Developer", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    let el = document.querySelector(".typing");

    if (i < roles.length) {
        if (!isDeleting && j <= roles[i].length) {
            current = roles[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = roles[i].substring(0, j--);
        }

        el.textContent = current;

        if (j === roles[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
        }
    } else i = 0;

    setTimeout(type, isDeleting ? 50 : 100);
}
type();