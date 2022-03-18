var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_20220318_0931tracks_1 = new ol.format.GeoJSON();
var features_20220318_0931tracks_1 = format_20220318_0931tracks_1.readFeatures(json_20220318_0931tracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20220318_0931tracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20220318_0931tracks_1.addFeatures(features_20220318_0931tracks_1);
var lyr_20220318_0931tracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20220318_0931tracks_1, 
                style: style_20220318_0931tracks_1,
                interactive: true,
                title: '<img src="styles/legend/20220318_0931tracks_1.png" /> 2022-03-18_09-31, tracks'
            });
var format_Mes_pointswaypoints_2 = new ol.format.GeoJSON();
var features_Mes_pointswaypoints_2 = format_Mes_pointswaypoints_2.readFeatures(json_Mes_pointswaypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mes_pointswaypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mes_pointswaypoints_2.addFeatures(features_Mes_pointswaypoints_2);
var lyr_Mes_pointswaypoints_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mes_pointswaypoints_2, 
                style: style_Mes_pointswaypoints_2,
                interactive: true,
                title: '<img src="styles/legend/Mes_pointswaypoints_2.png" /> Mes_points, waypoints'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_20220318_0931tracks_1.setVisible(true);lyr_Mes_pointswaypoints_2.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_20220318_0931tracks_1,lyr_Mes_pointswaypoints_2];
lyr_20220318_0931tracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Mes_pointswaypoints_2.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_20220318_0931tracks_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Mes_pointswaypoints_2.set('fieldImages', {'name': 'TextEdit', 'elevation': 'TextEdit', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_20220318_0931tracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Mes_pointswaypoints_2.set('fieldLabels', {'name': 'inline label', 'elevation': 'inline label', 'comment': 'no label', 'description': 'inline label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Mes_pointswaypoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});