# Duna Marketing landing page

Two static pages, no build step: `index.html` (the landing page) and `privacy.html`.
Assets live in `assets/img/`. The ten sample screenshots are in `assets/img/samples/` in two sizes; the page picks
the size for the screen.

## Where it runs

Preview: a separate GitHub Pages repo, `bduna/duna-landing`, at https://bduna.github.io/duna-landing/.
Nothing here touches the live site until you copy the files into the `bduna/dunamarketing` repo.

To go live: copy `index.html`, `privacy.html`, `.nojekyll`, and everything under `assets/img/`
(mark.png, the icons, og.jpg, samples/) into the root of the `dunamarketing` repo and push. Keep that repo's
`CNAME` file and its `portfolio/` folder: the sample cards on the landing page link to
`dunamarketing.com/portfolio/<name>/`, so those pages must stay online.

## Getting in touch

There is no form. Every call to action is a text, a call, or an email:

- Text: `sms:+17073855673` with a prefilled first line ("Hi Barrett, I'd like to start a website. My business: ").
- Call: `tel:+17073855673`.
- Email: `mailto:barrett@dunamarketing.com` with a prefilled subject and first line.

The hero has one white "See my website" button that scrolls to the "see it before you pay" section. The contact section
also has copy buttons for the number and the email. To change the number or address, search the page for
`7073855673` and `barrett@dunamarketing.com`.

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
