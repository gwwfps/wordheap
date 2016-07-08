import loki from 'lokijs';

export function createDB(collections) {
  const db = new loki('app');
  Object.keys(collections).forEach(name => {
    const collection = db.addCollection(name, collections[name]);
    collection.addDynamicView(name);
  });
  return db;
}
