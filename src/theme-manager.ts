export class ThemeManager {
  public activeThemes = [];

  public activateThemes(incomingUrls: string[] = []) {
    let themesToActivate = incomingUrls;
    const themesToDeactivate = [];

    for (const activeUrl of this.activeThemes) {
      if (!incomingUrls.includes(activeUrl)) {
        // Active not present in incoming, deactivate it.
        themesToDeactivate.push(activeUrl);
      } else {
        // Already present in active themes, remove it from themesToActivate.
        themesToActivate = themesToActivate.filter((candidate) => {
          return candidate !== activeUrl;
        });
      }
    }

    for (const themeUrl of themesToDeactivate) {
      this.deactivateTheme(themeUrl);
    }

    this.activeThemes = incomingUrls;

    for (const themeUrl of themesToActivate) {
      if (!themeUrl) {
        continue;
      }

      const link = document.createElement('link');
      link.id = btoa(themeUrl);
      link.href = themeUrl;
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.media = 'screen,print';
      link.className = 'custom-theme';
      document
        .getElementsByTagName('head')[0]
        .appendChild(link);
    }
  }

  private deactivateTheme(themeUrl: string) {
    const element = this.themeElementForUrl(themeUrl);
    if (element && element.parentNode) {
      element.setAttribute('disabled', 'true');
      element.parentNode.removeChild(element);
    }
  }

  private themeElementForUrl(themeUrl: string): Element {
    const elements = Array.from(
      document.getElementsByClassName('custom-theme'),
    ).slice();
    return elements.find((element) => {
      return element.id == btoa(themeUrl);
    });
  }
}
