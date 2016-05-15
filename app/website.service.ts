export class WebsiteService {
  constructor() { }

  getWebsites() {
    let site = new Website("Stock Sandwich",
    "stocksandwich.com", "Stock Sandwich aims to provide...",
    "A free, high-res site...");
      return site;
    };
  }

export class Website {
    name: string;
    description: string;
    domain: string;
    summary: string;

    constructor(n:string, dom:string, desc:string, sum:string) {
      this.name = n;
      this.description = desc;
      this.domain = dom;
      this.summary = sum;
    }
  }
