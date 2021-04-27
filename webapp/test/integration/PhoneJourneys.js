/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/zoa/com/ZTEST1/test/integration/NavigationJourneyPhone",
		"com/zoa/com/ZTEST1/test/integration/NotFoundJourneyPhone",
		"com/zoa/com/ZTEST1/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});