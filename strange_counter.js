
function strangeCounter(t) {
	var t_p = t;
	var h = 3;

	// t_p and h will get closer 
	while(t_p > h) {
		console.log('-- s --');
		console.log('old t_p: ' + t_p);
		console.log('old h: ' + h);

		// to each col
		t_p = t_p - h;
		// the start of col
		h = h * 2;

		console.log('new t_p: ' + t_p);
    console.log('new h: ' + h);
	}

	// in the last loop t_p becomes the offset
	// why? t_p is like mod, left 
	return h - t_p + 1;
}

var time = 13;
var out = strangeCounter(time);
console.log(out);
