sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (JSONModel, Controller) {
	"use strict";
	return Controller.extend("com.jp.ui5-ml-translation.controller.ViewMain", {
		
		onInit: function () {
			// Create a JSON model from an object literal
			var oModel = new JSONModel({
				sourceText: "",
				translatedText: ""
			});
			
			// Assign the model object to the view
			this.getView().setModel(oModel);
		},
		
		/**
		 *@memberOf com.jp.ui5-ml-translation.controller.ViewMain
		 */
		onPressTranslate: function (oEvent) {
			// Get source text
			var sSourceText = this.getView().getModel().getProperty("/sourceText");
			
			if(sSourceText){
				// Translate the text
				this.translateText(sSourceText);
			}
		},
		
		translateText: function (sSourceText) {
			var that = this;
			
			// Get API key
			var apiKey = this.getView().getModel("ml-api").getProperty("/APIKey");
			
			// Set request's body
			var data = JSON.stringify({
			  "sourceLanguage": "en",
			  "targetLanguages": [
			    "fr"
			  ],
			  "units": [
			    {
			      "value": sSourceText,
			      "key": "TEXT"
			    }
			  ]
			});
			
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = false;
			
			// Listen for service's response
			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === this.DONE) {
					// Get translated text from response
					var sTranslatedText = JSON.parse(this.responseText).units[0].translations[0].value;
					
					// Display translated text on screen
					that.getView().getModel().setProperty("/translatedText", sTranslatedText);
				}
			});
			
			//Set request method and API endpoint for API sandbox 
			xhr.open("POST", "/ml-dest/translation/translation");
			
			//Add request headers
			xhr.setRequestHeader("Content-Type", "application/json");
			//API Key for API Sandbox
			xhr.setRequestHeader("APIKey", apiKey);
			
			//Send request
			xhr.send(data);
		}
		
	});
});