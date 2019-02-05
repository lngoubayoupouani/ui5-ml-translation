# UI5 Machine Translation

## Overview
SAP UI5 translation app powered by [SAP Leonardo Machine Learning API](https://api.sap.com/api/translation_api/overview).

![App screenshot](/img/app.png)

To translate a text:
1. Type a text in English on the left box.
1. Click the button [ Translate ].
1. See the translated text on the right.

## Prerequisites
- [SAP Cloud Platform](http://cloudplatform.sap.com) trial account

## Instructions

### Service Authentication (API key)
In order to consume the SAP API service, you need an API key for authentication and parse it on the requests' header. To do so:
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
