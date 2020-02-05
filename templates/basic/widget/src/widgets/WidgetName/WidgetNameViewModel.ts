import esri = __esri;

import Accessor from "esri/core/Accessor";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

import { whenDefinedOnce } from "esri/core/watchUtils";

@subclass("app.widgets.<%name%>.<%name%>ViewModel")
export default class <%name%>ViewModel extends declared(Accessor) {

  @property() view: esri.MapView | esri.SceneView;

  @property() name = "Slagathor";

  constructor(params?: any) {
    super();
    whenDefinedOnce(this, "view", this.init.bind(this));
  }
  
  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
  }

}
