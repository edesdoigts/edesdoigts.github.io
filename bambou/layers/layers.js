var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bambous_1 = new ol.format.GeoJSON();
var features_Bambous_1 = format_Bambous_1.readFeatures(json_Bambous_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bambous_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bambous_1.addFeatures(features_Bambous_1);
var lyr_Bambous_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bambous_1, 
                style: style_Bambous_1,
                popuplayertitle: "Bambous",
                interactive: true,
                title: '<img src="styles/legend/Bambous_1.png" /> Bambous'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Bambous_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bambous_1];
lyr_Bambous_1.set('fieldAliases', {'espèce:': 'espèce:', 'surface (m²):': 'surface (m²):', });
lyr_Bambous_1.set('fieldImages', {'espèce:': 'TextEdit', 'surface (m²):': 'TextEdit', });
lyr_Bambous_1.set('fieldLabels', {'espèce:': 'header label - always visible', 'surface (m²):': 'header label - always visible', });
lyr_Bambous_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});