# 0012. Lining figures where numbers need to line up

- Status: Accepted
- Date: 2026-11-04
- Deciders: Jonas Höchst

## Context

Alegreya Sans and Alegreya ([ADR-0011](0011-text-typefaces-alegreya.md)) use old-style figures by default: digits rise above and drop below the line, like lowercase letters. In running text this fits well. In tables, prices and data, numbers of uneven height and width are hard to compare. Both fonts also include lining figures (`lnum`) and tabular figures (`tnum`).

## Decision

- Running text keeps the default old-style figures.
- Where many numbers appear, use lining, tabular figures: tables, data and measurements, prices, dates and times in lists, axis labels and other figure text.

```css
font-variant-numeric: lining-nums tabular-nums;
```

## Consequences

- Columns of numbers line up, and digits are easy to compare.
- Consumers set this on tables and data components; the default for body text stays unchanged.
- Old-style and lining figures can appear on the same page; that is intended.
