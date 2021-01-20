var input = document.getElementById('image_input');

var div_image = document.getElementById('image');
var div_image1 = document.getElementById('image1');


var add = document.getElementById('add');

var delete_image = document.getElementById('delete_image');

var fill = document.querySelectorAll('.fil');
// range

//blur
var blur_range = document.getElementById('blur');
var blur_result = document.getElementById('blur_result');

//brightness
var brightness_range = document.getElementById('brightness');
var brightness_result = document.getElementById('brightness_result');

//contrast
var contrast_range = document.getElementById('contrast');
var contrast_result = document.getElementById('contrast_result');

//grayscale
var grayscale_range = document.getElementById('grayscale');
var grayscale_result = document.getElementById('grayscale_result');

//hueRotate
var hueRotate_range = document.getElementById('hueRotate');
var hueRotate_result = document.getElementById('hueRotate_result');

//invert
var invert_range = document.getElementById('invert');
var invert_result = document.getElementById('invert_result');

//opacity
var opacity_range = document.getElementById('opacity');
var opacity_result = document.getElementById('opacity_result');

//saturate
var saturate_range = document.getElementById('saturate');
var saturate_result = document.getElementById('saturate_result');

//sepia
var sepia_range = document.getElementById('sepia');
var sepia_result = document.getElementById('sepia_result');





function filter() {
    blur_result.innerHTML = blur_range.value + 'px';
    brightness_result.innerHTML = brightness_range.value + '%';
    contrast_result.innerHTML = contrast_range.value + '%';
    grayscale_result.innerHTML = grayscale_range.value + '%';
    hueRotate_result.innerHTML = hueRotate_range.value + 'deg';
    invert_result.innerHTML = invert_range.value + '%';
    opacity_result.innerHTML = opacity_range.value + '%';
    saturate_result.innerHTML = saturate_range.value + '%';
    sepia_result.innerHTML = sepia_range.value + '%';

    div_image.style.filter = 'blur(' + blur_range.value + 'px' + ') ' + 'brightness(' + brightness_range.value + '%' + ') ' + 'contrast(' + contrast_range.value + '%' + ') ' + 'grayscale(' + grayscale_range.value + '%' + ') ' + 'hue-rotate(' + hueRotate_range.value + 'deg' + ') ' + 'invert(' + invert_range.value + '%' + ') ' + 'opacity(' + opacity_range.value + '%' + ') ' + 'saturate(' + saturate_range.value + '%' + ') ' + 'sepia(' + sepia_range.value + '%' + ')';

}

for (node of fill) {
    node.addEventListener('input', filter);
}

// add and delate function
add.onclick = function () {
    div_image.style.backgroundImage = 'url(' + input.value + ')';
    div_image1.style.backgroundImage = 'url(' + input.value + ')';
    div_image.style.border = 'none';
    div_image1.style.border = 'none';

};

delete_image.onclick = function () {
    div_image.style.backgroundImage = 'none';
    div_image1.style.backgroundImage = 'none';
    div_image.style.border = '1px dashed #633cff';
    div_image1.style.border = '1px dashed #633cff';

    input.value = '';
};
