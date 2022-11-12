class ConnectionFactory {

  constructor() {
     

    throw new error ('Não é possível criar instâncias de ConectionFactory')
  }

  static getConnection() {

    return Promise ((resolve, reject) => {

      let openRequest = window.indexedDB.open('aluraframe', 4);

      openRequest.onupgradeneeded = e => {

      };
      openRequest.onsuccess = e => {

      };
      openRequest.onerror = e => {
        
      }

    });
  }
}
