const getLines = () => {
  return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://wsiv.ratp.fr/xsd" xmlns:wsiv="http://wsiv.ratp.fr">
    <soapenv:Header/>
    <soapenv:Body>
        <wsiv:getLines>
        </wsiv:getLines>
    </soapenv:Body>
</soapenv:Envelope>`;
};
