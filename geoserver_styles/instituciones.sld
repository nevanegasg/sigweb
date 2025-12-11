<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">

  <NamedLayer>
    <Name>sigweb:institucionesEducativas</Name>

    <UserStyle>
      <Title>Instituciones Educativas - Icono</Title>

      <FeatureTypeStyle>
        <Rule>
          <PointSymbolizer>
            <Graphic>

              <ExternalGraphic>
                <OnlineResource xlink:type="simple"
                  xlink:href="http://localhost:8080/geoserver/www/escuela.png"/>
                <Format>image/png</Format>
              </ExternalGraphic>

              <Size>28</Size>

            </Graphic>
          </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>

    </UserStyle>
  </NamedLayer>

</StyledLayerDescriptor>