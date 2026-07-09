/**
 * qstash-sdk · sovereign wrapper for QStash
 * Queue
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://upstash.com/docs/qstash/api/messages/create
 * Homepage: https://upstash.com/docs/qstash
 */

export class Qstash {
  constructor({ apiKey, baseURL = 'https://upstash.com/docs/qstash', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://upstash.com/docs/qstash/api/messages/create. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('qstash ' + res.status);
    return res.json();
  }
}

export default Qstash;

// Metadata
export const meta = {
  "name": "QStash",
  "category": "Queue",
  "homepage": "https://upstash.com/docs/qstash",
  "docs_url": "https://upstash.com/docs/qstash/api/messages/create",
  "endpoints_count": 0
};
