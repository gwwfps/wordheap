const mappers = {
  items(action, dv) {
    switch (action.type) {
      case 'ADD_ITEM':
        return { type: 'insert', payload: action.item };
      default:
        return {};
    }
  }
};

export default mappers;
