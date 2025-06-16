declare module "slip39" {
  interface Slip39Options {
    iterationExponent?: number;
    extendableBackupFlag?: number;
    identifier?: string;
    groupCount?: number;
    groupThreshold?: number;
  }

  interface Slip39FromArrayOptions {
    passphrase?: string;
    threshold?: number;
    groups?: [number, number, string?][];
    iterationExponent?: number;
    extendableBackupFlag?: number;
    title?: string;
  }

  class Slip39Node {
    index: number;
    description: string;
    mnemonic: string;
    children: Slip39Node[];
    mnemonics: string[];

    constructor(
      index?: number,
      description?: string,
      mnemonic?: string,
      children?: Slip39Node[]
    );
  }

  class Slip39 {
    iterationExponent: number;
    extendableBackupFlag: number;
    identifier: string;
    groupCount: number;
    groupThreshold: number;
    root: Slip39Node;

    constructor(options?: Slip39Options);

    static fromArray(
      masterSecret: Uint8Array,
      options?: Slip39FromArrayOptions
    ): Slip39;

    static recoverSecret(mnemonics: string[], passphrase?: string): Uint8Array;
    static validateMnemonic(mnemonic: string): boolean;
    static getThresholdsForMnemonic(mnemonic: string): {
      groupThreshold: number;
      groupCount: number;
    };

    fromPath(path: string): Slip39Node;
    validatePath(path: string): void;
    parseChildren(path: string): number[];
  }

  export = Slip39;
}
