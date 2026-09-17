# Maybee Creations — Map Room Shopify theme

A visual and navigation redesign of [maybeecreation.myshopify.com](https://maybeecreation.myshopify.com/), inspired by (not copied from) [maybeecreations.com](https://maybeecreations.com).

The live Craft theme is a generic catalog: a flat Home / Catalog / Contact / Faith / Freedom / Frontier / Future menu, no hero, collection mosaics that swallow the homepage, SEO-stuffed titles, and no Fans world.

This theme turns the shop into **The Map Room**:

- Always-visible **world compass** (All Maps, Faith, Freedom, Frontier, Fans, Future) with explorer subtitles
- Shop-first hero instead of “Browse our latest products”
- Equal world tiles instead of a lopsided collection mosaic
- Readable titles (the part before the `|`) and **prices on every card**
- Cart language: “expedition pack,” checkout still on Shopify
- Footer wayfinding to worlds, policies, and the studio site
- Fans shelf included even before that collection is stocked (points to the studio)

## Preview

Live Map Room (real Shopify catalog and checkout): https://whole-sphinx-xhk7.here.now/

The anonymous preview expires in 24 hours unless you claim it: https://here.now/c/i3NFEH24M_1isjSA

Or open `preview/index.html` locally.

## Install on Shopify

1. Zip the `theme/` folder so `layout/`, `templates/`, `sections/`, `assets/`, `config/`, `locales/`, and `snippets/` are at the zip root.
2. Shopify admin → **Online Store → Themes → Add theme → Upload zip file**.
3. Preview, then **Publish**.
4. **Online Store → Navigation**: you can leave the old menu; the compass is hard-wired to `/collections/{world}`.
5. Create a **Fans** collection (handle `fans`) when those products are in the shop. Until then the Fans tab shows an empty-shelf state and a link to maybeecreations.com/fans.

## What this does not change

Shopify admin, products, and checkout stay yours. This only restyles and reorganizes the storefront. Product titles in admin can stay long for SEO; the theme displays the short name.
