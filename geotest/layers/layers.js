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
var format_pipelines_1 = new ol.format.GeoJSON();
var features_pipelines_1 = format_pipelines_1.readFeatures(json_pipelines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pipelines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pipelines_1.addFeatures(features_pipelines_1);
var lyr_pipelines_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pipelines_1, 
                style: style_pipelines_1,
                interactive: true,
                title: '<img src="styles/legend/pipelines_1.png" /> pipelines'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_pipelines_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_pipelines_1];
lyr_pipelines_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'NAME_PIMS': 'NAME_PIMS', 'CLASSIFICATION': 'CLASSIFICATION', 'PIPELINE_ID': 'PIPELINE_ID', 'P_ID_NUMBER': 'P_ID_NUMBER', 'P_ID_LINE_NUMBER': 'P_ID_LINE_NUMBER', 'LICENSE_NO': 'LICENSE_NO', 'AREA_NUMBER': 'AREA_NUMBER', 'SEQUENCE_NUMBER': 'SEQUENCE_NUMBER', 'DIAMETER_NOMINAL': 'DIAMETER_NOMINAL', 'SERVICE': 'SERVICE', 'SPECIFICATION': 'SPECIFICATION', 'LINE_TYPE': 'LINE_TYPE', 'PIPELINE_LENGTH_M': 'PIPELINE_LENGTH_M', 'FLUID_TYPE': 'FLUID_TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'MAINTENANCE_RESPONSIBILITY': 'MAINTENANCE_RESPONSIBILITY', 'DESIGN_PRESSURE': 'DESIGN_PRESSURE', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMTRACK_LICENSE_NAME': 'COMTRACK_LICENSE_NAME', 'COMTRACK_FIELD': 'COMTRACK_FIELD', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', });
lyr_pipelines_1.set('fieldImages', {'id': '', 'NAME': '', 'NAME_PIMS': '', 'CLASSIFICATION': '', 'PIPELINE_ID': '', 'P_ID_NUMBER': '', 'P_ID_LINE_NUMBER': '', 'LICENSE_NO': '', 'AREA_NUMBER': '', 'SEQUENCE_NUMBER': '', 'DIAMETER_NOMINAL': '', 'SERVICE': '', 'SPECIFICATION': '', 'LINE_TYPE': '', 'PIPELINE_LENGTH_M': '', 'FLUID_TYPE': '', 'OWNER': '', 'OPERATOR': '', 'MAINTENANCE_RESPONSIBILITY': '', 'DESIGN_PRESSURE': '', 'CONSTRUCTION_DATE': '', 'COMTRACK_LICENSE_NAME': '', 'COMTRACK_FIELD': '', 'COMMENTS': '', 'SOURCE': '', 'ACCURACY': '', 'LAST_UPDATE': '', 'OBJECT_TYPE': '', 'GUID': '', 'COUNTRY_CODE': '', 'STATE_CODE': '', });
lyr_pipelines_1.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'NAME_PIMS': 'no label', 'CLASSIFICATION': 'no label', 'PIPELINE_ID': 'no label', 'P_ID_NUMBER': 'no label', 'P_ID_LINE_NUMBER': 'no label', 'LICENSE_NO': 'no label', 'AREA_NUMBER': 'no label', 'SEQUENCE_NUMBER': 'no label', 'DIAMETER_NOMINAL': 'no label', 'SERVICE': 'no label', 'SPECIFICATION': 'no label', 'LINE_TYPE': 'no label', 'PIPELINE_LENGTH_M': 'no label', 'FLUID_TYPE': 'no label', 'OWNER': 'no label', 'OPERATOR': 'no label', 'MAINTENANCE_RESPONSIBILITY': 'no label', 'DESIGN_PRESSURE': 'no label', 'CONSTRUCTION_DATE': 'no label', 'COMTRACK_LICENSE_NAME': 'no label', 'COMTRACK_FIELD': 'no label', 'COMMENTS': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', 'COUNTRY_CODE': 'no label', 'STATE_CODE': 'no label', });
lyr_pipelines_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});