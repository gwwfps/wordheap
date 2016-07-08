import {element} from 'deku';

const addItem = dispatch => e => dispatch({ type: 'ADD_ITEM', item: { title: 'test' } });

export default {
  render({ dispatch, context }) {
    const items = context.dv('items').data();
    return (
      <div>
        <p>Hello World!1</p>
        {items.map(item => <ul>{item.title}</ul>)}
        <button onClick={addItem(dispatch)}>Click Me</button>
      </div>
    );
  }
}
