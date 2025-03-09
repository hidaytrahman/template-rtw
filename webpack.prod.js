const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin'); // For minification
const fs = require('fs');
const { execSync } = require('child_process');

// get the date at the time of build in the 'build-info.txt' file
// not in used
class BuildDatePlugin {
	apply(compiler) {
		compiler.hooks.done.tap('BuildDatePlugin', (stats) => {
			const buildUTCDate = new Date().toUTCString();
			const buildLocaleDate = new Date().toLocaleString();
			const outputPath = path.resolve(stats.compilation.outputOptions.path, 'build-info.txt');
			fs.writeFileSync(outputPath, `Build UTC Date: ${buildUTCDate} \nBuild locale Date: ${buildLocaleDate}`);
		});
	}
}


// gather build information and save in the dist folder
class BuildInfoPlugin {
	apply(compiler) {
		compiler.hooks.done.tap('BuildInfoPlugin', (stats) => {
			// Get project version from package.json
			const packageJson = require('./package.json');
			const projectVersion = packageJson.version;
			const buildDate = new Date().toLocaleString();
			const buildUTCDate = new Date().toUTCString();
			const gitCommit = execSync('git rev-parse HEAD').toString().trim();
			const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
			const webpackVersion = require('webpack/package.json').version;
			const nodeVersion = process.version;
			const buildDuration = (stats.endTime - stats.startTime) / 1000 + ' seconds';
			const outputFilesText = Object.keys(stats.compilation.assets).join('\n- ');
			const outputFiles = Object.keys(stats.compilation.assets); // for json

			// gather info as a text to add in the file
			const buildInfoText = `
Build Information:
- Build Date: ${buildDate}
- Build Date(UTC): ${buildUTCDate}
- Git Commit: ${gitCommit}
- Git Branch: ${gitBranch}
- Project Version: ${projectVersion}
- Webpack Version: ${webpackVersion}
- Node.js Version: ${nodeVersion}
- Build Duration: ${buildDuration}

Output Files:
- ${outputFilesText}
      `;

			// as a json
			const buildInfo = {
				buildInformation: {
					buildDate,
					buildDateUTC: buildUTCDate,
					gitCommit,
					gitBranch,
					projectVersion,
					webpackVersion,
					nodeVersion,
					buildDuration,
				},
				outputFiles,
			};

			// add info in the files (text and json)
			const outputPathTxt = path.resolve(stats.compilation.outputOptions.path, 'build-info.txt');
			const outputPath = path.resolve(stats.compilation.outputOptions.path, 'build-info.json');
			fs.writeFileSync(outputPathTxt, buildInfoText);
			fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2)); // Pretty-print JSON
		});
	}
}

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map', // For error tracking in production
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()], // Minify JavaScript
		splitChunks: {
			chunks: 'all', // Split code into chunks for better caching
		},
	},
	// plugins: [new BuildDatePlugin()],
	plugins: [new BuildInfoPlugin()
	],
});