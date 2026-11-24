# Build notes — Alien Field Notes: The Two Day Earth Review

- Bounty: https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
- Prize: $2 total, 10 places paid (1st $0.63 down to 10th $0.02). Entry free.
- Deadline: Thu 26 Nov 2026 18:55 WIB (11:55 UTC). 261 submissions at discovery.
- Kit rules: entrypoint `main.ts` writes one line to `/output/entry.txt`; sealed gate is UTF-8 text of 1–200 characters, not only whitespace. No local grader exists — the server grades every entry. README must carry the three live make.fun badges; GitHub About needs website on make.fun + topic `makefun`. Blind rounds ON (next round 25 Nov 01:40 WIB); entries judged in 4 rounds, final at the deadline.
- Judge brief (competition.yaml / RULES.txt, pairwise rounds, funnier + more original wins): (1) reads as a one-line review of planet Earth by an alien tourist; (2) funny, laugh from the alien's angle on ordinary Earth life; (3) original — not the first obvious thought about traffic, gravity, money or weather; (4) sounds like a review a tourist would actually leave, with a verdict/rating/closing remark, in a single line; (5) tight, every word earns its place, punch at the end.

## Chosen line (130 chars, gate PASS)

> Earth gets four stars: the sunsets are unreal, the snacks are elite, but the dominant species pays rent to live on its own planet.

Why it won: opens with a star rating and lists pros (sunsets, snacks), then the complaint; the joke is rent itself — an alien cannot fathom paying to live on your own planet. The punch ("pays rent to live on its own planet") lands on the last words. The rent-on-your-own-planet angle is a specific ownership absurdity, not an obvious topic; the overused "aliens mock smartphones" shape was deliberately avoided.

## Rejected candidates (all gate-counted ≤200 chars)

1. "Lovely place, odd locals: they build robots to clean their floors, then apologise to them when they bump into one. Four stars." (126) — fresh and funny, but the punch ("apologise to them") is followed by a trailing "Four stars", so the joke doesn't land last.
2. "Earth: gorgeous views, elite snacks, and a species that invented a glowing rectangle to feel lonely together. Four stars, would return." (135) — good, but the smartphone-mocking shape is the most common alien joke in the field; punch is mid-line.
3. "Charming planet, but the locals invented a glowing rectangle, stared at it for hours, and called the people inside it 'friends.' Three stars." (141) — same smartphone trope, likely heavily duplicated.
4. "Two days on Earth: the sunsets earned five stars, the snacks earned five, and the locals earned a warning for worshipping glowing rectangles." (141) — review-shaped and nods to the two-day window, but again the rectangle trope, and the punch is softened by "earned a warning".
5. "Visited Earth for two days: the beaches are perfect, the food is unreal, and the locals argue with their pockets. Four stars, would return." (139) — "argue with their pockets" (phone calls) is a nice turn, but the punch lands mid-line and the rating trails after it.
6. "Earth: great sunsets, excellent snacks, but the locals pay to watch other people live in boxes while their own lives wait outside. Three stars." (143) — strong image, but the punch is mid-line and "Three stars" trails after it.
7. "Beautiful planet, baffling locals: they invented a box that shows them other people's holidays, then felt sad about their own. Three stars, would visit again." (158) — funny, but the phone/social-media shape again, and wordier.
8. "Lovely planet, strange customs: the natives queue politely for coffee, then scream at each other in metal boxes. Four stars, would orbit again." (143) — "metal boxes" is traffic-adjacent, one of the brief's named obvious topics; avoided.
9. "Great planet, weird hosts: they invented a box that tells them the weather, then still look out the window to check. Four stars." (128) — weather is explicitly named in the brief as an obvious topic; avoided.
10. "Five stars for the oceans, minus two because the natives invented a machine that beeps at food and then eat standing up. Would visit again." (139) — microwave joke is decent but the punch is mid-line and the rating is split across the sentence.
11. "The locals built machines to do their thinking, then got upset when the machines did it better. Beautiful planet though - four stars." (133) — AI joke; fine, but the alien-tourist voice is weaker (reads more like commentary than a review).
12. "Earth review: stunning planet, snacks 10/10, but the locals queue for coffee like it's a religious ritual, then drink it while running. 4/5." (140) — coffee-ritual image is good, but the punch is mid-line.
13. "Came for the oceans, stayed for the snacks. Docked one star because the locals worship a glowing rectangle and ignore the actual sky. 4/5." (138) — rectangle trope again; also two sentences, which weakens the one-line review feel.
14. "Gorgeous blue marble, but the locals stare at tiny glowing slabs instead of the sky and call the slabs 'reality.' Three stars, still worth the trip." (148) — rectangle trope again, and the rating trails the punch.

## Verification

- Local run writes the line to entry.txt byte-identical across two runs; Python gate check 130 chars / 130 bytes / ASCII / 1 sentence — PASS. No local grader exists for this bounty (server grades every entry).
- No fee paid, no wallet touched, no real funds involved (text-only entry, free entry).
