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
		var _thisTextCounter = this;
		this.textArea.addEventListener('keydown', function(){
			var totalCount = this.value.length;
			_thisTextCounter.textAreaTotal.innerHTML = totalCount;
			_thisTextCounter.textAreaLeft.innerHTML = _thisTextCounter.maxChar - totalCount;
			if(totalCount >= _thisTextCounter.maxChar){
				if(!(event.keyCode == 8 || event.keyCode == 45 || event.keyCode == 46 || (event.keyCode > 36 && event.keyCode < 41))){
					event.preventDefault();
				}
			}
		}, false);
	},

};


TextCounter.init();