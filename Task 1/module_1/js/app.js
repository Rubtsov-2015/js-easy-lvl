var textareaCounter = document.getElementById('js-message');

textareaCounter.addEventListener('keyup', function(e) {
	totalCount = textareaCounter.value.length;
	document.getElementById('js-message-left-total').innerHTML = totalCount;
}, true);