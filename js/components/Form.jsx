import { element } from 'deku';
import serializeForm from 'form-serialize';

function wrapSubmit(onSubmit) {
  return e => {
    e.preventDefault();
    const data = serializeForm(e.target, { hash: true });
    return onSubmit(data, e);
  };
}

export default {
  render({ children, props }) {
    return (
      <form onSubmit={wrapSubmit(props.onSubmit)}>{children}</form>
    );
  }
}
