var Loader = (function() {
    'use strict';
    return {
        init: function() {
            /* get elements*/
            this.loader = document.getElementById('loader');
            this.progressBar =
                document.getElementById('loaderProgressBar');
            this.loaderPercent =
                document.getElementById('loaderPercent');
            this.images = document.getElementsByTagName('img');
            /* add additional properties below if needed */
            this.loadComplete = 0;
            this.stagesPassed = 0;
            this.errorsDownloadImg = 0;
            this.events();
        },
        events: function() {
            var imgArr = [];
            for(var i = 0; i < this.images.length; i++){
            	imgArr[i] = new Image();
            	imgArr[i].src = this.images[i].src;
            	this.loadImage(imgArr[i]);
            	
            }
        },
        loadImage: function(img) {
            // call this function on image load or error event
            var self = this;
            img.onload = function () {
			   self.stagesPassed++;
			   self.loadComplete++;
				console.log(self.errorsDownloadImg);
			   self.increaseProgressBar(self, true);
			   if(self.stagesPassed == self.images.length ? self.loadedCallback(self) : false);
			}
			img.onerror = function () {
			   self.stagesPassed++;
			   self.errorsDownloadImg++;
			   self.increaseProgressBar(self, false);
			   if(self.stagesPassed == self.images.length ? self.loadedCallback(self) : false);
			}
        },
        increaseProgressBar: function(self, callBackImg) {
            // use this method to increase progress bar percentage and color filling

       		self.loaderPercent.innerHTML = self.progressBar.style.width = parseInt(self.loadComplete/self.images.length * 100) + '%';
           	self.loaderPercent.innerHTML = parseInt(self.loadComplete/self.images.length * 100) + '%';
        },
        loadedCallback: function(self) {
			console.log(self.errorsDownloadImg);
			setTimeout(function(){
        		alert('all images have been downloaded. With errors: ' + self.errorsDownloadImg);
        		self.loader.style.display = 'none';
			}, 500);
        }
    };
})();
/* Call component init method. Note! This method should be placed
before </body> tag. */
Loader.init();