const fs = require('fs');
const path = require('path');

const getEntries = (root, alias = '') => {
    const entries = {};
    const folders = [root];
    while (folders.length) {
        const currentFolder = folders[folders.length - 1];
        folders.pop();
        const items = fs.readdirSync(currentFolder);

        for (const item of items) {
            const itemPath = path.join(currentFolder, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory()) {
                folders.push(itemPath);
            } else {
                if (/\.tsx?$/.test(item)) {
                    entries[itemPath.substring(root.length, itemPath.lastIndexOf('.'))] = itemPath;
                }
            }
        }
    }

    return entries;
}

module.exports = getEntries;
