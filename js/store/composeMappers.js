export function composeMappers(mappers) {
  return (action, dv) => {
    const { name } = dv;
    const mapper = mappers[name];
    if (mapper) {
      let txs = mapper(action, dv);
      if (!Array.isArray(txs)) {
        txs = [txs];
      }
      return txs.map(tx => Array.isArray(tx) ? tx : [tx]);
    }
    return [];
  };
}
