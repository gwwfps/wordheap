import { element } from 'deku';

import Button from './Button.jsx';

const completeItem = (d, id) => e => d({ type: 'COMPLETE_ITEM', id });

export default {
  render({ props, dispatch }) {
    const { item } = props;
    return (
      <tr>
        <td>{item.word}</td>
        <td><Button onClick={completeItem(dispatch, item.$loki)}>Complete</Button></td>
      </tr>
    );
  }
}
