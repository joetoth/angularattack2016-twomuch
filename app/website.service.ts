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
  sites: Array<Website> = new Array;
  favorites: Array<Website> = new Array;
  index: number = 0;

  constructor() {
    this.ref  = new Firebase("https://flickering-fire-5244.firebaseio.com");
  }

  getIndex() {
    return this.index;
  }

  incrementIndex(){
    this.index++;
  }

  getCurrentSite() {
    return this.sites[this.index];
  }

  getWebsites() {
    let self = this;
    return this.ref.child("site").once("value")
      .then(function(resp){
        let obj = resp.val();
        for (var key in obj) {
          self.sites.push(obj[key]);
        }
        return self.sites;
      })
    };

  saveToFavorites(aSite: Website) {
    this.favorites.push(aSite);
  }

  getFavorites() {
    return this.favorites;
  }

  }
