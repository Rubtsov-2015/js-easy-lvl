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
            this.events();
            this.loadComplete = 0;
        },
        events: function() {
            var imgArr = [];
            // console.log(imgArr);
            for(var i = 0; i < this.images.length; i++){
            	imgArr[i] = new Image();
            	imgArr[i].src = this.images[i].src;
            	this.loadImage(imgArr[i])
            	// console.log(imgArr[i].src);
            }

            // this.images.onload = function() { console.log("Успех")};

			// img.src = "https://farm2.staticflickr.com/1580/25180703901_8d151b1260_b.jpg";
			
        },
        loadImage: function(img) {
            // call this function on image load or error event
            img.onload = function () {
            	console.log(this.increaseProgressBar);
			   // this.increaseProgressBar(true);
			   this.loadComplete++;
			   // console.log(this.loadComplete);
			}
			img.onerror = function () {
			   console.log('error');
			   // this.increaseProgressBar(false);
			}
        },
        increaseProgressBar: function(callBackImg) {
            // use this method to increase progress bar percentage and
            //color filling
           	if(callBackImg)
           		this.loaderPercent.innerHTML(this.loadComplete/this.images.length);

        },
        loadedCallback: function() {
            // call this function once images will be loaded. Put code
            //inside this method which will hide progress bar.
        }
    };
})();
/* Call component init method. Note! This method should be placed
before </body> tag. */
Loader.init();