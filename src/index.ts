import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the Aiphi extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'Aiphi:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension Aiphi is activated!');
    const style = 'Aiphi/index.css';

    manager.register({
      name: 'Aiphi',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
