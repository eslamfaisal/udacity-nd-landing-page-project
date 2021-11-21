/**
 * define variables
 */
const sections = document.querySelectorAll('section');
const navBarList = document.querySelector('#navbar__list');

class MyApp  {

    constructor() {
        this.createNav();
    }

    /**
     * create nav list based on sections
     */
    createNav() {
        console.log("eslam faisal create nave")
        const fragment = document.createDocumentFragment();
        sections.forEach(section => {
            const listItemTag = document.createElement("li")
            const anchorTag = document.createElement("a")
            anchorTag.innerText = section.getAttribute('data-sec-name');
            anchorTag.classList.add("menu__link");
            anchorTag.addEventListener("click", () => {
                section.scrollIntoView({behavior: "smooth"});
            });
            listItemTag.appendChild(anchorTag);
            fragment.appendChild(listItemTag);

        });
        navBarList.appendChild(fragment);
    }

}

new MyApp()
