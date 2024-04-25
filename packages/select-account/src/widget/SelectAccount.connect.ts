import { connect } from "react-redux";
import SelectAccountComponent from "./SelectAccount.component";
import {getInstance} from 'sdk/src';

const selectAccountApi = getInstance().SelectAccountApi;

const mapStateToProps = () => {
  return {
    data: selectAccountApi.getDataSelector(),
  };
};

const mapDispatchToProps = () => ({
  updateData: selectAccountApi.updateData,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectAccountComponent);
