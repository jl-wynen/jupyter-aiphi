import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the aiphitheme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'aiphitheme:plugin',
  description: 'The Aiphi Jupyter theme.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension aiphitheme is activated!');
    const style = 'aiphitheme/index.css';

    manager.register({
      name: 'Aiphi',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
