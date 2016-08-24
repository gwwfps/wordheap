import { element } from 'deku';

import Button from './Button.jsx';

const completeItem = (d, id) => e => d({ type: 'COMPLETE_ITEM', id });

export default {
  render({ props, dispatch }) {
    const { item } = props;
    return (
      <tr>
        <td>{item.word}</td>
        <td>{item.meaning}</td>
        <td>{item.notes || ''}</td>
        <td><a href={`http://www.collinsdictionary.com/dictionary/french-english/${item.word}`} target="_blank">Link</a></td>
        <td><Button onClick={completeItem(dispatch, item.$loki)}>Complete</Button></td>
      </tr>
    );
  }
}
