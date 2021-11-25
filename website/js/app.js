/**
 * define variables
 */
const sections = document.querySelectorAll('section');
const navBarList = document.querySelector('#navbar__list');

/**
 * end define variables
 */


/**
 * get current visible section index
 * @returns {number}
 */
function getVisibleSectionIndex() {
    let minor = window.innerHeight;
    let visibleSectionIndex = -1;

    sections.forEach((navSection, index) => {
        let offset = navSection.getBoundingClientRect();
        if (Math.abs(offset.top) < minor) {
            minor = Math.abs(offset.top);
            visibleSectionIndex = index;
        }
    });
    return visibleSectionIndex;
}


/**
 * create nav list based on sections
 */
function createNav() {
    const fragment = document.createDocumentFragment();
    sections.forEach(section => {
        const listItemTag = document.createElement("li")
        const anchorTag = document.createElement("a")

        anchorTag.innerText = section.getAttribute('data-sec-name');
        anchorTag.classList.add("menu__link");

        anchorTag.addEventListener("click", (event) => {
            event.preventDefault()
            section.scrollIntoView({behavior: "smooth"});
        });

        listItemTag.appendChild(anchorTag);
        fragment.appendChild(listItemTag);

    });
    navBarList.appendChild(fragment);
}

function setActiveSection() {
    let visibleSectionIndex = getVisibleSectionIndex();

    if (visibleSectionIndex !== -1) {

        let navATagList = document.querySelectorAll('.menu__link');

        sections.forEach(function (section, index) {
            if (index === visibleSectionIndex) {
                section.classList.add('current-active-class');
                navATagList[index].classList.add('current-active-class');
            } else {
                section.classList.remove('current-active-class');
                navATagList[index].classList.remove('current-active-class');
            }
        })
    }

}

function addScrollListener() {
    document.addEventListener('scroll', this.setActiveSection,);
}

createNav();
addScrollListener()
