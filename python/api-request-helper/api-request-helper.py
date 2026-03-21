from __future__ import annotations

import time
from typing import Any, Dict, Optional

import requests
from requests import Response
from requests.exceptions import RequestException, Timeout

RETRYABLE_STATUS_CODES = {429, 500, 502, 503, 504}


def request_with_retry(
    method: str,
    url: str,
    *,
    headers: Optional[Dict[str, str]] = None,
    params: Optional[Dict[str, Any]] = None,
    json: Optional[Dict[str, Any]] = None,
    data: Optional[Dict[str, Any]] = None,
    timeout: int = 10,
    max_retries: int = 3,
    backoff_seconds: float = 0.5,
) -> Response:
    """Send an HTTP request with timeout and exponential backoff retries."""
    attempt = 0

    while True:
        try:
            response = requests.request(
                method=method,
                url=url,
                headers=headers,
                params=params,
                json=json,
                data=data,
                timeout=timeout,
            )

            if response.status_code in RETRYABLE_STATUS_CODES and attempt < max_retries:
                delay = backoff_seconds * (2**attempt)
                time.sleep(delay)
                attempt += 1
                continue

            response.raise_for_status()
            return response
        except (Timeout, RequestException):
            if attempt >= max_retries:
                raise

            delay = backoff_seconds * (2**attempt)
            time.sleep(delay)
            attempt += 1


def get_json(url: str, *, timeout: int = 10, max_retries: int = 3) -> Dict[str, Any]:
    """Convenience helper for GET requests that return JSON."""
    response = request_with_retry(
        "GET",
        url,
        timeout=timeout,
        max_retries=max_retries,
    )
    return response.json()


if __name__ == "__main__":
    # Example request to a public placeholder API.
    endpoint = "https://jsonplaceholder.typicode.com/todos/1"

    try:
        payload = get_json(endpoint)
        print("Request succeeded:")
        print(payload)
    except RequestException as exc:
        print(f"Request failed after retries: {exc}")
