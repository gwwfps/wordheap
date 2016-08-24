import { element } from 'deku';

import Form from './Form.jsx';
import FormSubmit from './FormSubmit.jsx';
import FormInput from './FormInput.jsx';

const addItem = d => item => d({ type: 'ADD_ITEM', item });

export default {
  render({ dispatch }) {
    return (
      <Form onSubmit={addItem(dispatch)}>
        <FormInput name="word" label="Word" required={true} />
        <FormInput name="meaning" label="Meaning" required={true} />
        <FormInput name="notes" label="Notes" />
        <FormSubmit />
      </Form>
    );
  }
}
