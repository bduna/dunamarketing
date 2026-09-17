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

There is no form that visitors can see. (A questionnaire is being tested behind a link only we use; see "The
questionnaire (test)" below. It sends nothing.) Every call to action is a text, a call, or an email:

- Text: `sms:+17073855673` with a prefilled first line ("Hi Barrett, I'd like to start a website. My business: ").
- Call: `tel:+17073855673`.
- Email: `mailto:barrett@dunamarketing.com` with a prefilled subject and first line.

The hero has one white "See my website" button that scrolls to the "see it before you pay" section. The contact section
also has copy buttons for the number and the email. To change the number or address, search the page for
`7073855673` and `barrett@dunamarketing.com`.

## The questionnaire (test)

A message-and-reply questionnaire sits between the questions and the contact section (`<section id="questionnaire">`).
We send a message, the visitor types a reply, and it moves to the next one: full name, phone, email, then a line about
the business, and a recap at the end. Test it at https://dunamarketing.com/?questionnaire=test#questionnaire

- It is hidden from visitors. The section ships with the `hidden` attribute and nothing links to it; the script shows
  it only when the address has `?questionnaire=test`. Someone who finished it would believe they had signed up, and
  nothing would reach us, so it stays that way until it really sends. To make it public: delete `hidden` on the section
  and replace the test on the `const showQuestionnaire = ...` line with `true` (look for "THE SWITCH" in the first script).
- It sends nothing and stores nothing: no request, no localStorage, sessionStorage or cookie, no pixel event. The
  answers live in memory and are gone on reload.
- The questions are data, the `steps` list in that block. Each step has what we say (it can use earlier answers), which
  input takes the reply, and `take()`, which accepts the reply or asks again in the thread. Adding the real
  questionnaire means adding steps.
- `onComplete(answers)` is the one place a finished questionnaire is handed over. For now it says the test is over and
  shows the recap. When it is wired to the leads sheet, the existing rules apply: the two honeypots, the start and
  complete stages, the Lead pixel event only when the server answers `lead_ok`, and no Apps Script edits.
- Every reply field is a real input of its own (`#q-name`, `#q-tel`, `#q-email`, `#q-business`), so each question gets
  the right phone keyboard and the browser's autofill. Focus moves to the next one inside the visitor's own tap or key
  press, which is the only moment an iPhone allows it, so the keyboard stays up between questions. The input is never
  focused for the visitor. On a touch keyboard Enter makes a new line in the long answer and the button sends; with a
  mouse and keyboard Enter sends and Shift+Enter makes a new line.

## The logo animation

The mark beside the "No risk" text is an inline SVG rebuilt from the logo's geometry (a hexagon of diagonal stripes,
with the mirrored family only in the upper-right face). Once the section scrolls into view the stripes slide into place and the
wordmark follows, then everything stays put. Visitors who prefer reduced motion see it already in place.
The generator script is `build_mark.py` in the session notes; the geometry constants are the stripe pitch (16.15),
thickness (7) and slope (0.68) measured from `assets/img/mark.png`.

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
- `DEAL` (140): touch screens only, ms between one card landing and the next in its row. The landing itself is the
  `card-land` keyframe in the CSS: 1.3 s on `--ease-out`, from tilted back 42 degrees, turned 10 degrees, 48px low and
  slightly large.
- `DEEP` (`translateY(-34%)`): touch screens only, how far down its page a card is showing as it starts to land, about
  a screen and a third.
- `LEAD` (250) and `GLIDE` (1900): touch screens only, ms after a card starts to land that its page sets off for the
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
