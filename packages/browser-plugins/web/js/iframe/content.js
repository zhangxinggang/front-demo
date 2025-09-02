setTimeout(() => {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const script = doc.createElement('script');
    script.src = chrome.runtime.getURL('/web/js/iframe/inject.js');
    script.onload = () => {
      console.log('Script injected');
    };
    doc.body.appendChild(script);
  });
}, 3000);
