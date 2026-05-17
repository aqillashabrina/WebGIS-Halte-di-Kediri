var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_HaltediKediri_1 = new ol.format.GeoJSON();
var features_HaltediKediri_1 = format_HaltediKediri_1.readFeatures(json_HaltediKediri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HaltediKediri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HaltediKediri_1.addFeatures(features_HaltediKediri_1);
var lyr_HaltediKediri_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HaltediKediri_1, 
                style: style_HaltediKediri_1,
                popuplayertitle: 'Halte di Kediri',
                interactive: true,
    title: 'Halte di Kediri<br />\
    <img src="styles/legend/HaltediKediri_1_0.png" /> Halte Ahmad Dahlan<br />\
    <img src="styles/legend/HaltediKediri_1_1.png" /> Halte Imam Bonjol<br />\
    <img src="styles/legend/HaltediKediri_1_2.png" /> Halte Permata Hijau<br />\
    <img src="styles/legend/HaltediKediri_1_3.png" /> Halte Semampir<br />\
    <img src="styles/legend/HaltediKediri_1_4.png" /> Halte Semeru<br />\
    <img src="styles/legend/HaltediKediri_1_5.png" /> <br />' });
var format_ServiceArea_2 = new ol.format.GeoJSON();
var features_ServiceArea_2 = format_ServiceArea_2.readFeatures(json_ServiceArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_2.addFeatures(features_ServiceArea_2);
var lyr_ServiceArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_2, 
                style: style_ServiceArea_2,
                popuplayertitle: 'Service Area',
                interactive: true,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_2_0.png" /> 400m<br />\
    <img src="styles/legend/ServiceArea_2_1.png" /> 800m<br />\
    <img src="styles/legend/ServiceArea_2_2.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_HaltediKediri_1.setVisible(true);lyr_ServiceArea_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_HaltediKediri_1,lyr_ServiceArea_2];
lyr_HaltediKediri_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nama': 'Nama', 'REMARK': 'REMARK', 'ID': 'ID', 'Foto': 'Foto', });
lyr_ServiceArea_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nama': 'Nama', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Distance': 'Distance', 'layer': 'layer', 'path': 'path', 'Jangkauan': 'Jangkauan', });
lyr_HaltediKediri_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'Nama': 'TextEdit', 'REMARK': 'Hidden', 'ID': 'Hidden', 'Foto': 'ExternalResource', });
lyr_ServiceArea_2.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'Nama': 'TextEdit', 'REMARK': 'Hidden', 'ID': 'Hidden', 'type': 'Hidden', 'start': 'Hidden', 'Distance': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', 'Jangkauan': 'TextEdit', });
lyr_HaltediKediri_1.set('fieldLabels', {'Nama': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_ServiceArea_2.set('fieldLabels', {'Nama': 'inline label - always visible', 'Jangkauan': 'inline label - always visible', });
lyr_ServiceArea_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});