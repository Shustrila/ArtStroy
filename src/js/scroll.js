export default function (obj) {

	const eventCollback = function (e) {
		let href = this.getAttribute("href");
		let nodeElement = document.querySelector(href || "body");

		if(nodeElement){
			let topPosition = nodeElement.offsetTop;
			let positionPage = window.pageYOffset;
			
			// ----
			setInterval(function () {
				if ( positionPage < topPosition || positionPage < document.body.offsetHeight || positionPage > 0 ) {
					window.scrollTo(0, 100);
				}else {
					clearInterval(this);
				}
				console.log(topPosition)
				// ----
			}, 100);
		} else {
			console.error(`ERROR: not element the DOM tree selector ${href}`);
		}

		e.preventDefault()
	};

	document.querySelectorAll(obj.el || "body").forEach((item) =>{
		item.addEventListener((obj.typeEvent || "click"), eventCollback);
	});

}
