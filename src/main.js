import "./css/style.css"
import Scroll  from "./js/scroll.js"

document.addEventListener("DOMContentLoaded", () => {
	Scroll({
		el: ".js-scroll",
		typeEvent: "click"
	})

});
