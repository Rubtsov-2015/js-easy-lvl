/**
* TextCounter
*/
var TextCounter = {
	maxChar: 140,
	textArea: null,
	textAreaTotal: null,
	textAreaLeft: null,
	init: function() {
		this.textArea = document.querySelector('#js-message');
		this.textAreaTotal = document.querySelector('#js-message-left-total');
		this.textAreaLeft = document.querySelector('#js-message-left-symbols');
		this.events();
	},
	events: function() {
		console.log(this.textArea);
		this.textArea.addEventListener('keydown', ban_symbols(event, this.textArea, this.maxChar), false);
	},

};


function ban_symbols(e, textareaCounter, maxChar){
	var totalCount = textareaCounter.value.length;
	console.log(totalCount);
	if(totalCount >= maxChar){
		if(!(e.keyCode == 8 || e.keyCode == 45 || e.keyCode == 46 || (e.keyCode > 36 && e.keyCode < 41))){
			e.preventDefault();
		}
	}
	return false;
}

TextCounter.init();
