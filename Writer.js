const fs = require('fs');
const util = require('util');

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filePath, data) {
        try {
            await this.writer(filePath, data);
            return true;
        } catch(err) {
            return false;
        }
    }
}

module.exports = Writer;