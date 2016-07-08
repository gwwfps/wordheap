export function createManager(db, mapper) {
  const listeners = [];

  const subscribe = listener => {
    listeners.push(listener);
  };

  const stepIsInsert = step => step.type === 'insert';

  const applyTx = (collection, tx) => {
    if (tx.length === 0) {
      return;
    }

    if (tx.some(stepIsInsert)) {
      if (!tx.every(stepIsInsert)) {
        throw new Exception('Cannot mix insert with other step types in a transform.');
      }
      tx.forEach(insert => collection.insert(insert.payload));
    } else {
      collection.chain(tx).data();
    }
  };

  const getCleanDV = collection => {
    const view = collection.getDynamicView(collection.name);
    view.removeFilters();
    return view;
  };

  const dispatch = action => {
    const changedCollectionNames = [];

    db.collections.forEach(collection => {
      const dv = getCleanDV(collection);
      const txs = mapper(action, dv);
      txs.forEach(applyTx.bind(null, collection));

      if (txs.length > 0) {
        changedCollectionNames.push(name);
      }
    });

    listeners.forEach(listener => {
      listener(changedCollectionNames);
    });
  };

  const dv = name => getCleanDV(db.getCollection(name));

  return {
    subscribe,
    dispatch,
    dv
  };
};

