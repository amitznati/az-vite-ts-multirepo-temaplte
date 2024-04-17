import {SelectAccountPropsType} from "../../SelectAccount.types";
import {ControlComponents} from 'digital-common-components';

const {Button} = ControlComponents;

export default function SelectAccountMainView(props: SelectAccountPropsType) {

  console.log({props});
  return (
    <div >
      select account main view
      <div className="bg-amber-200 p-[60px]">
        <Button color="primary">Common component Button</Button>
      </div>
    </div>
  );
}
