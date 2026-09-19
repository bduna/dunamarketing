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

## Getting in touch

The contact section at the end (`<section id="start">`, headed "Contact") offers email only, as of 2026-09-18:
`mailto:barrett@dunamarketing.com` with a prefilled subject and first line, plus a copy-the-email button on computers.
The text and call tiles that used to sit beside it are gone, and the footer no longer shows the phone number. The
questionnaire (see "The questionnaire (test)" below) is the way the page invites people to start; it sends nothing
yet, and says so.

The hero has two buttons: a white "Start questionnaire" pill with the arrow disc that scrolls to the questionnaire (the
primary action, first), and a quieter "Learn more" pill, dark translucent with a white border, that scrolls to the
"see it before you pay" section. To change the address, search the page for `barrett@dunamarketing.com`.

## Our founder

`<section id="founder">`, between How it works and the Care Plan: the headshot (`assets/img/barrett-duna-720.webp`, with a
360px copy for phones; the original is `public/headshot.png` in the project folder, 1024px) beside a bio. The bio's
facts come from barrettduna.com (UCLA Mathematics and Economics 2013, the Stanford algorithms course, the ticket-market
simulation at UCLA Anderson, the Live Nation analyst work, Jim Stein's testimonial) plus two Barrett gave directly:
16 years of web design and development, and a decade of studying marketing. It is a navy band (Barrett's call over
white), so the white-background headshot sits as a card with the sample cards' border and shadow.

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
  answers live in memory and are gone on reload.
- The questions are data, the `steps` list in that block. Each step has what we say (it can use earlier answers), which
  input takes the reply, and `take()`, which accepts the reply or asks again in the thread. Adding the real
  questionnaire means adding steps.
- A strip right above the input shows a 20-minute clock and a discount. The clock starts on the visitor's first
  keystroke (never on its own), stops when the questionnaire is finished, and stays at 00:00 if time runs out; the chat
  keeps working either way. It counts from a fixed deadline, so a phone that puts the page to sleep gains no time. The
  discount starts at $0.00 and follows Barrett's points rule, which the copy under "Earn big discounts on your website"
  states: yes/no and choice questions earn 15 points, open-ended ones 50 plus 5 per word in the answer, each contact
  detail 10, and every full 125 points takes a dollar off (`PER_DOLLAR`). `earn()` in the questionnaire block holds the rule; each step
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

The timings are custom properties on `.steps`:

- `--rise` (1.1s): a card's rise, the page's usual rise (18px up, fading in) on `--ease-out`.
- `--line` (.45s): the line drawing from one disc to the next. It sets off so that it arrives as the next card starts.
- `--fill` (.35s): a disc filling in. The number turns white half way through, once the circle is under it.
- `--beat` (.7s): card to card. Card 2 starts one beat after card 1, card 3 one beat after that, so the whole thing is
  over in about 2.5 s.
- `--lag` (.15s): a disc fills this long after its card starts to rise.

## The sample cards

The ten cards in the Samples section move the way the hero wall does, and what they do depends on whether there is
a pointer.

With a mouse, each card rises into place once, the moment its top edge comes on screen. After that the card you point
at, or reach with the Tab key, travels slowly down its own page and back, one card at a time.

On a touch screen there is nothing to point with, and cards that kept moving proved too much on a phone, so each card
gets one entrance and then stays still. It starts in the wall's own pose, lying back on that tilted, turned plane, and
settles upright into its place, the left card of a row and then the right. As it lands, its page glides from part-way
down up to its first screen, the way a flicked page comes to rest at the top. It plays once per card; scrolling back
replays nothing. The entrance waits until a card is a little way up the screen (8% of its height) so it is not wasted
under the thumb, and a card whose capture is not decoded in time simply lands without the glide.

The tall captures are the ones the wall already downloaded (`assets/img/samples/<name>-640.webp` or `-960.webp`, the
same size the wall picked), so none of this costs a new download, and the top of each one matches the card's
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

## Tracking

The Meta pixel is on both pages. `PageView` fires on load. A tap on any text, call, or email link fires the standard
`Contact` event with `content_name` set to `text`, `call`, or `email`. Use `Contact` as the conversion in Ads Manager.
Add `?metrics=off` to the address once on a browser you use for testing and that browser stops sending events.

## Checks that were run

- Screenshots at 390, 768 and 1440 wide for every page, plus the phone hero in segments.
- The rendered contrast gate from the generator (`render_check.py`) passes with motion frozen. With the wall moving,
  that tool compares two frames taken at different moments, so its numbers for the hero are not meaningful.
- A frame-by-frame check of the hero text over 12 seconds of wall motion, sampling the pixels behind the headline,
  subline and button with the glyphs hidden.

## Changing a sample

Each sample has three images: the two tall wall textures in `assets/img/samples/` (`<name>-960.webp` at 960x2400 and
`<name>-640.webp` at 640x1600) and the first-screen card in `assets/img/desktop/` (`<name>.webp` at 960x600, a 1440x900 desktop capture with the
sticky bottom bar hidden, then scaled down). The Keyway Locksmith screenshot still says "colour" and should be regenerated.
