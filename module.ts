import { InvalidStateError } from '@cardano-sdk/util';

export const main = () => setInterval(() => console.log(new InvalidStateError("test")), 1000);
