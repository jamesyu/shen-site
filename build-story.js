// Pre-renders the story markdown to an HTML snippet
const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

// In production, ablation-content.html is pre-committed. This script is for local rebuilds.
const mdPath = path.join(__dirname, '..', 'collection-1', 'drafts', 'the-runner.md');
const outPath = path.join(__dirname, 'public', 'ablation-content.html');
if (!fs.existsSync(mdPath)) {
  if (fs.existsSync(outPath)) { console.log('Using pre-built ablation-content.html'); process.exit(0); }
  console.error('No source markdown and no pre-built HTML!'); process.exit(1);
}
const src = fs.readFileSync(mdPath, 'utf8');

// Remove the title line (we have it in the page header)
const body = src.replace(/^# The Runner\n+/, '');

const html = marked.parse(body);
fs.writeFileSync(path.join(__dirname, 'public', 'ablation-content.html'), html);
console.log('Built ablation-content.html');
