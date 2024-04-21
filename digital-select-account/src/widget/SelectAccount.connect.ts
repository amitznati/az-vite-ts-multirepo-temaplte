import { connect } from "react-redux";
import SelectAccountComponent from "./SelectAccount.component";

const getInstance = window.amdocs['digital-sdk'].getInstance;

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
