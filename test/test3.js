// 引入所需的模块
const { exec } = require('child_process');
const path = require('path');

// 配置你的仓库路径，请替换为你的实际路径
const repoPath = path.resolve('/test');

exec('git pull', { cwd: repoPath }, (error, stdout, stderr) => {
    setTimeout(() => {
        console.log("开始写入文件")
    }, 3000)
});