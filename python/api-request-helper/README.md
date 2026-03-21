# API Request Helper (Python)

Reusable HTTP helper with timeout and retry support using exponential backoff.

## Files

- `api-request-helper.py`

## Behavior

- Sends HTTP requests with a default timeout.
- Retries transient failures (network errors, timeout, and selected status codes).
- Uses exponential backoff between retries.
- Raises on final failure so calling code can handle it clearly.
- Includes a convenience `get_json` helper for JSON APIs.

## Usage

1. Install dependency:

```bash
pip install requests
```

2. Run the example:

```bash
python api-request-helper.py
```

3. Reuse in your project:

```python
# Copy the helper functions into your module, then call them:
response = request_with_retry("POST", "https://api.example.com/items", json={"name": "Demo"})
payload = get_json("https://api.example.com/health")
```

## Notes

- Retries target transient status codes: `429`, `500`, `502`, `503`, `504`.
- Increase `max_retries` for unstable upstream services.
- Tune `timeout` and `backoff_seconds` for your workload.
