fetch('/ablation-content.html')
  .then(r => r.text())
  .then(html => { document.getElementById('story').innerHTML = html; });
