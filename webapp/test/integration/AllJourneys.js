/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 MaterialSet in the list
// * All 3 MaterialSet have at least one ToMaterialDetail

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/zoa/com/ZTEST1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/zoa/com/ZTEST1/test/integration/pages/App",
	"com/zoa/com/ZTEST1/test/integration/pages/Browser",
	"com/zoa/com/ZTEST1/test/integration/pages/Master",
	"com/zoa/com/ZTEST1/test/integration/pages/Detail",
	"com/zoa/com/ZTEST1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.zoa.com.ZTEST1.view."
	});

	sap.ui.require([
		"com/zoa/com/ZTEST1/test/integration/MasterJourney",
		"com/zoa/com/ZTEST1/test/integration/NavigationJourney",
		"com/zoa/com/ZTEST1/test/integration/NotFoundJourney",
		"com/zoa/com/ZTEST1/test/integration/BusyJourney",
		"com/zoa/com/ZTEST1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});