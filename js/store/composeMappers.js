export function composeMappers(mappers) {
  return (action, dv) => {
    const { name } = dv;
    const mapper = mappers[name];
    if (mapper) {
      let txs = mapper(action, dv);
      if (!Array.isArray(txs)) {
        txs = [txs];
      }
      if (txs.length && !Array.isArray(txs[0])) {
        txs = [txs];
      }
      return txs;
    }
    return [];
  };
}
