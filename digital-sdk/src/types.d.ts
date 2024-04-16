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
}
declare global {
  interface Window { azAPIs: ApisType; }
}