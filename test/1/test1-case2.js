// 引入所需的模块
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
// 配置你的仓库路径，请替换为你的实际路径
const repoPath = path.resolve('/test');

exec('git pull', { cwd: repoPath }, (error, stdout, stderr) => {
    setTimeout(() => {
        const SRC_NAME1 =  'test1-case1.js';
        const DEST_NAME1 = 'test1Formal.js';
        const srcPath1 = path.join(__dirname,  SRC_NAME1);
        const destPath1 = path.join(__dirname, DEST_NAME1);
        fs.copyFileSync(srcPath1, destPath1);

        const SRC_NAME2 =  'test2-case1.js';
        const DEST_NAME2 = 'test2Formal.js';
        const srcPath2 = path.join(__dirname, '..', '2', SRC_NAME2);
        const destPath2 = path.join(__dirname, '..', '2', DEST_NAME2);
        fs.copyFileSync(srcPath2, destPath2);

        const SRC_NAME3 =  'test3-case1.js';
        const DEST_NAME3 = 'test3Formal.js';
        const srcPath3 = path.join(__dirname, '..', '3', SRC_NAME3);
        const destPath3 = path.join(__dirname, '..', '2', DEST_NAME3);
        fs.copyFileSync(srcPath3, destPath3);
    }, 3000)
});