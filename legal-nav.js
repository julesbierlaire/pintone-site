(function () {
  const path = window.location.pathname || '/';
  const basePath = path.endsWith('/')
    ? path.replace(/\/+$/, '')
    : path.replace(/\/[^/]*$/, '');

  const withBase = (fileName) => `${basePath}/${fileName}`.replace(/\/{2,}/g, '/');

  const targets = {
    home: withBase('index.html'),
    download: withBase('download.html'),
    support: withBase('support.html'),
    privacy: withBase('privacy.html'),
    deleteAccount: withBase('delete-account.html'),
    terms: withBase('terms.html'),
  };

  document.querySelectorAll('[data-legal-link]').forEach((element) => {
    const key = element.getAttribute('data-legal-link');
    const href = key ? targets[key] : null;
    if (!href) return;
    element.setAttribute('href', href);
  });
})();
