var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');
var Writer = require('./Writer');
var PdfWriter = require('./PdfWriter');

var reader = new Reader();
var writer = new Writer();

async function main() {
    var content = await reader.Read('./UsersTest.csv'); /* Enter your file name */
    var processedContent = Processor.Process(content);
    var table = new Table(processedContent);
    var html = await HtmlParser.Parse(table);
    writer.Write(Date.now() + '.html', html);
    PdfWriter.WritePdf(Date.now() + '.pdf', html);
}

main();