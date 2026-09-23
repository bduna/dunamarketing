# Duna Marketing landing page

Two static pages, no build step: `index.html` (the landing page) and `privacy.html`.
Assets live in `assets/img/`. The ten sample screenshots are in `assets/img/samples/` in two sizes; the page picks
the size for the screen.

## Where it runs

Live: this repo, `bduna/dunamarketing`, is served by GitHub Pages at https://dunamarketing.com/ from the root of `main`.
Every push to `main` is live in about three minutes. There is no separate preview: the old preview repo,
`bduna/duna-landing`, was retired and archived on 2026-09-17, and this repo is the only home of the page.

Keep the `CNAME` file and the `portfolio/` folder: the sample cards on the landing page link to
`dunamarketing.com/portfolio/<name>/`, so those pages must stay online.

The favicon is the Duna mark, no background (Barrett's choice, 2026-09-15). Since 2026-09-22 ("I don't see a
favicon, use my logo"; the icon files had 404'd during that morning's outage, see "The repo stays public" below):
`assets/img/favicon.svg` draws the mark exactly as the No risk section's `<svg class="mark-anim">` does (the same
clip polygons and 16 stripes), black stripes, white in a dark browser theme; `/favicon.ico` (16, 32 and 48px, the
mark with its white gaps, from `icon-180.png`) is for browsers without SVG icons and for anything that asks for
`/favicon.ico`; `icon-180.png` is the apple-touch icon. All six Duna pages (index, privacy, 404, thanks, form, full)
carry the same three links. At 16 px on a standard-resolution screen the eleven stripes blend into a grey hexagon;
high-resolution screens show them.

The repo stays public: on GitHub's free plan a private repo can't serve Pages. On 2026-09-22 it was switched to
private (not from this repo's working sessions), GitHub turned Pages off and every URL answered "Site not found";
it was made public again and Pages re-enabled from `main`, the `CNAME` file restoring the domain.

## Getting in touch

The contact section at the end (`<section id="start">`, headed "Contact") offered email only from 2026-09-18:
`mailto:barrett@dunamarketing.com` with a prefilled subject and first line, plus a copy-the-email button on computers.
The text and call tiles that used to sit beside it went then, and the footer no longer shows the phone number. Texting
and calling came back on 2026-09-21 as the contact pills (below): in the hero, under the pricing, and in this section
under its intro, with the email card beside them. Its heading and intro still speak of email only. The
questionnaire (see "The questionnaire (test)" below) is the way the page invites people to start; it sends nothing
yet, and says so.

The hero's buttons differ by device (all on 2026-09-22, at Barrett's asking). On phones and tablets they come in rows
(`.actions` is a column): Text us + Call us first, then "Start the questionnaire" on its own row below them ("make
"Start the questionnaire" below the contact buttons"; `order: 1`, since it is first in the page), the rows lined up at
both ends ("on mobile could you stretch out "questionnaire" button to line up with the contact buttons"): the column is
as wide as its widest row and stretches the rest to it, so Start the questionnaire widens to span the pair, keeping its
words where they were and taking its disc to the end (`justify-content: space-between`); on a 320px phone, where Call
us drops under Text us, all three are one width. With a mouse it is one row, as it was before that day: Start the
questionnaire on the left and the number pill beside it at its own size, flush top and bottom ("make the contact
button regular size and bring the start the questionnaire button up to left only on desktop"; for an hour the number
had stretched to the questionnaire's width in a column). "Start the questionnaire"
(`.cta-go`, since 2026-09-21; it said "Get my free preview", Barrett's first
words for it, until he had every one of these buttons say "Start the questionnaire" the same day): the page's deep blue
pill (`.cta-deep`) with a down arrow in a white disc, linking to the questionnaire (`#questionnaire`). Every one of them
is that blue since 2026-09-22, "replace any non-blue style questionnaire buttons with the blue style questionnaire
buttons"; the hero's and the samples one were white pills until then (`.btn-white`, a rule now gone with them). All six change their words every 2.5 s,
"Start the questionnaire" and "Ready to get started?", the new words scrolling down from above as the old leave below in
0.28 s (Barrett's idea, 2026-09-22, after a heartbeat pulse there was tried and taken out; it turned over rather than
scrolled, held 3 s and read "Let's get started" for its first hour, and waited on the end of the spoken summary until he
said "make it start irrelevant of the audio player, disregard the audio"). The two lines sit stacked in one grid cell
(`.cta-flip`, `.cta-face-a` / `-b`, the class `.turned`), so the pill is always as wide as the longer of them and
nothing around it moves; the cell clips whatever is outside it; the link carries its own `aria-label`, so a screen
reader always hears "Start the questionnaire"; and with reduced motion the words never move. A script of its own, after
the voice's, keeps the time, starting 0.8 s in, while the hero is still settling (Barrett, 2026-09-22: "the animation
takes too long to start, have it just start"; it waited 1.6 s, and then 2.5 s more, at first), and moving every one of
them together, so two on screen at once never disagree. The hero's was the only one until Barrett said "edit all 'Start
the questionnaire' buttons to have this animation"; the words centre in the two pills that centre their contents
(`.samples-go`, `.step-go`), and in step 1's narrow card both lines wrap to the same two-line height, so nothing moves.
A button added to the page joins in by carrying the same two faces; the script takes every `.cta-go` that has them. Every button into the questionnaire points down
(Barrett, 2026-09-21: "make all the questionnaire button arrows point downward"; they pointed right at first), because
each one scrolls down the page to the questionnaire, the Contact one excepted: from there it scrolls up, and it keeps
the down arrow all the same. There are six, all "Start the questionnaire": here, under the ten
samples (`.samples-go`, the hero's button exactly, blue as well, centred under the grid with 44-64px above it, added 2026-09-21 at
Barrett's request, and since 2026-09-22 as much below it, the Samples band's bottom padding cut from the band's usual
56-120px at his asking: "reduce the marge under"), at the foot of How it works' step 1, and under the founder's headshot
(`.founder-go`, 2026-09-22: "add a blue questionnaire button in the Our Founder page just like the one in the How It
Works #1 button", then "can you put it under my headshot??"; step 1's deep blue, which the dark founder band has to
name again: since 2026-09-22 that is `.cta-deep`, a class any band can carry, rather than a rule per section). Two
more came the same day, "add the same type of button to the bottom of the care plan and contact buttons": at the foot
of the Care Plan's text (`.care-go`, 30px above it) and under the Contact section's pills (`.start-go`, 26px), both in
that same deep blue. The founder button sits in the photo column, which is why
`.founder-left` wraps the photo and it: `.founder-photo` narrows to 260px on phones and would squeeze the pill.
Stacked, under 860px, the whole photo column comes before the words, so on a phone the button is read before the
section's own heading. (A fourth, under the pricing, was removed on 2026-09-22:
"remove start the questionnaire in the pricing section".) At 340px wide or less their words drop
to 16px so they stay on one line. The contact pills are "Text us" (`sms:+17073855673`, prefilled "Hi Barrett, I'd like to start a website. My
business: ", the same first line the old text tile used) and "Call us" (`tel:+17073855673`): a dark fill with a white
edge and a white disc (`.cta-alt`), so the blue way in still reads first. Text us and Call us sit in `.reach` so they travel as a pair:
where a row runs out of room they wrap together, and below 400px wide the pills lose a little padding so the pair
still fits at 360. They are not in the hero on a phone: `.actions .reach` is hidden under the page's phone test, a
coarse pointer on a screen 760px or narrower or 500px or shorter, so the hero there carries the way into the
questionnaire alone (Barrett, 2026-09-23, "remove the contact buttons in the hero from mobile", after an earlier
removal and restoration the same day). Tablets keep them, and they stay under the pricing and in Contact everywhere. Taps on them fire the pixel's `Contact` event (see Tracking); the preview
button fires nothing.
A computer can't text or call, so with a mouse (`(hover: hover) and (pointer: fine)`, the page's usual split, not a
width) the two are replaced by one pill in the same style, `.cta-phone`: "Text or call" in small caps above
"(707) 385-5673" and the phone disc. A click copies the number and the small line reads "Copied" for 1.8 s. Copying
fires no pixel event. Barrett's call, 2026-09-21: "show the phone number on desktop instead".
There is no "Learn more" any more. It was the hero's one button (a white pill with a down arrow, jumping to the No
risk band) until the preview button arrived; it went from phones first ("on mobile only, remove the hero learn more
button") and then from every screen ("remove learn more from the hero section"), both on 2026-09-21. (The "Start
questionnaire" buttons in the hero and the No risk section were removed on 2026-09-19.) To change the
address, search the page for `barrett@dunamarketing.com`; to change the number, search for `17073855673`.

The same contact pills sit in two more places, each in a `.contact-pills` row that reuses the hero's markup and
classes, so the switch is the same everywhere: Text us and Call us on phones and tablets, the copy-the-number pill
with a mouse, and the same prefilled first line on the text link.
- Under the pricing (Barrett, 2026-09-21, "add text and call contact buttons under pricing"): at the end of
  `<section id="pricing">`, under "You see the finished website before you pay anything." On the white band they are
  solid navy (`.band-light .cta-alt`) rather than the hero's dark glass. The row is the contact pills alone since
  2026-09-22: a deep blue "Start the questionnaire" (`.band-light .cta-go`) led it from 2026-09-21 until Barrett had it
  removed ("remove start the questionnaire in the pricing section").
- In the Contact section (Barrett, 2026-09-21, "add the contact buttons to the contact section"): under the intro in
  the left column, the email card on the right (under the pills on phones). On that dark band they look as in the hero.

A link to `#before-you-pay` (Learn more was the only one on the page) lands on a screen of its own. The rule stays
for any old link to the band. The No risk band is about 600px tall against a 900px screen, so the Client
work headline below it used to arrive on the same screen and the two headlines competed (Barrett, 2026-09-20).
`#before-you-pay:target` gives the band `min-height: 100svh`, and `.offer-grid` already centres its content, so it
sits in the middle of the taller band. It is on `:target`, not on the band itself, so nothing moves for a visitor who
simply scrolls past; the band is its natural height again once another anchor is the target.

## The voice (three cards: the hero's summary, the founder's and the Care Plan's readings)

Three cards on the page play a recording and show its words as they are spoken. One maker in the voice script builds
them all, each given its own words, loudness, length and labels; a card's dock and the glow it gives Start the
questionnaire are the hero's alone.

- The founder's, `#founder-voice-row`, added 2026-09-22: "I have a word for word audio reading of the Our Founder
  section ... copy the exact audio player as is in the hero section and put it above the questionnaire button in the
  headshot column ... I want the text to say: 'Listen Instead of Read'". His recording is `founder-bio-tts.wav` in the
  project folder, 62 seconds, cut to `assets/audio/founder-bio.mp3` (64 kbps mono, 496 KB); its words are
  `founder-bio.phrases.json` beside it and its captions are made the same way as the hero's. It sat between his name and the way into the
  questionnaire until 2026-09-23, then moved under the headline and, minutes later, above it ("move the audio player
  above the headline"): it now sits between the section's eyebrow and its headline, as the Care Plan's does. Its captions were cut for the 380px photo column and are
  shorter than the text column needs. It has no dock and gives no glow, and its ring of bars waves once as the
  card comes into view rather than as the page loads.
- The Care Plan's, `#care-voice-row`, the same day ("I want the same thing as the bio reading but with
  care-plan-tts.wav in the CARE PLAN section on the right column under the phone"): 77 seconds, `care-plan-tts.wav` in
  the project folder, cut to `assets/audio/care-plan.mp3`, its words in `care-plan.phrases.json`. It sat under the
  phone in the right column for an hour, then under the headline, and on 2026-09-23 above it, between the section's
  eyebrow and its headline, where the founder's sits ("yes, move the care plan one above its headline too"). The text
  column gives it the hero's full 544px. Its captions were cut for that 312px column and are shorter
  than they need to be now. This reading retells the section rather than reading it word for word.


Barrett's recording, a 72-second spoken summary of the whole page meant as the first sales pitch
(`echo-page-summary-tts.wav` in the project folder, his third take, 2026-09-22, "replace the old one with it"; before
it `gpt-corrected-tts.wav`, 77 s, and first `chatgpt-duna-marketing-site-summary-tts.wav`; cut to
`assets/audio/duna-summary.mp3`, 64 kbps mono, 578 KB, 72.17 s, `preload="none"`, loaded as `?v=3` so a browser holding
an earlier take fetches this one), plays from the hero (2026-09-21, "get very creative ... something way cooler"). The
third take drops "It takes about 20 minutes"; otherwise it says what the second said. Its WAV header gives a bogus
length (a streamed file); the data is 72.1 s, and ffmpeg and the caption script read it right:

- A card between the subline and the buttons, `#voice-row` / `.voice`: a white play disc inside a ring of 28 bars and a
  progress ring, and "Duna Marketing Offer · 1:12" over "Everything on this page, in 72 seconds" (it read "Listen",
  then "Listen to the Summary", before Barrett settled on these words, all on 2026-09-22). The label keeps to one line with the "· 1:12" at every width from 360px:
  `.voice-text` is a container and the label's size is its usual one or, on a narrower phone, 7.2% of the text column
  (`7.2cqi`), down to 14.5px; on a 320px phone the "· 1:12" wraps whole to a second line. Once, as the hero settles, a wave
  runs round the bars to say there is something to press; then it holds still.
- Pressed: the bars move with the voice, the ring fills, and the card shows the words as they are spoken, a phrase at a
  time, each word lighting up on its second, the promises (24 hours, $1,500, No deposit, See it first, 16 years, own
  outright, $149 per month, start the questionnaire below, only pay after you've seen and approved) in the
  accent. The voice says "fifteen hundred dollars"; the caption reads "$1,500", lit from "fifteen" until "paid"
  (Barrett, 2026-09-22: "replace that with "$1,500""). The card keeps one height for every
  phrase (checked at 320-1440px), so nothing around it moves.
- Under the card, a progress line (`.voice-seek`, an `<input type="range">`; Barrett, 2026-09-22: "so it can be rewound,
  make it blue"): blue as far as the voice has got, a white handle ringed in blue, the time so far on its left and the
  whole on its right, on a dark pill. Drag it, tap it, or use its arrow keys (5 s a press, Page Up/Down 15 s, Home to
  the start), playing or paused; the ring, the caption and its lit words follow at once (one `paint(t)` draws them all).
  Moved before the first play, the voice starts from there. It resets to 0:00 at the end.
- The art behind takes no part in the voice. For a few minutes on 2026-09-21 the wall that stood there rippled with
  the voice's loudness; Barrett had that removed ("remove any interaction with the wall, keep everything else the
  same"), and the wall itself is gone since 2026-09-23 (see "The hero's art").
- At "start the questionnaire below" (54.92 s), the hero's Start the questionnaire glows once (`.nudge`). The words
  on that button change on their own clock, nothing to do with the summary any more (see "Getting in touch").
- Scrolled away while it plays ("Explore the work below", it says), a dock rises at the foot of the screen,
  `#voice-dock`, with the phrase, the pause and a close; it goes when the card is back in view or the voice ends.
- At the end the card rewinds and reads "Duna Marketing Offer" again. With reduced motion the captions and the ring still work; the
  bars and the wave round them don't move. Without JavaScript the card isn't there.
- Browsers refuse sound until the visitor presses something, so it never starts by itself.

The captions and the loudness are three lines of data in the voice script (`CUES`, `ENV`, `NUDGE`), made from the
recording by `hero_voice_captions.py` in the project folder (a local speech-to-text pass with word timings; the
transcript it used is `echo-page-summary-tts.words.json` beside the WAV). The words shown are the script's own
`PHRASES`, written as they should read; the recording gives only their timing, so a misheard word (the second take's
"fix" for "fits", put right by `CORRECTIONS`; this take needs none) never reaches the page. A new recording means
running it again, as its header says, updating `LENGTH`, the "1:12", "72 seconds" and "72-second" (label, seek line,
aria labels) if the length changes, and bumping the `?v=` on the audio. Tests:
`~/.cache/duna-site-tests/voice_layout_check.js` and `voice_play_check.js` (serve with `serve_range.js`, which can seek).

## Client work: Deep Roots Hydro

`<section id="client">`, a white band between No risk and Samples: the one real, live client website on the page, as
against the samples below it, which are demonstrations we built. Deep Roots Hydro is a hydroponics shop in Sebastopol,
CA, independent since 2006; the client is Dylan Marzullo, its owner (confirmed by Barrett
2026-09-19; the live site itself names nobody). The section is built to be checked rather than believed, so
it links deeproots707.com twice — the screenshot is a link and so is the button — and shows the real address inside
browser chrome with a Live pill.

The rule the copy follows is: never count. There is no "first client", no "only client", and no plural that isn't true.
Nothing here says how many clients there are, so nothing has to. What it says instead is specific and checkable on the
live site: five pages (home, shop, CO2 refills, about, visit), eleven departments, hours and address and phone on every
page, one tap to call, one tap for directions. Every one of those was verified against deeproots707.com on 2026-09-19.
If a fact there changes, change it here too.

There is no testimonial, deliberately: a quote has to come from Dylan before it can go in, and writing one for him is
not an option. When he gives one, it goes in the `.client-body` column under `.client-who`, in the founder quote's
style (`.founder-quote` is the model). It is the single biggest thing that would strengthen this section. Worth asking
him for his blessing on being named here at the same time.

The picture is the whole homepage, not its first screen: `assets/img/deep-roots-home-960.webp` (960x7757) and
`-640.webp` (640x5172), captured 2026-09-20 from a 1280-wide viewport, 1280x10343 in all. It travels up behind a window
the shape of a browser's, so a visitor sees the entire page without leaving this one: half a second held at the top,
forty seconds down at a reading pace, two at the footer, then 1.8s of eased rewind and six tenths held again — 44.9s a
cycle. The two holds at the top meet across the loop's seam, so what a viewer sees there is one pause of 1.1s (it was
2.2s until Barrett halved it on 2026-09-19; halve or double it there, in both keyframes, not in one). The long descent
is linear so it reads as scrolling; only the rewind is eased, which is what makes it read as a reset rather than as
part of the tour.

It loops on every screen, phones included, and pauses whenever it is scrolled away. The phone loop is deliberately
against the usual rule for touch — one entrance, then stillness, the way the sample cards and the example animation
behave — because Barrett asked for it on 2026-09-19, along with the descent at half its first speed (it was 20s).
With reduced motion, or without the script, it is the first screen of the page, still. The frame itself still rises
once when it comes on screen, and lifts on hover.

To recapture it: take a full-page shot of deeproots707.com at 1280 wide **with reduced motion emulated** — the site
reveals its sections on scroll, and a full-page shot otherwise catches the ones that were never scrolled to while they
are still invisible — walking the page first so the lazy images decode, then export 960 and 640 wide. If the page's
length changes, `--travel` on `.client-view` changes with it: it is -(1 - (1 / 1.6) / R) as a percentage, where R is
the capture's height over its width (8.1 today). `assets/img/deep-roots-desktop-*.webp`, the old first-screen stills,
are no longer used by anything.

At 1000px and wider the picture takes the right column across both rows and centres against it, so the detail can run
longer than the picture without leaving a well of white under it. Narrower, the order is heading, picture, then
detail: the proof arrives before the reading does.

The detail's first paragraph ("It's a walk-in shop…") sits centred between what is above it and the checklist below it
(Barrett, 2026-09-21): the space under it is the grid's row gap, `--rg` on `.client .wrap` (30px beside the picture,
34px stacked), the same space as above it, so the two stay equal if the gap changes.

## Our founder

`<section id="founder">`, between How it works and Animations: the headshot (`assets/img/barrett-duna-720.webp`, with a
360px copy for phones; the original is `public/headshot.png` in the project folder, 1024px) beside a bio. The bio's
facts come from barrettduna.com (UCLA Mathematics and Economics 2013, the Stanford algorithms course, the ticket-market
simulation at UCLA Anderson, the Live Nation analyst work, Jim Stein's testimonial) plus two Barrett gave directly:
16 years of web design and development, and a decade of studying marketing. It is a navy band (Barrett's call over
white), so the white-background headshot sits as a card with the sample cards' border and shadow.

## Animations

`<section id="animations">`, a white band between Our founder and The Care Plan, sells animations for a client's website
at $350 each ($100 until 2026-09-19, then $250 until 2026-09-21). It has no button (Barrett took it out). Its three
parts are the words (`.anim-copy`), the example animation (`.anim-media`) and the offer (`.anim-offer`): stacked, they
read in that order (Barrett, 2026-09-22: "the heading and text, the animation, the pricing"; the offer sat under the
words until then), and from 1000px they return to two columns, the words over the offer on the left and the example
beside them, laid out by grid rows rather than by nesting. The offer is a navy card: the price, then
four check items in the plan boxes' style ("Completely custom animation", "Designed by Duna Marketing for you",
"No animation too complex", "All animations mobile-friendly"), over a faint
isometric grid that echoes the example video's drawing. The card sells motion, so it moves once: when it comes on
screen it rises, the price rises, and each check disc fills and ticks in turn, about 1.9 seconds with a mouse and 1.7 times
slower on touch screens, then it holds still. The script adds `.ready` only when it runs and motion is welcome; with
reduced motion or without the script the card is simply there. Each item's place in that order is `--n` on its `:nth-child` rule, so a bullet added to the list needs one more.
Check: `~/.cache/duna-site-tests/anim_offer_shot.js`.

To the right (under the offer on phones) plays an example: `assets/video/security-animation.mp4`, cut from
`security_animation.mp4` in the project folder (2400x1800). Only the illustration is kept: the platform whose layers lift
to show the gears, the server stack, the charts. The crop covers the whole drawing, not just the pixels that move,
because the server stack is still and a tighter crop would cut its top off. The source's background is pure white like
the band, and the video's edges fade out so the drawing's grid runs into the page.

The dashboard's "A" card shows a bar chart instead (Barrett's call): four bars rising on an L-shaped axis, drawn flat in
the card's isometric plane. The bars are the pie chart's gray (110 of 255, Barrett's call, so they blend in); the axis is
the A's black. The card holds still except for two short dips, and the chart follows them frame by frame.
`security_animation_bar_chart.py` in the project folder does the crop and the chart in one pass. It needs ffmpeg, numpy,
scipy and Pillow; the chart's shapes are the `BARS` and `AXES` lists at its top, and their colors are `BAR_INK` and
`AXIS_INK`. To recut it, from the project folder:

    python3 security_animation_bar_chart.py security_animation.mp4 dunamarketing/assets/video/security-animation.mp4
    ffmpeg -i dunamarketing/assets/video/security-animation.mp4 -frames:v 1 -c:v libwebp -quality 82 dunamarketing/assets/video/security-animation-poster.webp

Then bump the `?v=` on the video's `src` and `poster` so browsers drop their cached copy.

It is 6 seconds, silent, and about 650 KB; the page asks only for its metadata until it comes into view. It loops while
in view and pauses when scrolled away, on a phone as on a computer (Barrett, 2026-09-22: "the animation in the animation
section isn't looping, but it is on desktop"; a touch screen played it once and rested on its last frame until then,
and `loop` was a hover-and-fine-pointer test). With reduced motion it never plays: it loads and shows the frame
2 seconds in, with the gears showing.

## The price lines under two headlines

Two sections show their price just below the headline and above the lede, in one format (`.price-line`): a label over
the price and its terms, the terms worded as the Pricing box words them. The label must not look like the sections'
eyebrows (Barrett, 2026-09-21), and the page is sans-serif only: an Instrument Serif italic tried for it the same day was
"ugly and doesn't match the website". So it is the page's Archivo, set apart by style: plain case, 16-18px, semibold
(650), where the eyebrows ("No risk", "The Care Plan") are spaced capitals in the accent (18-20px at weight 800 since 2026-09-21; 13px at 700 before). (The labels read "Care Plan" and "Your
website" in Archivo capitals, like an eyebrow, before that.) Colour, also Barrett's: the whole dollar amount, sign
included, is the eyebrow's accent blue, and the label and the terms are white. With the label and the price both white
under the white headline, the block had read as "a white wall of text".

- The Care Plan (`<section id="care-plan">`): "Care Plan Pricing" over "$149 a month". Added 2026-09-21 at Barrett's request,
  "a price box that displays the Care Plan for $149/mo". It was a dark card with an accent edge under "You could make
  these changes yourself…" at first; the same day he asked for it "more inline with the text", then said "it's
  perfect, it just needs moved, move it just below the headline".
- No risk (`<section id="before-you-pay">`): "Website Pricing" over "$1,500 one time", under "See your finished website
  before you pay a dime." Barrett, the same day: "use the exact same format as the price for the Care Plan". (He tried
  "one time upon approval" and took "upon approval" back out the same day.) On 2026-09-22 he found it "still seems too
  prominent, it dominates the section": at 32-40px the amount matched or outsized the headline (28px on a phone), so
  its amount is quieter, `clamp(1.4rem, .5vw + 1.2rem, 1.7rem)` (22-27px) at weight 700, a step above the lede and
  still blue, and the Care Plan's was made to match the same day ("yes make the care plan price match").

Both are part of the text column: no card, the label and the price starting at the text's own left edge, 22px above and
below (the headline's 18px bottom margin folds into the 22px), and the price well under the plan boxes' size:
22-27px since 2026-09-22 (above; it was `clamp(2rem, 1.5vw + 1.3rem, 2.5rem)`, 32-40px, before). The prices are typed in by hand, so a price change touches them too: the
website's $1,500 is in the Pricing box, the FAQ, the meta description, the JSON-LD and No risk; the Care Plan's $149 in
the Pricing box, the FAQ and the Care Plan section. The ROI calculator reads only the Pricing box's (`#pricing`).

## The pricing boxes

`<section id="pricing">`, headed "Five numbers. Nothing hidden." — the headline counts the boxes, so it changes when one
is added. Five `.plan` boxes on the white band, each a name, a price, a line of terms and a list of check items: Your
website ($1,500 one time), Care plan ($149 a month, `.featured`, the only one with a border and a Recommended tag),
Animations ($350 per animation), Micro-Apps ($500 per micro-app) and, since 2026-09-22, Audio players ($500 for the
first, $200 for each after; Barrett: "a new price box in Pricing for Audio Players ... and I support TTS"). Its items
say what the players on this page do: his voice or a text-to-speech read, the words appearing as they are spoken, play,
pause and a line to rewind, placed anywhere and styled to the website, never playing by itself, right on phones, and
re-recorded whenever he likes.

The order matters: the ROI calculator reads the website price from the first box that is not `.featured` and the plan
price from the featured one, so a new box goes after Your website, never before it. Under 1200px the boxes are a
two-column grid with the calculator below them; from 1200px `.plans` is `display: contents` and they share the page
grid, the calculator in the third column with the last box under it.

## The ROI calculator

In the Pricing section, to the right of the first two plan boxes at 1200px and wider, under them otherwise
(`<aside id="roi">`, inside `.pricing-grid`). A navy card with two sliders and two projections. It ships hidden and the
script shows it, so without JavaScript nobody sees dead sliders.

At 1200px and wider `.plans` is `display: contents`, so the four boxes and the calculator share one 3:3:4 grid: Your
website and Care plan in row one beside the calculator, which stretches to that row and so ends flush with them, and
Animations and Micro-apps in row two under them. Narrower, the boxes are a 2-up (then 1-up) grid with the calculator
underneath.

- Prices are read from the plan boxes (the website's `.price strong` and the featured Care Plan's — `querySelector`
  takes the first of each, so the Animations and Micro-apps boxes added later don't disturb it), falling back to
  $1,500 and $149, so changing a price there changes the calculator. First month = website + first Care Plan payment
  ($1,649); every month after = the Care Plan ($149).
- The card's eyebrow reads "ROI calculator (website and Care Plan)" (Barrett, 2026-09-22), since every figure in it
  counts the Care Plan: the first month is the website plus one month of it, every month after is it alone.
- Sliders step through fixed lists (`CUSTOMERS` and `REVENUE` in the script): customers 1-20, then 25, 30, 35, 40, 50,
  60, 75, 100; revenue per customer $10 to $5,000 in 29 steps. The pair opens on 5 customers at $500 (Barrett's call,
  2026-09-22, after $300 the same day; 7 at $250 before that, a default raised with each price rise so the first month
  opens on a gain, +$101 then, +$851 now).
- With R = customers x revenue per customer, each projection shows revenue (R), net gain or loss (R - fees), ROI
  (net / fees) and cost per customer (fees / customers). Below them: break even (customers needed, fees / revenue per
  customer, rounded up), payback (the first month in which total revenue covers the website plus the Care Plan so far;
  "doesn't cover the Care Plan yet" when R is $149 or less), and year one (12R against $1,500 + 12 x $149 = $3,288).
- It says "net", not "profit": revenue from those customers minus our fees, before the owner's own costs, as the fine
  print says. Losses show as losses, in a soft red.

## The questionnaire (test)

A message-and-reply questionnaire sits between pricing and the questions (`<section id="questionnaire">`).
We send a message, the visitor types a reply, and it moves to the next one: full name, phone, email, then a line about
the business, and a recap at the end. It is at https://dunamarketing.com/#questionnaire

- It has been public since 2026-09-17: every visitor sees it. It still sends nothing. The closing message says so ("That's
  the end of this test. Nothing was sent or saved."); it comes out when `onComplete` really sends the answers somewhere.
  The note above the panel said the same until 2026-09-18, when Barrett replaced it with a reminder that nobody pays
  unless they approve of the website.
- The section keeps the `hidden` attribute in the HTML and the script shows it, so with JavaScript off, or if the script
  fails, nobody is left looking at a panel that cannot answer. To hide it from visitors again, put the test back on
  the `const showQuestionnaire = ...` line (look for "THE SWITCH" in the first script):
  `/[?&]questionnaire=test\b/.test(location.search)`. Then it shows only at `?questionnaire=test`.
- It sends nothing and stores nothing: no request, no localStorage, sessionStorage or cookie, no pixel event. The
  answers live in memory and are gone on reload. The one thing that does leave the visitor's device is speech, if they
  use the microphone (below): the browser's own speech service transcribes it, Google's on Chrome and Edge, Apple's on
  Safari, after the browser asks their permission and while it shows its recording mark. The page never sees the audio.
- A microphone in the bar, `#q-mic` (Barrett, 2026-09-22: the boxes "don't support the microphone" — a computer's text
  box has no dictation of its own, and a phone's keyboard hides its mic key on the number pad). It is the browser's
  speech recognition (`SpeechRecognition` / `webkitSpeechRecognition`), so the button stays `hidden` where that is
  missing, Firefox above all, rather than sitting there dead. It is for phones and tablets only, the page's usual
  `(hover: hover) and (pointer: fine)` split, at Barrett's asking the same day ("only have the chat button available on
  mobile, not on desktop"): with a keyboard under the hands, typing is quicker. Tap it and it turns red and breathes; the words arrive in
  the live box as they are spoken, interim words replaced as the engine settles, and an `input` event is dispatched so
  the box grows, the send button wakes and the clock starts exactly as typing would. Tapping again, sending, or
  starting over stops it; so does the engine itself after a silence. Speaking while Duna is still typing its question
  is allowed, as typing has always been. A blocked or missing microphone says so in `#q-note` under the bar for seven
  seconds, and the visitor types instead. Like send, the button prevents the default on pointerdown so a phone keeps
  its keyboard and the field keeps focus. Test: `~/.cache/duna-site-tests/ask_mic_check.js`, which stands a fake engine
  in the browser's place; the real engines can only be tried by hand.
- The questions are data, the `steps` list in that block. Each step has what we say (it can use earlier answers), which
  input takes the reply, and `take()`, which accepts the reply or asks again in the thread. Adding the real
  questionnaire means adding steps.
- A strip right above the input shows a 20-minute clock and a discount. The clock starts on the visitor's first
  keystroke (never on its own), stops when the questionnaire is finished, and stays at 00:00 if time runs out; the chat
  keeps working either way. It counts from a fixed deadline, so a phone that puts the page to sleep gains no time. The
  discount starts at $0.00 and follows Barrett's points rule, which the copy under "Earn big discounts on your website"
  states: yes/no and choice questions earn 15 points, open-ended ones 50 plus 5 per word in the answer, each contact
  detail 10, and every 125 points is a dollar off (`PER_DOLLAR`); the discount shows cents (points ÷ 125, rounded
  down to the cent), so 130 points reads $1.04. `earn()` in the questionnaire block holds the rule; each step
  says which kind it is (`kind: 'choice'`, `'open'` or `'contact'`; name, phone and email are `contact`, the business
  question is `open`). The panel's header shows the total points so far in its top right corner, from 0 pts. Start
  over resets all three.
- `onComplete(answers)` is the one place a finished questionnaire is handed over. For now it says the test is over and
  shows the recap. When it is wired to the leads sheet, the existing rules apply: the two honeypots, the start and
  complete stages, the Lead pixel event only when the server answers `lead_ok`, and no Apps Script edits.
- Every reply field is a real input of its own (`#q-name`, `#q-tel`, `#q-email`, `#q-business`), so each question gets
  the right phone keyboard and the browser's autofill. Focus moves to the next one inside the visitor's own tap or key
  press, which is the only moment an iPhone allows it, so the keyboard stays up between questions. The input is never
  focused for the visitor. On a touch keyboard Enter makes a new line in the long answer and the button sends; with a
  mouse and keyboard Enter sends and Shift+Enter makes a new line.
- On a desktop the thread has a fixed height and scrolls inside itself. On a phone (up to 760px wide) it grows with the
  conversation and the page does the scrolling, because a thread that scrolls inside itself swallows the swipe and the
  page would not move with a finger on the panel; the script nudges the page to keep the input above the keyboard as
  the panel grows.

## The logo animation

The mark beside the "No risk" text is an inline SVG rebuilt from the logo's geometry (a hexagon of diagonal stripes,
with the mirrored family only in the upper-right face). Once the section scrolls into view the stripes slide into place and the
wordmark follows, then everything stays put. Visitors who prefer reduced motion see it already in place.
The generator script is `build_mark.py` in the session notes; the geometry constants are the stripe pitch (16.15),
thickness (7) and slope (0.68) measured from `assets/img/mark.png`.

## The How it works steps

The three step cards arrive in order, joined by a line, once: card 1 rises and its numbered disc fills, a thin line
draws from its disc to the next card's disc, that disc fills and its card rises, and on to the third. Then nothing
moves again. Everything starts when it is a little way up the screen (8% of it, the same rule the touch cards use).

In a row (wider than 760px) it is one chain from a single trigger, and the line runs at the discs' height, through the
gap and into the next card. Stacked (phones and narrow windows) the cards run to about 710px, so one trigger played
cards 2 and 3 below the fold, unseen; there each card goes on its own as it is scrolled to, the stroke in the gap above
it drawing down first, then the card rising and its disc filling. Cards that come into view together still take turns.
The script only marks the row ready and says go (per row, or per card); the sequence is CSS. Without the script the
cards are simply there, solid discs and no line, and under reduced motion the finished state shows at once.

Card 1 ends with a way into the questionnaire (Barrett, 2026-09-21: "add a link to the questionnaire in box #1 at the
bottom styled like the one in pricing"): the pill that was under the pricing (removed there 2026-09-22), deep blue, in `.step-go`, worded "Start the
questionnaire" (Barrett's words the same day; it said "Get my free preview" at first). The cards are flex columns, so the pill sits at the card's foot even when a row of three stretches the cards
to one height. It fits itself to the card, which `.step-go` measures as a container query (the wrapper, not the card:
a card that is a container becomes its own stacking context, and card 1's connector line, which runs into card 2 and
is lifted over its white by z-index, would vanish under it). The two widths are where "Start the questionnaire" stops
fitting on one line in the size before, so new words mean measuring again. The pill keeps its own size where it fits
(phones from about 390px wide, and the cards beside the demo at 1100px and wider). At 285px of card or less it is full
width at 16px, with the arrow disc. At 260px or less it loses the disc and its words centre: one line down to about
220px, and on the three-in-a-row cards on a tablet (about 160px) two lines, the one place the words wrap.

The timings are custom properties on `.steps`:

- `--rise` (1.1s): a card's rise, the page's usual rise (18px up, fading in) on `--ease-out`.
- `--line` (.45s): the line drawing from one disc to the next. It sets off so that it arrives as the next card starts.
- `--fill` (.35s): a disc filling in. The number turns white half way through, once the circle is under it.
- `--beat` (.7s): card to card. Card 2 starts one beat after card 1, card 3 one beat after that, so the whole thing is
  over in about 2.5 s.
- `--lag` (.15s): a disc fills this long after its card starts to rise.

## The How it works demo

Beside the three step cards (to their right at 1100px and wider, under them otherwise), a navy card labelled "Example"
shows the section's promise happening, in three acts that light up the matching card and fill a three-part marker:

1. Answer: the empty panel waits three quarters of a second (`WAIT`, 750 ms; Barrett asked for 1 second on
   2026-09-21, then 0.75 s the same day; on a loop the wait follows the panel's half-second fade back in). Then our question
   "What does your business do?" arrives, is left a beat to be read, and then a caterer's answer
   types out (15 words), with "3 photos attached" under it. (A "+125 pts" chip sat beside that until Barrett had it
   removed on 2026-09-21.)
   The question is part of the sequence, not of the resting state: until the box is scrolled to, the panel waits
   empty, so nobody meets a question that has already been asked (Barrett, 2026-09-20 — it used to be painted by
   `ready()`, which runs on load). On a phone this is the visible difference, because there the box sits below the
   three cards and is still off screen when the section's heading arrives; beside them on a wide screen it is already
   in view, and the question comes up as you reach the section.
2. Built within 24 hours: a browser at dunamarketing.com/preview renders the Long Table Catering sample's first screen
   (`assets/img/desktop/long-table-catering.webp`, already loaded by the Samples cards), "Built in under 24 hours", and
   the headline is outlined: "Written from your answers".
3. Approve, and it goes live: "Your preview is ready", a pointer taps Approve, and the address becomes
   yourbusiness.com with a lock and a Live pill.

It loops while on screen (the finished website holds 4 s, then it fades and starts again) and stops off screen, on
every screen. Phones and tablets loop too since 2026-09-21, when Barrett asked for it ("make mobile loop"), against the
page's usual rule of one entrance then stillness on touch; before that a touch screen played it once and rested on the
live website. To go back, `const loop` in its script block is the switch. With reduced motion, or without JavaScript, it
is the still finished picture. The timings are constants in its script block: `ACTS` (4400 at least, 4800, 3600 ms) and `HOLD`
(4000 ms), stretched by `PACE` (1.8). The answer types at a person's speed, which `PACE` leaves alone: `keys()`
gives a steady rhythm (61-80 ms a key), with a breath after each comma and
before "cooked", and act 1 lasts as long as the typing needs plus `READ` (1.8 s). `TYPE` (0.62) sets that speed: it
scales every key and every breath alike, 1 being 86 words a minute (10.3 s of typing), lower is faster. Barrett has
asked for "a little faster" twice: 1 to 0.78 on 2026-09-21 (8.2 s), 0.78 to 0.62 on 2026-09-23 (6.5 s, about 140 words
a minute). The reply bubble holds its final size
from the start (the untyped words are there, transparent, in `.hd-rest`), so nothing grows, wraps or moves while it
types; the caret takes no width of its own. One cycle is about 29 s, then a 7 s hold. The picture is aria-hidden; a visually hidden sentence describes it.

At 1100px and wider the cards stack in the left column, so their own arrival sequence draws its connector vertically
and plays card by card as they are scrolled to, the way it does on phones.

## The sample cards

The ten cards in the Samples section lie back on a tilted, turned plane, the pose the hero's old wall used, and what they do depends on whether there is
a pointer.

With a mouse, each card rises into place once, the moment its top edge comes on screen. After that the card you point
at, or reach with the Tab key, travels slowly down its own page and back, one card at a time.

On a touch screen there is nothing to point with, and cards that kept moving proved too much on a phone, so each card
gets one entrance and then stays still. It starts lying back on that tilted, turned plane, and
settles upright into its place, the left card of a row and then the right. As it lands, its page glides from part-way
down up to its first screen, the way a flicked page comes to rest at the top. It plays once per card; scrolling back
replays nothing. The entrance waits until a card is a little way up the screen (8% of its height) so it is not wasted
under the thumb, and a card whose capture is not decoded in time simply lands without the glide.

The tall captures are `assets/img/samples/<name>-640.webp` or `-960.webp`, the bigger one only where the screen earns
it (the hero's old wall downloaded these for its own use; now the cards are the only ones who ask), and the top of each one matches the card's
first-screen image, so the swap cannot be seen. A tap or click still opens the sample straight away.

The cards are hidden for their arrival only after the script has set everything up, so with JavaScript off, with
reduced motion, or if the script fails, they are simply there.

The numbers to tune are named constants at the top of the "sample cards" block in the first script:

- `STEP` (90): ms between one card's rise and the next when they come on screen together. The rise itself is the
  `card-rise` keyframe in the CSS: 1.1 s, up 18px, on `--ease-out`.
- `BEAT` (400): ms a card is pointed at before it moves, so a sweep across the grid sets nothing off.
- `DOWN` (6000) and `HOLD` (1000): ms to travel to the bottom of the page, and to hold there. The trip back, and the
  hold at the top, take the same. While the pointer stays, it repeats.
- `HOME` (700): ms to ease back to the top when the pointer leaves. The next card waits for this to finish, so with
  a mouse only one capture is ever moving.
- `DEAL` (340): touch screens only, ms between one card landing and the next in its row. The landing itself is the
  `card-land` keyframe in the CSS: 3 s on `--ease-out`, from tilted back 14 degrees, turned 3 degrees, 22px low and
  barely larger. It was quicker and steeper at first; Barrett asked for calmer three times, so the pose is now slight.
- `DEEP` (`translateY(-12%)`): touch screens only, how far down its page a card is showing as it starts to land, about
  half a screen.
- `LEAD` (600) and `GLIDE` (3600): touch screens only, ms after a card starts to land that its page sets off for the
  top, and how long the glide takes. To drop the glide and keep only the landing, delete the `glide = ...` assignment
  in the `else` branch that starts "No pointer to follow".

## The hero's art

Behind the hero's words, `.hero-art`: eight fields of saturated colour drifting across the black, blended with
`mix-blend-mode: screen` so where they cross they brighten rather than muddy, with the isometric grid of the Animations
card faint over the top. Blue, violet, magenta, cyan, sky, pink and a warm orange, each a radial gradient in a circle
32-52 vmax across, each floating on its own clock between 36 and 50 s and starting part way in, so they never repeat
together, and spread over the whole frame rather than gathered to one side. Colour only: no images, no canvas, nothing
to download, and the compositor does the moving.

Where the words, the audio card and the buttons sit, the colour is soft and out of focus; everywhere else it is crisp
("distribute it across the full screen more blurred where design elements are", 2026-09-23). Two layers with opposite
masks do that: `.hero-sharp` holds the drifting fields and is masked away from the content, `.hero-soft` is the same
palette spread wide and thin and masked to it. A `backdrop-filter: blur(46px)` did the job first and was taken out: over
colour that never stops moving the browser redraws that blur every frame, and it cost a third of the frame rate on a
phone (33 frames a second against 44 without it, measured in software rendering) for no visible gain.

Barrett, 2026-09-23: "I need something that will provide lots of color, the text is white with a black background, and
one blue button, I need vibrant colors." Two hero backgrounds came before it that day. First a WebGL2 wall of the ten
sample websites drifting on a tilted plane (a canvas, a shader, ten textures, about 340 lines of script and a no-WebGL
fallback); then, when he asked for something on-brand that worked better with the words, the Duna mark drawing itself
in blue line work over the same grid, which he turned down as too monochrome. Both are in git, the mark at 6e9c1c9.

- `.veil` is the wash that keeps the words easy over all that colour: on a phone a top-down and corner wash, and from
  1000px a left-to-right one that holds the left half and lets the colour run free on the right, with light shading top
  and bottom.
- With reduced motion the colours hold still, and the grid with them.

### The chessboard

Over the colour, `#hero-board`: a board of light lines tilted back in perspective (`rotateX(54deg) rotateZ(-16deg)`),
king, queen and two pawns a side standing upright on it, playing a game in which white always mates. Barrett,
2026-09-23: "a light grid structure with a maximum (whatever chess legally requires move-wise) of 4 chess pieces per
side and they play each other where white always wins but the gameplay changes each time. It's a mini-game, 2 pawns and
two behind." It replaced a galaxy overture that was to burst into the colour, built that afternoon and never shipped.

- The games are real chess. `hero_chess_games.py` in the project folder plays them out with the `chess` library from a
  fixed start (white Ke1 Qd1 d2 e2, black Ke8 Qd8 d7 e7, a full board so every move is legal): white searches three
  plies ahead and prefers mates, black looks one ply ahead with enough noise to blunder now and then. Only games that
  end in checkmate for white within twelve moves are kept, and only one per opening (the first two moves each side), so
  no two games on the page start alike. `hero_chess_check.py` replays the embedded games and proves each one legal,
  each capture and promotion as recorded, and each ending in mate for white; run it after regenerating.
- `GAMES` in the board's script is what the generator printed: each game a list of plies `[from, to, square a capture
  empties or "", promotion or ""]`. En passant empties a square other than the one moved to, which is why the emptied
  square is spelled out.
- The player picks a game at random, never the one just played, moves about once a second (a 0.6 s glide, a 0.5 s
  breath), fades a captured piece as its taker sets off, turns a promoted pawn into a queen on arrival, lights the from
  and to squares, and at the mate lays the blue king over and says "Checkmate. White wins." under the board. After
  2.8 s the pieces walk back to their squares and another game begins. It rests while the hero is off screen.
- The pieces are pictures, `assets/img/chess/{w,b}-{k,q,p}.png` (six sprites, 176x352, 18-40 KB each, transparent),
  made by `hero_chess_pieces.js` in the project folder: `node hero_chess_pieces.js`, plain Node, no packages. Each
  piece is a solid turned on a lathe, a smooth curve through control points for its radius at every height (Staunton
  proportions: the king 1, the queen .93, the pawn .66), plus the king's cross and the queen's eight-pointed crown. A
  small ray marcher lights it with a key light, a fill and a rim, takes occlusion and self-shadow from the shape itself,
  and reflects a studio in it (a soft sky, a dark floor and one big softbox, the rectangle of light real photographs of
  glossy things carry). White is satin ivory with a faint grain; the other side is deep blue under a clear coat, and is
  blue rather than black because a dark piece vanishes on a dark board (Barrett, 2026-09-23: "make the chess pieces
  photo-realistic", then "and more photo-realist"; flat silhouettes came first, that afternoon). The sprite leans 9
  degrees toward the camera so its top shows. On the board each piece stands straight to the eye: its transform,
  `rotateZ(16deg) rotateX(-54deg)`, undoes the board's turn and tip exactly ("make the pieces look more upright"), with
  a pool of shadow flat under its foot and the board's perspective still shrinking the far ones. Change a profile or a
  material in the script and re-run it.
- Under the board, `.board-caption`: "Strategic web design by Duna Marketing that brings in clients", Barrett's words
  (2026-09-23), in the eyebrows' spaced capitals, 16px on a computer and 13.5px on a phone ("make the text bigger"; it
  began at 12.5 and 11). A no-break space holds "Duna Marketing" together, so the name never splits across lines. The
  checkmate note keeps its own line above it, so nothing jumps when it appears.
- Where it sits: from 1000px, beside the words on the right, `min(40vw, 66vh)` wide. Below that it hangs from the foot
  of the hero (`bottom: 1svh`), and its script sizes it to the room under the buttons so the board and its line are on
  the first screen (Barrett, 2026-09-23: "the caption runs below the fold on mobile"). `fit()` in the board's script
  sets `--board-w`: it starts at 70vw, measures where the board's highest point lands (the tilted board or the far
  pieces' heads, whichever is higher) against the buttons' layout position, and corrects the width until that point is
  8px under the buttons, down to a floor of 30vw. Only a screen too short even for that gets a taller hero, by way of
  `--board-room` on `.hero .copy` (its padding-bottom on phones): the first pass adds the shortfall plus the slack under
  the copy, the second lands it within a pixel. It re-runs at load, when the fonts land, when the width changes (not
  the height: a phone's browser bars come and go, and the hero is `100svh` regardless) and, through a ResizeObserver
  on the copy's children, when the voice card's script shows its row further down the page. The checkmate note pulls
  itself 13% of the width up into the square box's dead space under the tilted board and holds a line of height when
  empty. Measured in headless Chromium: the board is the full 70vw from 390x844 up, 53-55vw at 360x740 and 430x745,
  30-32vw on a 664px-tall screen (an iPhone in Safari with its bars showing), and the caption ends 4-14px above the
  screen's foot on all of those; 320x568, 360x640 and 375x667 cannot hold the copy and a board on one screen, so the
  hero grows by 20-90px there and the board sits under the buttons.
- With reduced motion the pieces stand at their start squares and nothing plays.

## Tracking

The Meta pixel is on both pages. `PageView` fires on load. A tap on any text, call, or email link fires the standard
`Contact` event with `content_name` set to `text`, `call`, or `email`. Use `Contact` as the conversion in Ads Manager.
Add `?metrics=off` to the address once on a browser you use for testing and that browser stops sending events.

## Checks that were run

- Screenshots at 390, 768 and 1440 wide for every page, plus the phone hero in segments.
- The rendered contrast gate from the generator (`render_check.py`) passes with motion frozen. The hero's art moves,
  so that tool's numbers for the hero are not meaningful; the strips behind its words are measured instead (see "The
  hero's art").

## Changing a sample

Each sample has three images: the two tall captures in `assets/img/samples/` (`<name>-960.webp` at 960x2400 and
`<name>-640.webp` at 640x1600) and the first-screen card in `assets/img/desktop/` (`<name>.webp` at 960x600, a 1440x900 desktop capture, then scaled
down; the ten samples no longer carry the sticky bottom bar, so there is nothing to hide). The Keyway Locksmith screenshot still says "colour" and should be regenerated.
