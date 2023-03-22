(function () {
    const hiddenInfo = JSON.parse(localStorage.getItem('hiddenInfo')) || {};
  
    function setFavicon(url) {
      const favicons = document.querySelectorAll("link[rel*='icon']");
      if (favicons.length > 0) {
        favicons.forEach((favicon) => {
          favicon.href = url;
        });
      } else {
        const favicon = document.createElement('link');
        favicon.rel = 'shortcut icon';
        favicon.href = url;
        document.head.appendChild(favicon);
      }
    }
  
    if (hiddenInfo.location && hiddenInfo.location.href === window.location.href) {
      document.title = hiddenInfo.originalTitle;
  
      if (hiddenInfo.originalFavicon) {
        setFavicon(hiddenInfo.originalFavicon);
      }
  
      localStorage.removeItem('hiddenInfo');
    } else {
      const originalTitle = document.title;
      const favicon = document.querySelector("link[rel*='icon']");
      const originalFavicon = favicon ? favicon.href : '';
  
      document.title = "New Tab";
      $path = "./icon.png"
      setFavicon($path);
  
      hiddenInfo.location = { href: window.location.href };
      hiddenInfo.originalTitle = originalTitle;
      hiddenInfo.originalFavicon = originalFavicon;
      localStorage.setItem('hiddenInfo', JSON.stringify(hiddenInfo));
    }
  })();