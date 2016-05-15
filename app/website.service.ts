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

export class WebsiteService {
  ref: Firebase;
  sites: any;

  constructor() {
    this.ref  = new Firebase("https://flickering-fire-5244.firebaseio.com");
  }

  getWebsites() {
    return this.ref.child("site").once("value");
    };
  }
