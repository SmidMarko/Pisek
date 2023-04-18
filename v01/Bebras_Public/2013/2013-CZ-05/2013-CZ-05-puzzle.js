function loadPuzzle() {
    var scale = "s0.2,0.2,0,0";
	var rsr = Raphael('puzzle', '160', '160');
	var layer1 = rsr.set();
	var path3170 = rsr.path("m 575.78837,152.78287 c 0,0 -285.09139,72.86363 -229.36358,4.94196 55.72782,-67.921685 9.07113,-119.706109 -46.54001,-118.518458 -55.61114,1.18765 -95.25726,51.209702 -40.97896,117.351838 54.27829,66.14212 -241.025494,-9.811 -241.025494,-9.811 l 3.076199,519.68005 c 114.338335,17.59622 287.285235,90.79176 237.450335,16.14007 -49.83495,-74.65169 15.73034,-119.35135 53.21842,-116.11483 37.48809,3.23651 95.30741,43.50078 46.56834,118.98743 -48.7391,75.4866 231.61612,-6.64097 231.61612,-6.64097 -16.35304,-46.04271 -85.10744,-281.95511 -25.9761,-220.95654 59.13137,60.99855 129.77119,22.06436 130.4142,-43.98337 0.64299,-66.0477 -76.6229,-89.83988 -133.28589,-39.88694 -56.66299,49.95292 14.82642,-221.18924 14.82642,-221.18924 z");
	path3170.attr({id: 'path3170',parent: 'layer1',fill: '#71c837',stroke: '#18890f',"stroke-width": '5',"stroke-linecap": 'butt',"stroke-linejoin": 'miter',"stroke-miterlimit": '4',"stroke-opacity": '1',"stroke-dasharray": 'none'});
	path3170.transform(scale + "t-10.71875,-2.071984").data('id', 'path3170');
	layer1.attr({'id': 'layer1','name': 'layer1'});layer1.transform("t-10.71875,-32.071984");
	var rsrGroups = [layer1];
}