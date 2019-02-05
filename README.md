# UI5 Machine Translation

## Overview
SAP UI5 translation app powered by [SAP Leonardo Machine Learning API](https://api.sap.com/getting-started).

![App screenshot](/img/app.png)

To translate a text:
1. Type a text in English on the left box.
1. Click the button [ Translate ].
1. See the translated text on the right.

## Prerequisites
- [SAP Cloud Platform](http://cloudplatform.sap.com) trial account

## Instructions

### Create ML API destination on SCP
To connect SAP Cloud Platform to the SAP API's sandbox system, you need to create a destination on your account.
1. Open the [SAP Cloud Platform Cockpit](https://account.hanatrial.ondemand.com/cockpit/).
1. Navigate to the Destinations page.
1. Add a new entry with the following parameters:
	- Name: sapui5ml-api
	- Type: HTTP
	- Description: SAP Leonardo Machine Learning APIs
	- URL: https://sandbox.api.sap.com/ml
	- Proxy Type: Internet
	- Authentication: NoAuthentication
	- Additional parameters:
		- WebIDEEnabled = true
1. Mark the checkbox "Use default JDK truststore".
1. Click [Save].

### Service Authentication (API key)
In order to consume the SAP API service, you may provide an API key for authentication and parse it on the requests' header.
1. Go to the [Translation service official page](https://api.sap.com/api/translation_api/overview) to obtain your API key.
1. Create a file onto the folder `/webapp/model` called `ml-api.json`.
1. Paste the following content into the new file:
```javascript
{
  "APIKey":"<<< YOUR_API_KEY >>>"
}
```

## Author
[Jansen Penido](https://about.me/jansen.penido)
