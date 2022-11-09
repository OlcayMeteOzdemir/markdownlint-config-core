const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.INIT_CWD, '.markdownlint.json');
const ignorePath = path.join(process.env.INIT_CWD, '.markdownlintignore');

if (!fs.existsSync(configPath)) {
	fs.writeFileSync(configPath, '{\n\t"extends": "@meteozdemir/markdownlint-config-core"\n}\n');
}

if (!fs.existsSync(ignorePath)) {
	fs.writeFileSync(ignorePath, 'node_modules\n');
}
