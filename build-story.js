// Pre-renders the story markdown to an HTML snippet
const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '..', 'collection-1', 'drafts', 'the-runner.md'), 'utf8');

// Remove the title line (we have it in the page header)
const body = src.replace(/^# The Runner\n+/, '');

const html = marked.parse(body);
fs.writeFileSync(path.join(__dirname, 'public', 'ablation-content.html'), html);
console.log('Built ablation-content.html');
