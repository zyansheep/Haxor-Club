function changepage(inputstr) {
	var pages = document.getElementsByClassName("page")
	var visiblepage = document.getElementById(inputstr);
	if(!visiblepage){ return; }

	for(i=0; i<pages.length; i++) {
		pages[i].removeAttribute("style")
	}

	visiblepage.style.display = "block";
}