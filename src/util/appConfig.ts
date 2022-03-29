export class AppConfig {
    public smsApiUrl?: string;
  }
  
  export let appConfig = new AppConfig();
  
  function loadConfig() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",'/app-config.json', false);
    xmlHttp.send(null);
    if (xmlHttp && xmlHttp.status === 200) {
      const response = xmlHttp.responseText;
      appConfig = JSON.parse(response) as AppConfig;
    }
  }
  loadConfig();