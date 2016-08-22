import { element } from 'deku';

export default {
  render({ props, children }) {
    const { type, block, onClick } = props;
    const classes = ['btn', `btn-${type || 'default'}`];
    if (block) {
      classes.push('btn-block');
    }
    return (
      <button type={type || 'button'} class={classes.join(' ')} onClick={onClick}>{children}</button>
    );
  }
}
