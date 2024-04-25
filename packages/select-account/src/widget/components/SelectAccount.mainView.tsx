import {SelectAccountPropsType} from "../../SelectAccount.types";
import {useState} from "react";
import {ControlComponents, BusinessComponents} from 'common-components/src';

const {Button, Dropdown, TextInput} = ControlComponents;
const {PageContainer} = BusinessComponents;

const options = ['BAN', 'SIM', 'Mobile Number'];

export default function SelectAccountMainView(props: SelectAccountPropsType) {
  console.log({props});

  const [selectedType, setSelectedType] = useState('BAN');

  return (
    <PageContainer className="select-account-page">
      <div className="select-account">
        <div className="select-account-form">
          <div className="text-neo text-xxl text-bold">Select account</div>
          <div className="text-small">Enter customer BAN, SIM, or mobile number</div>
          <div className="select-account-form-inputs">
            <Dropdown
              label="Type"
              options={options}
              selected={selectedType}
              onChange={setSelectedType}
              boxProps={{className: 'select-account-form-inputs-dropdown'}}
            />
            <TextInput className="select-account-form-inputs-text" label={`Search ${selectedType}`} />
            <Button variant="contained" color="primary">Find</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
