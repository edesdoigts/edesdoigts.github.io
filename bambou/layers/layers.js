var wms_layers = [];


        var lyr_FonddecarteOSM_0 = new ol.layer.Tile({
            'title': 'Fond de carte OSM',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Coucherefactorise_1 = new ol.format.GeoJSON();
var features_Coucherefactorise_1 = format_Coucherefactorise_1.readFeatures(json_Coucherefactorise_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coucherefactorise_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coucherefactorise_1.addFeatures(features_Coucherefactorise_1);
var lyr_Coucherefactorise_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coucherefactorise_1, 
                style: style_Coucherefactorise_1,
                popuplayertitle: "Couche refactorisée",
                interactive: true,
                title: '<img src="styles/legend/Coucherefactorise_1.png" /> Couche refactorisée'
            });

lyr_FonddecarteOSM_0.setVisible(true);lyr_Coucherefactorise_1.setVisible(true);
var layersList = [lyr_FonddecarteOSM_0,lyr_Coucherefactorise_1];
lyr_Coucherefactorise_1.set('fieldAliases', {'espèce_': 'espèce_', 'surface (m': 'surface (m', });
lyr_Coucherefactorise_1.set('fieldImages', {'espèce_': '', 'surface (m': '', });
lyr_Coucherefactorise_1.set('fieldLabels', {'espèce_': 'no label', 'surface (m': 'no label', });
lyr_Coucherefactorise_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});