# Voice (Sprachstil)

How trackIT Systems writes, in German and English. Applies to the website, product texts, datasheets, newsletters and emails.

Status: **draft**. Only the decisions below are settled. The rest gets derived from real examples in [examples/voice/](examples/voice/) and discussed before it becomes a rule.

## Settled

### Address / Anrede

- Default register is neutral and academic: we describe systems, methods and results, mostly without addressing the reader.
- When we address the reader directly, German uses **Sie**. English uses "you".
- Record: [ADR-0004](docs/adr/0004-address-and-gender.md).

### Gender-inclusive language / Gendern

- German: neutral wording where it is common ("Forschende", "Teilnehmende", "Fachleute"). Where no common neutral form exists, use the gender star ("Kund\*innen").
- English: neutral by default ("they", "researchers").
- Record: [ADR-0004](docs/adr/0004-address-and-gender.md).

### Languages

- German and English are both first-class. Each text is written natively in its language, not translated word by word.

## Direction (to be confirmed)

The goal: texts that read like a field researcher explaining a system to a colleague. Concrete, checkable, calm.

Things that sound machine-written undermine that and make us look less serious. Candidates to make explicit, pending review against our own texts:

- Prefer concrete facts (numbers, species, frequencies, sites, durations) over adjectives.
- One claim per sentence.
- Headlines state what something is or does.
- Candidate word list for review, DE: *nahtlos, maßgeschneidert, ganzheitlich, revolutionär, Gamechanger, eintauchen, entfesseln, Mehrwert schaffen*. EN: *seamless, delve, leverage, robust, cutting-edge, unlock, empower, elevate, game-changer*.
- Candidate patterns for review: "nicht nur X, sondern auch Y" / "not just X, it's Y"; "In der heutigen schnelllebigen Welt"; reflexive groups of three; question headlines; chains of dashes; emoji bullets; closing summaries that repeat the section.

Once confirmed, these rules get generated into Vale styles so pull requests are checked automatically.

## How we derive the rest

1. Collect real texts in [examples/voice/](examples/voice/): our own (good and bad), and from organizations whose tone we want to be close to.
2. For each, note what works or fails, in one or two lines.
3. Derive rules from the patterns; each rule gets a before/after pair from a real text.
4. Settle disputed rules with an ADR.

TODO(brand owner): schedule the review session; decide who contributes examples.
