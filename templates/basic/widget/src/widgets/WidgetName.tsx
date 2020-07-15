import esri = __esri;

import { aliasOf, property, subclass } from 'esri/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import <%name%>ViewModel from './<%name%>/<%name%>ViewModel';

export interface <%name%>Properties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget <%name-lower%>-base',
};

@subclass('app.widgets.<%name%>')
export default class <%name%> extends Widget {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;

  @aliasOf('viewModel.name')
  @renderable()
  name = '';

  @property({
    type: <%name%>ViewModel,
  })
  @renderable()
  viewModel: <%name%>ViewModel = new <%name%>ViewModel();

  constructor(properties?: <%name%>Properties) {
    super(properties);
  }

  render() {
    return (
      <div class={CSS.base}>
        <p>Welcome {this.name}!</p>
      </div>
    );
  }
}
