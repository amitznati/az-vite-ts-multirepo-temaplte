import { Component } from "react";
import SelectAccountMainView from "./components/SelectAccount.mainView";
import { mapComponentProps } from "./SelectAccount.propsMappar";
export default class SelectAccountComponent extends Component {
  render() {
    return <SelectAccountMainView {...mapComponentProps(this.props)} />;
  }
}
