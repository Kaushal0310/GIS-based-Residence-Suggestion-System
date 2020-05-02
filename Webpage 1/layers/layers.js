var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hospital_1 = new ol.format.GeoJSON();
var features_Hospital_1 = format_Hospital_1.readFeatures(json_Hospital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_1.addFeatures(features_Hospital_1);
var lyr_Hospital_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospital_1, 
                style: style_Hospital_1,
                interactive: true,
                title: '<img src="styles/legend/Hospital_1.png" /> Hospital'
            });
var format_Library_2 = new ol.format.GeoJSON();
var features_Library_2 = format_Library_2.readFeatures(json_Library_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Library_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Library_2.addFeatures(features_Library_2);
var lyr_Library_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Library_2, 
                style: style_Library_2,
                interactive: true,
                title: '<img src="styles/legend/Library_2.png" /> Library'
            });
var format_School_3 = new ol.format.GeoJSON();
var features_School_3 = format_School_3.readFeatures(json_School_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_3.addFeatures(features_School_3);
var lyr_School_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_School_3, 
                style: style_School_3,
                interactive: true,
                title: '<img src="styles/legend/School_3.png" /> School'
            });
var format_SubwayStation_4 = new ol.format.GeoJSON();
var features_SubwayStation_4 = format_SubwayStation_4.readFeatures(json_SubwayStation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubwayStation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubwayStation_4.addFeatures(features_SubwayStation_4);
var lyr_SubwayStation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SubwayStation_4, 
                style: style_SubwayStation_4,
                interactive: true,
                title: '<img src="styles/legend/SubwayStation_4.png" /> SubwayStation'
            });
var format_NYA_IntLHSSS_5 = new ol.format.GeoJSON();
var features_NYA_IntLHSSS_5 = format_NYA_IntLHSSS_5.readFeatures(json_NYA_IntLHSSS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NYA_IntLHSSS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYA_IntLHSSS_5.addFeatures(features_NYA_IntLHSSS_5);
var lyr_NYA_IntLHSSS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NYA_IntLHSSS_5, 
                style: style_NYA_IntLHSSS_5,
                interactive: true,
                title: '<img src="styles/legend/NYA_IntLHSSS_5.png" /> NYA_Int(L,H,S,SS)'
            });
var format_Airport_Point_6 = new ol.format.GeoJSON();
var features_Airport_Point_6 = format_Airport_Point_6.readFeatures(json_Airport_Point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_Point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_Point_6.addFeatures(features_Airport_Point_6);
var lyr_Airport_Point_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Airport_Point_6, 
                style: style_Airport_Point_6,
                interactive: true,
                title: '<img src="styles/legend/Airport_Point_6.png" /> Airport_Point'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Hospital_1.setVisible(true);lyr_Library_2.setVisible(true);lyr_School_3.setVisible(true);lyr_SubwayStation_4.setVisible(true);lyr_NYA_IntLHSSS_5.setVisible(true);lyr_Airport_Point_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Hospital_1,lyr_Library_2,lyr_School_3,lyr_SubwayStation_4,lyr_NYA_IntLHSSS_5,lyr_Airport_Point_6];
lyr_Hospital_1.set('fieldAliases', {'GID': 'GID', 'id': 'id', 'Name': 'Name', 'Address': 'Address', 'zip': 'zip', 'factype': 'factype', 'facname': 'facname', 'capacity': 'capacity', 'capname': 'capname', 'bcode': 'bcode', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_Library_2.set('fieldAliases', {'GID': 'GID', 'id': 'id', 'Name': 'Name', 'Address': 'Address', 'zip': 'zip', 'factype': 'factype', 'facname': 'facname', 'capacity': 'capacity', 'capname': 'capname', 'bcode': 'bcode', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_School_3.set('fieldAliases', {'GID': 'GID', 'id': 'id', 'Name': 'Name', 'Address': 'Address', 'zip': 'zip', 'factype': 'factype', 'facname': 'facname', 'capacity': 'capacity', 'capname': 'capname', 'prek8_enr': 'prek8_enr', 'g912_enr': 'g912_enr', 'sd': 'sd', 'bcode': 'bcode', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_SubwayStation_4.set('fieldAliases', {'GID': 'GID', 'Stop_ID': 'Stop_ID', 'Stop_Name': 'Stop_Name', 'Trains': 'Trains', 'complex_id': 'complex_id', 'multi_st': 'multi_st', 'stop_id2': 'stop_id2', 'bcode': 'bcode', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', });
lyr_NYA_IntLHSSS_5.set('fieldAliases', {'GID': 'GID', 'STREET NAME': 'STREET NAME', 'ZIP CODE': 'ZIP CODE', 'LIBRARAY': 'LIBRARAY', 'L_Address': 'L_Address', 'HOSPITAL': 'HOSPITAL', 'H_Adress': 'H_Adress', 'SCHOOL': 'SCHOOL', 'S_Adress': 'S_Adress', 'STOP_ID': 'STOP_ID', 'SubwayStation': 'SubwayStation', });
lyr_Airport_Point_6.set('fieldAliases', {'AIRPORT NA': 'AIRPORT NA', 'URL': 'URL', });
lyr_Hospital_1.set('fieldImages', {'GID': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'zip': 'TextEdit', 'factype': 'TextEdit', 'facname': 'TextEdit', 'capacity': 'TextEdit', 'capname': 'TextEdit', 'bcode': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_Library_2.set('fieldImages', {'GID': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'zip': 'TextEdit', 'factype': 'TextEdit', 'facname': 'TextEdit', 'capacity': 'TextEdit', 'capname': 'TextEdit', 'bcode': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_School_3.set('fieldImages', {'GID': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'zip': 'TextEdit', 'factype': 'TextEdit', 'facname': 'TextEdit', 'capacity': 'TextEdit', 'capname': 'TextEdit', 'prek8_enr': 'TextEdit', 'g912_enr': 'TextEdit', 'sd': 'TextEdit', 'bcode': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_SubwayStation_4.set('fieldImages', {'GID': '', 'Stop_ID': '', 'Stop_Name': '', 'Trains': '', 'complex_id': '', 'multi_st': '', 'stop_id2': '', 'bcode': '', 'stop_lat': '', 'stop_lon': '', });
lyr_NYA_IntLHSSS_5.set('fieldImages', {'GID': '', 'STREET NAME': '', 'ZIP CODE': '', 'LIBRARAY': '', 'L_Address': '', 'HOSPITAL': '', 'H_Adress': '', 'SCHOOL': '', 'S_Adress': '', 'STOP_ID': '', 'SubwayStation': '', });
lyr_Airport_Point_6.set('fieldImages', {'AIRPORT NA': 'TextEdit', 'URL': 'TextEdit', });
lyr_Hospital_1.set('fieldLabels', {'GID': 'inline label', 'id': 'no label', 'Name': 'header label', 'Address': 'inline label', 'zip': 'inline label', 'factype': 'no label', 'facname': 'no label', 'capacity': 'no label', 'capname': 'no label', 'bcode': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_Library_2.set('fieldLabels', {'GID': 'inline label', 'id': 'no label', 'Name': 'header label', 'Address': 'inline label', 'zip': 'inline label', 'factype': 'no label', 'facname': 'no label', 'capacity': 'no label', 'capname': 'no label', 'bcode': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_School_3.set('fieldLabels', {'GID': 'inline label', 'id': 'no label', 'Name': 'header label', 'Address': 'inline label', 'zip': 'inline label', 'factype': 'no label', 'facname': 'no label', 'capacity': 'no label', 'capname': 'no label', 'prek8_enr': 'no label', 'g912_enr': 'no label', 'sd': 'no label', 'bcode': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_SubwayStation_4.set('fieldLabels', {'GID': 'inline label', 'Stop_ID': 'inline label', 'Stop_Name': 'header label', 'Trains': 'no label', 'complex_id': 'no label', 'multi_st': 'no label', 'stop_id2': 'no label', 'bcode': 'no label', 'stop_lat': 'no label', 'stop_lon': 'no label', });
lyr_NYA_IntLHSSS_5.set('fieldLabels', {'GID': 'inline label', 'STREET NAME': 'header label', 'ZIP CODE': 'inline label', 'LIBRARAY': 'inline label', 'L_Address': 'inline label', 'HOSPITAL': 'inline label', 'H_Adress': 'inline label', 'SCHOOL': 'inline label', 'S_Adress': 'inline label', 'STOP_ID': 'inline label', 'SubwayStation': 'inline label', });
lyr_Airport_Point_6.set('fieldLabels', {'AIRPORT NA': 'header label', 'URL': 'inline label', });
lyr_Airport_Point_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});