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
 * create class to handle app view
 */
class MyApp {

    constructor() {
        this.createNav();
        this.addScrollListener()
    }


    /**
     * create nav list based on sections
     */
    createNav() {
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

    setActiveSection() {
        let visibleSectionIndex = getVisibleSectionIndex();

        // If visibleSection exists
        if (visibleSectionIndex !== -1) {
            // create a list of Atags from navigation menu
            let navATagList = document.querySelectorAll('.menu__link');

            // Loop through all section
            for (let i = 0; i < sections.length; i++) {
                // For section in viewport: Add active state to the section and navigation
                if (i === visibleSectionIndex) {
                    sections[i].classList.add('current-active-class');
                    navATagList[i].classList.add('current-active-class');
                }
                // For other sections: Remove active state from the section and navigation
                else {
                    sections[i].classList.remove('current-active-class');
                    navATagList[i].classList.remove('current-active-class');
                }
            }
        }
    }

    addScrollListener() {
        document.addEventListener('scroll', this.setActiveSection);
    }
}


new MyApp()
