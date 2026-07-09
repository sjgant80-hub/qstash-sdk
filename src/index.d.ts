/**
 * qstash-sdk TypeScript declarations
 */
export interface QstashOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Qstash {
  constructor(options?: QstashOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Qstash;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
