/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';

const CLOUDFLARE_ENDPOINT = 'https://goerli.prylabs.net';
const MAIN_ENDPOINT =
  "https://polygon-mumbai.infura.io/v3/853c7c382bc74e69ac0540c9792ceec4";
const ALTERNATE_ENDPOINT = 'https://rpc.slock.it/goerli';
const UNSECURE_ENDPOINT = 'http://goerli.blockscout.com';

export function createProvider() {  
  return new ethers.providers.JsonRpcProvider(MAIN_ENDPOINT);
}