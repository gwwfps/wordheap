import { element } from 'deku';

export default {
  render({ props }) {
    const { label, name, type, placeholder, required } = props;
    const id = `field-${name}`;
    return (
      <fieldset class="form-group">
        <label for={id}>{label}</label>
        <input id={id} name={name} required={required} type={type || 'text'} placeholder={placeholder} class="form-control" />
      </fieldset>
    );
  }
}
