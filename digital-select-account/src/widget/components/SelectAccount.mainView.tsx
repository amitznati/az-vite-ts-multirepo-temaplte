import {SelectAccountPropsType} from "../../SelectAccount.types";
import {ControlComponents} from 'digital-common-components';

const {Button, PageContainer} = ControlComponents;

export default function SelectAccountMainView(props: SelectAccountPropsType) {

  console.log({props});
  return (
    <PageContainer className="select-account-page">
      <div className="select-account">
        <div className="select-account-form">
          <div className="text-neo text-xxl text-bold">Select account</div>
          <div className="text-small">Enter customer BAN, SIM, or mobile number</div>
          <div className="select-account-form-inputs">
            <div>dd1</div>
            <div>dd2</div>
            <Button variant="contained" color="primary">Find</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
