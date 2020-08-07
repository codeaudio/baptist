
    let map;

    DG.then(function () {
        map = DG.map('map', {
            center: [55.77138, 37.655029],
			
            zoom: 14
        });
	


        DG.marker([55.774345, 37.670566]).addTo(map);
    });
