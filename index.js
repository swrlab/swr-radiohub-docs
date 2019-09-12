const express		= require('express')
const app		= express()

const swaggerUi		= require('swagger-ui-express')
const swaggerDocument	= require('./openapi.json')

const customCss = '@import url(\'https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,500,600,700&display=swap\'); \n ' +
	'label { display: inline; } ' +
	'td { padding: 9px 22px !important; } ' +
	'.swagger-ui .topbar { background: #003082; } ' +
	'.swagger-ui .topbar img { display: none; }' +
	'.swagger-ui .topbar .topbar-wrapper:after { content: \'SWR audio lab - Radiohub Documentation\'; padding: 15px 0; color: white; font-size: 25px; font-weight: 600; }' +
	'.swagger-ui .topbar .download-url-wrapper { display: none } ' +
	'.swagger-ui * { font-family: \'Barlow Semi Condensed\', -apple-system, sans-serif !important; }' +
	'div.swagger-ui { max-width: 1080px; margin: 0 auto; } ' +
	'div.swagger-ui .wrapper { padding: 15px; }' +
	'div.swagger-ui .info .title small pre { padding: 2px 5px; }' +
	'div.information-container.wrapper { margin: 6% 0 6% 0; padding: 15px; }' +
	'div.swagger-ui .scheme-container { border-top: 1px solid #003082; margin: 0 0 6% 0; }' +
	'div.swagger-ui .scheme-container .schemes { margin: 0; padding: 15px; border: 0; }' +
	'div.swagger-ui section.models .model-container { background: rgba(255,255,255,0.6) !important; } ' +
	'div.swagger-ui section.models .model-container:hover { background: white !important; } '

const options = {
	explorer:		true,
	customCss,
	customCssUrl:		'https://storage.googleapis.com/swr-lab-static/swr-lab-static/lab-dashboard-style.css?006',
	customeSiteTitle:	'SWR Radiohub API Documentation',
	customfavIcon:		'https://storage.googleapis.com/swr-lab-static/swr-lab-static/img/SWR-Icons-SWR-Lab-Rocket-512.png'
}


app.get('/', function (req, res) {
	res.sendStatus(200);
})

app.get('/radiohub-docs/openapi.yaml', function(req, res, next) {
	res.sendFile(__dirname + '/openapi.yaml')
})

app.get('/radiohub-docs/openapi.json', function(req, res, next) {
	res.sendFile(__dirname + '/openapi.json')
})

app.use('/radiohub-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))


app.listen(7105)
