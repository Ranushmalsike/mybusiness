export class PageHeader {
    constructor(pageName) {
      this.pageName = pageName;
    }
  
    addStylesAndScripts() {
      const head = document.head;
  
      const links = [
        { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700", rel: "stylesheet" },
        { href: "../assets/css/nucleo-icons.css", rel: "stylesheet" },
        { href: "../assets/css/nucleo-svg.css", rel: "stylesheet" },
        { href: "https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css", rel: "stylesheet" },
        { href: "https://cdn.datatables.net/buttons/3.0.2/css/buttons.dataTables.css", rel: "stylesheet" },
        { href: "https://cdn.datatables.net/fixedcolumns/4.0.1/css/fixedColumns.dataTables.min.css", rel: "stylesheet" },
        { href: "../assets/css/argon-dashboard.css?v=2.0.4", rel: "stylesheet", id: "pagestyle" },
      ];
  
      const scripts = [
        { src: "https://kit.fontawesome.com/42d5adcbca.js", crossorigin: "anonymous" },
        { src: "https://code.jquery.com/jquery-3.6.0.min.js" },
        { src: "https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js" },
        { src: "https://cdn.datatables.net/fixedcolumns/4.0.1/js/dataTables.fixedColumns.min.js" },
        { src: "https://cdn.datatables.net/buttons/3.0.2/js/dataTables.buttons.js" },
        { src: "https://cdn.datatables.net/buttons/3.0.2/js/buttons.dataTables.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js" },
        { src: "https://cdn.datatables.net/buttons/3.0.2/js/buttons.html5.min.js" },
      ];
  
      links.forEach(linkInfo => {
        const link = document.createElement('link');
        Object.assign(link, linkInfo);
        head.appendChild(link);
      });
  
      scripts.forEach(scriptInfo => {
        const script = document.createElement('script');
        Object.assign(script, scriptInfo);
        head.appendChild(script);
      });
    }
  
    render() {
      const header = document.createElement('header');
      header.textContent = this.pageName;
      return header;
    }
  }
  
  export function renderPageHeader(pageName) {
    const pageHeader = new PageHeader(pageName);
    pageHeader.addStylesAndScripts();
    const header = pageHeader.render();
    document.body.appendChild(header);
  }
  