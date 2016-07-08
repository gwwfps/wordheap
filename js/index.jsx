import { createApp, element } from 'deku';
import { composeMappers, createDB, createManager } from './store/index';
import collections from './collections';
import mappers from './mappers/index';

var Application;

const importComponent = () => {
  Application = require('./components/Application.jsx').default;
};
importComponent();

const db = createDB(collections);
const mapper = composeMappers(mappers);
const manager = createManager(db, mapper);

const render = createApp(document.getElementById('mount'), manager.dispatch);

function update() {
  render(<Application />, { dv: manager.dv })
}

update();

manager.subscribe(update);

if (module.hot) {
  module.hot.accept('./components/Application.jsx', function() {
    importComponent();
    update();
  });
}
