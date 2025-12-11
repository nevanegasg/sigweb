<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">

  <NamedLayer>
    <Name>construcciones</Name>
    <UserStyle>
      <Title>Construcciones rojo apagado</Title>
      <FeatureTypeStyle>
        <Rule>
          <PolygonSymbolizer>

            <!-- Relleno rojo apagado -->
            <Fill>
              <CssParameter name="fill">
                <ogc:Literal>#C27A78</ogc:Literal>
              </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>1.0</ogc:Literal>
              </CssParameter>
            </Fill>

            <!-- Borde rojo oscuro delgado -->
            <Stroke>
              <CssParameter name="stroke">
                <ogc:Literal>#8A4F4B</ogc:Literal>
              </CssParameter>
              <CssParameter name="stroke-width">
                <ogc:Literal>1</ogc:Literal>
              </CssParameter>
            </Stroke>

          </PolygonSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>

</StyledLayerDescriptor>