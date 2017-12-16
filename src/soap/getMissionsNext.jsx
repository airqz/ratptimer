const getMissionsNext = () => {
  return (
    `<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xsd="http://wsiv.ratp.fr/xsd"
  xmlns:wsiv="http://wsiv.ratp.fr"
>
  <soapenv:Header />
  <soapenv:Body>
    <wsiv:getMissionsNext>
      <wsiv:station>
        <xsd:line>
          <xsd:id>M13</xsd:id>
        </xsd:line>
        <xsd:name>La Fourche</xsd:name>
      </wsiv:station>
      <wsiv:direction>
        <xsd:sens>*</xsd:sens>
      </wsiv:direction>
    </wsiv:getMissionsNext>
  </soapenv:Body>
</soapenv:Envelope>`
  )
}

export default getMissionsNext;
