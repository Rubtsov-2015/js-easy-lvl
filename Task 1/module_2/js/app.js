var textareaCounter = document.getElementById('js-message');

textareaCounter.addEventListener('keyup', function(e) {
	var totalCount = textareaCounter.value.length;
	document.getElementById('js-message-left-total').innerHTML = totalCount;
}, true);



textareaCounter.addEventListener('keydown', ban_symbols, false);

function ban_symbols(evt){
	var totalCount = textareaCounter.value.length;
	if(totalCount > 139){
		if(!(evt.keyCode == 8 || evt.keyCode == 45 || evt.keyCode == 46 || (evt.keyCode > 36 && evt.keyCode < 41))){
			evt.preventDefault();
		}
	}
	return false;
}