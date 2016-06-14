$(document).ready(function() {
	$(".fancybox").fancybox({
		margin: [120, 360, 0, 60],
		padding: 0,
	    scrolling: 'visible',
	    autoResize: true,
		 arrows: true,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		aspectRatio : true,
		afterLoad : function() {
		this.title = '<span style="font-size: 30px">' + (this.index + 1) + '</span> / ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});
});