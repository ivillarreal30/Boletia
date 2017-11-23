export class LocalStorageWorker {
  localStorageSupported: boolean;

  constructor() {
    this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
  }

  // add value to storage
  add(key: string, item: Object) {
    if (this.localStorageSupported) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }


  // get one item by key from storage
  get(key: string): any {
    if (this.localStorageSupported) {
      var item = localStorage.getItem(key);
      return JSON.parse(item);
    } else {
      return null;
    }
  }

  // remove value from storage
  remove(key: string) {
    if (this.localStorageSupported) {
      localStorage.removeItem(key);
    }
  }

  // clear storage (remove all items from it)
  clear() {
    if (this.localStorageSupported) {
      localStorage.clear();
    }
  }
}