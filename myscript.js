// Lorsque la page est chargée, faire apparaître les boutons Start / Stop
$(document).ready(function(){
	addBtnStart();
	//addBtnStop();
});

// Ajoute le bouton Start à l'écran
function addBtnStart() {
    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("value", "Start");
    element.setAttribute("name", "Start");
	element.setAttribute("style","position:fixed; bottom: 0; background-color:#2EFE2E; font-size:large; z-index:10000; height:100px; width:100px");
	$(element).click(function(){
		var n = prompt("Number of reps", "5");
		var x = document.querySelectorAll("a[class='_5j_u _30yy _4rv9 _6ymq _7kpj']").item(0).getBoundingClientRect().x;
		var y = document.querySelectorAll("a[class='_5j_u _30yy _4rv9 _6ymq _7kpj']").item(0).getBoundingClientRect().y;
		sendLike(n, x, y);
	});
    window.document.body.insertBefore(element, window.document.body.firstChild);
}

// Ajoute le bouton Stop à l'écran
/*function addBtnStop() {
    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("value", "Stop");
    element.setAttribute("name", "Stop");
	element.setAttribute("style","position:fixed; bottom: 100px; background-color:#FF0000; font-size:large; z-index:10000; height:100px; width:100px");
	$(element).click(function(){
		console.log('Stop');
	});
    window.document.body.insertBefore(element, window.document.body.firstChild);
}*/

// Simule un clic sur le point de coordonnées (x,y)
function click(x,y){
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x,y);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        x, y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

// Envoie un like
function sendLike(n, x, y){
	var ev_mousedown = document.createEvent("MouseEvent");
	var ev_mouseup = document.createEvent("MouseEvent");

    ev_mousedown.initMouseEvent(
		"mousedown",
		true /* bubble */, true /* cancelable */,
		window, null,
		x, y, 0, 0, /* coordinates */
		false, false, false, false, /* modifier keys */
		0 /*left*/, null
	);

	ev_mouseup.initMouseEvent(
		"mouseup",
		true /* bubble */, true /* cancelable */,
		window, null,
		x, y, 0, 0, /* coordinates */
		false, false, false, false, /* modifier keys */
		0 /*left*/, null
	);
	
	var like_button = document.elementFromPoint(x,y);
	
	for(var i=0;i<n;i++){
		like_button.dispatchEvent(ev_mousedown);
		like_button.dispatchEvent(ev_mouseup);
	}
}






















