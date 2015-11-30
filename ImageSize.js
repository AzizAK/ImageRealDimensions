function CheckImageSize(){
var image = document.getElementById("Image").files[0];
           createReader(image, function (w, h) {

                alert("Width is: " + w + " And Height is: "+h);
});            
}


  function  createReader(file, whenReady) {
        var reader = new FileReader;
        reader.onload = function (evt) {
            var image = new Image();
            image.onload = function (evt) {
                var width = this.width;
                var height = this.height;
                if (whenReady) whenReady(width, height);
            };
            image.src = evt.target.result;
        };
        reader.readAsDataURL(file);
    }