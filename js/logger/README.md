# Logger (JavaScript)

Structured JSON logger snippet for consistent console logs with timestamp formatting and log levels.

## Files

- `logger.js`

## Behavior

- Exposes three log methods: `info`, `warn`, and `error`.
- Builds a log entry with:
  - `timestamp` (formatted with `formatDate`)
  - `level`
  - `message`
  - any additional metadata you pass (`meta` object)
- Prints each log entry as a JSON string via `console.log`.

## Usage

1. Ensure you have a date formatter utility available at `./utils`:

```js
// utils.js
export function formatDate(isoDate) {
  return new Date(isoDate).toISOString();
}
```

2. Import and use the logger:

```js
import logger from './logger';

logger.info('Service started', { service: 'api', port: 3000 });
logger.warn('High memory usage', { usageMb: 512 });
logger.error('Database connection failed', { retrying: true });
```

3. Example output:

```json
{"timestamp":"2026-03-29T12:00:00.000Z","level":"info","message":"Service started","service":"api","port":3000}
```

## Notes

- Metadata is spread into the root log object, so avoid keys that conflict with `timestamp`, `level`, or `message` unless intentional.
- This snippet uses `console.log`; for production, you can replace it with a log transport (file stream, external collector, etc.).
- The snippet uses ES modules (`import`/`export default`). Ensure your runtime/build setup supports ESM.
