<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>area landmarks</Name>
    <UserStyle>
      <Title>Border-less gray fill</Title>
      <Abstract>Light gray polygon fill without a border</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <PolygonSymbolizer>

            <!-- Relleno rojo -->
            <Fill>
              <CssParameter name="fill">
                <ogc:Literal>#fa1105</ogc:Literal>
              </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>1.0</ogc:Literal>
              </CssParameter>
            </Fill>

            <!-- Borde verde oscuro -->
            <Stroke>
              <CssParameter name="stroke">
                <ogc:Literal>#2E7D32</ogc:Literal>
              </CssParameter>
              <CssParameter name="stroke-width">
                <ogc:Literal>2</ogc:Literal>
              </CssParameter>
            </Stroke>

          </PolygonSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>