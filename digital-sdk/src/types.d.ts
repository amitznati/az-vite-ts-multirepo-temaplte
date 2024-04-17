import {SelectAccountApiType} from "./modules/select-account";

export type serviceRequestOptionsType = {
  ignoreSpinner?: boolean;
  feedbackOptions?: {
    successCode?: string;
    successValues?: any;
    errorCode?: string;
    errorValues?: any;
  };
};

export interface IBaseApi {
  store: any;
  APIsInstances: ApisType;
  dispatchStoreAction: (type: string, payload: any) => void;
  startSpinner: (spinnerId: string, options: any) => void;
  stopSpinner: (spinnerId: string, options: any) => void;
  serviceRequest: (
    serviceMethod: any,
    payload: any,
    actionType?: string,
    getSuccessPayload?: (res: any) => any,
    getErrorPayload?: (err: any) => any,
    options?: serviceRequestOptionsType
  ) => Promise<any>;
}

export interface WidgetType {
  config: {
    persist?: object;
    sliceName: string;
    apiName: string;
  };
  reducer: any;
  api?: any;
}

export interface ApisType {
  FeedbackHandlerApi: any;
  SelectAccountApi: SelectAccountApiType;
}
declare global {
  interface Window { azAPIs: ApisType; }
}