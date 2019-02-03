/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/jp/ui5-ml-translation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});