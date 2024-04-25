import { connect } from "react-redux";
import { Loading } from "common-components/src/control-components";

export function SpinnerWidget({ spinnerOn }: { spinnerOn: boolean }) {
  if (!spinnerOn) {
    return <div />;
  }
  return (
    <div className="fixed bottom-0 top-0 left-0 right-0 z-[1000] flex items-center justify-center bg-[#ffffff6b]">
      <Loading size="lg" color="primary" className="!w-[60px]" />
    </div>
  );
}
const mapStateToProps = (store: any) => {
  return {
    spinnerOn: store.general.spinnerOn.length > 0,
    spinnerOptions: store.general.spinnerOptions,
  };
};

export default connect(mapStateToProps)(SpinnerWidget);
