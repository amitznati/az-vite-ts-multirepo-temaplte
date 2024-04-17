import { connect } from "react-redux";
import { getInstance } from "digital-sdk";
import SelectAccountComponent from "./SelectAccount.component";

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
