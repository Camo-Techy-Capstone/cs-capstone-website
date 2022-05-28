//import filesystem module
const fs = require('fs');

//include showdown module for node
const showdown  = require('showdown');

//read partials. This way we can reuse our head, header, and footer on all pages
const head = fs.readFileSync(process.cwd() + "/" + 'partials/head.md').toString();
const header = fs.readFileSync(process.cwd() + "/" + 'partials/header.md').toString();
const footer = fs.readFileSync(process.cwd() + "/" + 'partials/footer.md').toString();

//read all files in content folder
const contentPath = "content";
const contentFiles = fs.readdirSync(contentPath);

//for each content file, convert md to html and concatenate content with partials (head, header, footer)
for (let file of contentFiles){
	const content = fs.readFileSync(process.cwd() + "/" + contentPath + '/' + file).toString();
	const converter = new showdown.Converter();
	const bodyContent = converter.makeHtml(content);

	//write or replace the html file with corresponding filename. trim .md off the end before adding .html extension
	fs.writeFileSync(file.slice(0,-3) + '.html', head + '\n' + header + '\n' +'<body>' + '\n' + bodyContent + '\n' + '</body>' + '\n' + footer);
	console.log(file.slice(0,-3) + '.html' + ' created or updated');	
}