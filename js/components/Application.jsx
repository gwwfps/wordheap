import { element } from 'deku';

import Form from './Form.jsx';

const addItem = d => item => d({ type: 'ADD_ITEM', item });
const completeItem = (d, id) => e => d({ type: 'COMPLETE_ITEM', id });

export default {
  render({ dispatch, context }) {
    const items = context.dv('items').data();
    return (
      <div>
        <ul>
          {items.map(item => <li style={item.status === 'COMPLETED' ? 'text-decoration: line-through' : ''} onClick={completeItem(dispatch, item.$loki)}>{item.title}</li>)}
        </ul>
        <Form onSubmit={addItem(dispatch)}>
          <input name="title" />
          <button>Add</button>
        </Form>
      </div>
    );
  }
}
