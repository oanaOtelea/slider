function Slider(container, nav) {
	this.container = container;
	this.nav = nav;

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;
}

Slider.prototype.transition = function( coords) {
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth )
	});
};

Slider.prototype.setCurrent = function( dir ) {

	if ($('.oneButton').hasClass('current')) {

		this.current = dir;
		
	} else {

		var pos = this.current;
		pos += ( ~~( dir === 'next' ) || -1 );
		console.log(pos);
		console.log(this.current);
		this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

		if ( pos === 6 ) {
			$('#nextButton').animate({opacity: '0'}, "slow");
			$('#nextButton').hide();
		} else {
			$('#nextButton').show();
			$('#nextButton').animate({opacity: '1'}, "slow");
		}

		if ( pos === 0 ) {
			$('#prevButton').animate({opacity: '0'}, "slow");
			$('#prevButton').hide();
		} else {
			$('#prevButton').show();
			$('#prevButton').animate({opacity: '1'}, "slow");
		}

		$('.smallButtons').find('#button-' + pos).addClass('buttonHovered');

		if (dir === 'next') {
			var reset = pos - 1;
			$('.smallButtons').find('#button-' + reset).removeClass('buttonHovered');
		} else {
			var reset = pos + 1;
			$('.smallButtons').find('#button-' + reset).removeClass('buttonHovered');
		}

	}
	
	return pos;
};
