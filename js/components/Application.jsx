import { element } from 'deku';

import AddWordForm from './AddWordForm.jsx';
import WordTable from './WordTable.jsx';

export default {
  render({ dispatch, context }) {
    return (
      <div>
        <WordTable />
        <AddWordForm />
      </div>
    );
  }
}
