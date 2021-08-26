declare interface Options {
  family: string;
  tags: string[];
}

declare interface CeramicBundle {
  initializeClient: () => any;
  authenticateEthAddress: (client: any, address: string) => void;
  readDocument: (client: any, options?: Options) => any;
  writeDocument: (client: any, value: any, options?: Options) => void;
  clearDocument: (client: any, options?: Options) => void;
}

declare const Ceramic: CeramicBundle;
