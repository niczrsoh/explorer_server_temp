// block.interface.ts

export interface IBlock {
  number: number;
  hash: string;
  parentHash: string;
  nonce?: number;
  sha3Uncles: string;
  transactions: string[];
  miner: string;
  difficulty: number;
  totalDifficulty: number;
  size: number;
  extraData: string;
  gasLimit: number;
  gasUsed: number;
  timestamp: Date;
  // ... any other properties you want to include
}