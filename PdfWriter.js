var pdf = require('html-pdf');

class PdfWriter {
    static WritePdf(filePath, html) {
        pdf.create(html, {}).toFile(filePath, (err) => {});
    }
}

module.exports = PdfWriter;