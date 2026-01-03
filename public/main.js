const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

navToggle.addEventListener("click", () => {
	navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"))
	primaryNav.toggleAttribute("data-visible");
	primaryHeader.toggleAttribute("data-overlay");
});

primaryNav.addEventListener("click", () => {
	navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"))
	primaryNav.toggleAttribute("data-visible");
	primaryHeader.toggleAttribute("data-overlay");
})

const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
	(entries) => {
		primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
	},
	{ rootMargin: "50px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);
