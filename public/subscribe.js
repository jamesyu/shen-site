document.querySelectorAll('.email-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button');
    const email = input.value.trim();
    if (!email) return;

    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Subscribing…';

    try {
      const res = await fetch('https://buttondown.com/api/emails/embed-subscribe/shenstories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'email=' + encodeURIComponent(email),
        mode: 'no-cors'
      });

      // no-cors means we can't read the response, but the subscription goes through
      btn.textContent = '✓ Check your email!';
      input.value = '';
      input.disabled = true;
    } catch {
      btn.textContent = original;
      btn.disabled = false;
      // Fallback: open in new tab
      window.open('https://buttondown.com/shenstories', 'popupwindow');
      form.submit();
    }
  });
});
