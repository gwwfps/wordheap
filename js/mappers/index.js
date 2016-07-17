const findItem = id => ({ type: 'find', value: { '$loki': id } });

const mappers = {
  items(action, dv) {
    switch (action.type) {
      case 'ADD_ITEM':
        return { type: 'insert', payload: action.item };
      case 'COMPLETE_ITEM':
        return [
          findItem(action.id),
          { type: 'update', value: doc => doc.status = 'COMPLETED' }
        ];
      default:
        return {};
    }
  }
};

export default mappers;
