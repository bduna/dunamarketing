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

There is no form. Every call to action is a text, a call, or an email:

- Text: `sms:+17073855673` with a prefilled first line ("Hi Barrett, I'd like to start a website. My business: ").
- Call: `tel:+17073855673`.
- Email: `mailto:barrett@dunamarketing.com` with a prefilled subject and first line.

The hero has one white "See my website" button that scrolls to the "see it before you pay" section. The contact section
also has copy buttons for the number and the email. To change the number or address, search the page for
`7073855673` and `barrett@dunamarketing.com`.

## The logo animation

The mark beside the "No risk" text is an inline SVG rebuilt from the logo's geometry (a hexagon of diagonal stripes,
with the mirrored family only in the upper-right face). Once the section scrolls into view the stripes slide into place and the
wordmark follows, then everything stays put. Visitors who prefer reduced motion see it already in place.
The generator script is `build_mark.py` in the session notes; the geometry constants are the stripe pitch (16.15),
thickness (7) and slope (0.68) measured from `assets/img/mark.png`.

## The sample cards

The ten cards in the Samples section move the way the hero wall does. Each card rises into place once, the moment its
top edge comes on screen. After that one card at a time travels slowly down its own page and back: with a mouse, the
card you point at or reach with the Tab key; on a touch screen, the card resting nearest the middle once scrolling
stops, for one trip. The tall captures are the ones the wall already downloaded (`assets/img/samples/<name>-640.webp`
or `-960.webp`, the same size the wall picked), so a trip costs no new download, and the top of each one matches the
card's first-screen image, so the swap cannot be seen. A tap or click still opens the sample straight away.

The cards are hidden for their arrival only after the script has set everything up, so with JavaScript off, with
reduced motion, or if the script fails, they are simply there.

The numbers to tune are named constants at the top of the "sample cards" block in the first script:

- `STEP` (90): ms between one card's rise and the next when they come on screen together. The rise itself is the
  `card-rise` keyframe in the CSS: 1.1 s, up 18px, on `--ease-out`.
- `BEAT` (400): ms a card is pointed at before it moves, so a sweep across the grid sets nothing off.
- `DOWN` (6000) and `HOLD` (1000): ms to travel to the bottom of the page, and to hold there. The trip back, and the
  hold at the top, take the same. While the pointer stays, it repeats.
- `HOME` (700): ms to ease back to the top when the pointer leaves. The next card waits for this to finish, so only
  one capture is ever moving.
- `REST` (500): touch screens only, ms scrolling must rest before a card takes its turn. To turn the touch-screen
  trips off and keep only the arrival, delete the `else` branch that starts "No pointer to follow".

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
