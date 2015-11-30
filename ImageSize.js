function a(){
var image = document.getElementById("Logo").files[0];
           createReader(image, function (w, h) {

alert(w+" "+h);
            });
            // end checking

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