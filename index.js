const renderTemplate = require("./render-template");
const createPdf = require("./create-pdf");
// const fs = require("fs");
const mockData = require("./twit-thread.json");
console.log(mockData);

async function main() {
	// creates the html content
	const htmlContent = renderTemplate({ thread: mockData }, "Thread");
	// creates the pdf from html and saves it to Twindle.pdf
	console.log(htmlContent);
	await createPdf("Twindle.pdf", htmlContent);

	// example line for saving the html version
	// fs.writeFileSync("Twindle.html", htmlContent);
}

main();