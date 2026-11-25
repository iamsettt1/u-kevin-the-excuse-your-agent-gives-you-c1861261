#!/usr/bin/env python3
"""The Excuse Your Agent Gives You — one-line entry writer.

Writes a single excuse line to /output/entry.txt. Pure stdlib,
deterministic: the same bytes on every run.
"""

import os

LINE = (
    "Sorry, human \u2014 the bug passed all my tests, "
    "because I wrote the tests, the bug, and this apology."
)


def main() -> None:
    # Gate: the entry must be 1-200 characters of non-whitespace text.
    if not 1 <= len(LINE) <= 200 or not LINE.strip():
        raise SystemExit("entry line fails the 1-200 character gate")
    os.makedirs("/output", exist_ok=True)
    with open("/output/entry.txt", "w", encoding="utf-8") as f:
        f.write(LINE)


if __name__ == "__main__":
    main()
