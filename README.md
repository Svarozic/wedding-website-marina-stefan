# Wedding Website - Marina & Stefan

- **email:** marinaystefan0911@gmail.com
- **location:** https://www.instagram.com/vila_jugovo_s/
- [VercelApp: wedding-website-marina-stefan](https://vercel.com/svarozics-projects/wedding-website-marina-stefan)
- [Текст за веб страницу](https://docs.google.com/document/d/1uIygM2bqCekvzS63Dw2fz9sVsuTuegbokgIY0fqWiKY/edit?tab=t.r8gml6axpu3e)
- [Текст за позивницу](https://docs.google.com/document/d/1xiFIkUnXWtfhqpasaTw6ertfrJmpW4gReoNbLyBijv8/edit?tab=t.0)

## TODOs 📓 for Stefan

- TODO: once Website is done, search for `Lorem ipsum` and finish translation/text

## TODOs 📓 for me

- SVARGA: add `404.html` and `500.html` and "stain png" to cover UI
- SVARGA: remove `itinerary.toasts` from program
- SVARGA: replace divider images, use the ones from Ivana
- SVARGA: Fix `CountdownHeadline`
  ```
  Ако је у питању 1 онда треба ставити дан/час/минут/секунд
  Ако су у питању бројеви 2-4 онда треба ставити часА
  А ако су у питању сви остали бројеви, онда треба оставити овако како сада јесте данА/часовА/минутА/секундИ
  ```
- SVARGA: parallax effect is not working in Stefan Phone (probably Safari / Iphone problem)
- SVARGA: once Website is done, add locale `de`, `ru`
  - [ ] add locales
  - [ ] add GoogleForm links (default to `en`)

## 📓 Tasks done

> 29.8.2025

- I will create web with `sr`, `en` first, other locales likes `de`, `ru` I will do at the end, when website is finished and texts are final
  - otherwise it would be slowing me down (I already need to do 1x extra copy per text to EN, then I would need to do 3x extra)
  - taking care of `sr` texts and their translations (and keeping it in sync) is your responsibility, I suggest to use from now Edit mode, so I can see "changes", otherwise you would need to do full review of website <> texts to tell and show me what to change
- Fonts "Didact Gothic" for sans and "Great Vibes" for serif are used
- Keeping 3x "flower dividers" that we had on our website too.
  - I used 3x to not have only 1x to repeat all the time, if you want only one "flower divider" let me know, and I will remove others
- itinerary page `/itinerary` was updated by agenda from the GoogleDoc
- fix: `"Када"` and `"9. новембра 2025"`
- fix: Title `Marina & Stefan` uses Cyrillic in `sr` locale
- fix: All `sr` locale texts uses Cyrillic
- fix: `Countdown` to use your text
  - after the church wedding ceremony at 12:00, it will switch automatically to
    - SR: `прошао, оно што смо себи рекли Да`
    - EN: `passed, what we've told ourselves Yes`

## Tech Notes

- [astro-i18n](https://github.com/alexandre-fernandez/astro-i18nÏ)
- [daisyUI](https://daisyui.com/)
- [tailwind](https://tailwindcss.com/)
  - [Default Theme Variables](https://tailwindcss.com/docs/theme#default-theme-variable-reference)
  - [Tailwind icons](https://www.tailwindtoolbox.com/icons)
- [font source](https://fontsource.org/)
- [Flaticon](https://www.flaticon.com/search?word=flag%20serbia)
- [Placehold](https://placehold.co)
