class Processor {
    static Process(data) {
        var fullRows = data.split('\r\n'); /* Can be used on Linux and Windows */
        var rows = [];

        fullRows.forEach(row => {
            var arr = row.split(',');
            rows.push(arr);
        });
        
        return rows;
    }
}

module.exports = Processor;