import { element } from 'deku';

import WordTableRow from './WordTableRow.jsx';

export default {
  render({ context }) {
    const items = context.dv('items').data();
    return (
      <table>
        <thead>
          <th>Word</th>
          <th></th>
        </thead>
        <tbody>
          {items.map(item => <WordTableRow item={item} />)}
        </tbody>
      </table>
    );
  }
}
