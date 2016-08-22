import { element } from 'deku';

import Button from './Button.jsx';

export default {
  render({ props }) {
    return (
      <div class="form-actions">
        <Button type="submit" type="primary" block={true}>Submit</Button>
      </div>
    );
  }
}
