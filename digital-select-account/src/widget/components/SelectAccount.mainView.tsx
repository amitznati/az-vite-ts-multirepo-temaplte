import {SelectAccountPropsType} from "../../SelectAccount.types";
import {ControlComponents, BusinessComponents} from 'digital-common-components';
import {useState} from "react";

const {Button, Dropdown, TextInput} = ControlComponents;
const {PageContainer} = BusinessComponents;


const typeOptions = [
  {value: 'BAN', label: 'BAN'},
  {value: 'SIM', label: 'SIM'},
  {value: 'MOBILE_NUMBER', label: 'Mobile number'},
];
const typeCodeToText: Record<string, string> = {
  BAN: 'BAN',
  SIM: 'SIM',
  MOBILE_NUMBER: 'Mobile number',
};

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
              options={typeOptions}
              value={selectedType}
              onChange={setSelectedType}
              boxProps={{className: 'select-account-form-inputs-dropdown'}}
            />
            <TextInput className="select-account-form-inputs-text" label={`Search ${typeCodeToText[selectedType]}`} />
            <Button sx={{minWidth: '110px'}} variant="contained" color="primary">Find</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
