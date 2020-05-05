module.exports = function(config) {
	"use strict";

	require("./karma.conf")(config);
	config.set({

		preprocessors: {
			"{webapp,webapp/!(test)}/*.js": ["coverage"]
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},

		//NEW
		junitReporter: {
			outputDir: 'junit', // results will be saved as $outputDir/$browserName.xml
			outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
			suite: '', // suite will become the package name attribute in xml testsuite element
			useBrowserName: true, // add browser name to report and classes names
			nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
			classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
			properties: {}, // key value pair of properties to add to the <properties> section of the report
			xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
		},

		reporters: ["progress", "coverage", "junit"],

		browsers: ["CustomChromeHeadless"],

		singleRun: true

	});
};