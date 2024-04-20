var wms_layers = [];

var format_bambou_0 = new ol.format.GeoJSON();
var features_bambou_0 = format_bambou_0.readFeatures(json_bambou_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bambou_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bambou_0.addFeatures(features_bambou_0);
var lyr_bambou_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bambou_0, 
                style: style_bambou_0,
                popuplayertitle: "bambou",
                interactive: true,
                title: '<img src="styles/legend/bambou_0.png" /> bambou'
            });

lyr_bambou_0.setVisible(true);
var layersList = [lyr_bambou_0];
lyr_bambou_0.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', 'species': 'species', 'nb_touffes': 'nb_touffes', 'nb_chaumes': 'nb_chaumes', 'remarque': 'remarque', 'photo': 'photo', });
lyr_bambou_0.set('fieldImages', {'fid': 'TextEdit', 'area_m2': 'TextEdit', 'species': 'TextEdit', 'nb_touffes': 'Range', 'nb_chaumes': 'Range', 'remarque': 'TextEdit', 'photo': 'ExternalResource', });
lyr_bambou_0.set('fieldLabels', {'fid': 'no label', 'area_m2': 'no label', 'species': 'no label', 'nb_touffes': 'no label', 'nb_chaumes': 'no label', 'remarque': 'no label', 'photo': 'no label', });
lyr_bambou_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});