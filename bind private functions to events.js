///bind event handlers to private functions////

function App () {
    this.init();
}

App.prototype.init = function() {
    this.setupHandlers()
        .createChildren()
        .enable();

    return this;
};

App.prototype.setupHandlers = function() {
    this.onClickHandler = this.onClick.bind(this);

    return this;
};

App.prototype.createChildren = function() {
    this.nextButton = $(this.window).find(".wilson-next");

    return this;
};

App.prototype.enable = function() {
    this.nextButton.on('click', this.onClickHandler);

    return this;
};

App.prototype.onClick = function() {
    this.nextSlide();

    return this;
};

App.prototype.nextSlide = function() {
    // console.log('nextSlide');

    return this;
};



///// convert polylines/polygons to paths in browser/////


window.onload=function(){
	var polys = document.querySelectorAll('polygon,polyline');
[].forEach.call(polys,convertPolyToPath);


function convertPolyToPath(poly){
  var svgNS = poly.ownerSVGElement.namespaceURI;
  var path class="shutter 1"= document.createElementNS(svgNS,'path');
  var points = poly.getAttribute('points').split(/\s+|,/);
  var x0=points.shift(), y0=points.shift();
  var pathdata = 'M'+x0+','+y0+'L'+points.join(' ');
  if (poly.tagName=='polygon') pathdata+='z';
  path.setAttribute('d',pathdata);
  poly.parentNode.replaceChild(path,poly);
  
}
}