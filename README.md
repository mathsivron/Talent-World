# TalentWorld (TWORLD) — README

### A marketplace where one user wears multiple Hats

TalentWorld is a dual-sided marketplace. A single account can be **Creator (Talent)** and **Employer (Client)** at the same time. A Hat = professional identity (e.g., "UI Designer Available for SaaS") + hiring intent (e.g., "Looking for UI Designer for SaaS").

This repo uses **split-file architecture** to avoid the single-file crash that broke Z11.html at 253KB (Meta AI preview ~200KB limit).

---

## 📁 Project Structure (Split Files)

```
TalentWorld/
├── MyHats_LIVE.html / MyHats.jsx              → Personal hat collection, 260px cards
├── BentoCard_LIVE.html / BentoCard.jsx        → Universal discovery card (same for all)
├── Showroom_SPLIT_Improved                   → Curated premium showcase (12 talents)
├── Profile.jsx / Dashboard.jsx
├── TalentWorld_SRD_v4_Final_NoFees.md        → Full System Requirements Document
├── TalentWorld_UserFlow_v4.png               → Registration → Payment flow diagram
└── README.md (this file)
```

**Never upload full Talentworld with node_modules** — work with single component LIVE HTML files for preview, then copy-paste single .jsx into your local `src/components/`.

---

## 🎯 Locked Decisions (v4.0)

| # | Feature | Decision |
|---|---------|----------|
| 1 | Orbits | Open custom, updatable via + Add Custom Orbit |
| 2 | Dual Role | Allow manual toggle Creator ↔ Employer, persists in localStorage |
| 3 | Portfolio | Talent = required (image/video/audio), Client = optional reference |
| 4 | Verified | Client name ending Ltd/Plc/Corp/Inc/LLC = verified badge |
| 5 | Escrow | = Hat priceMin (not fixed ₦500k) |
| 6 | Showroom Sort | Auto by bookings + orbitScore + likes |
| 7 | Card Width | 260px min / 300px max / 18px gap (synced all) |
| 8 | Fees | **Dropped for now** — Talent receives 100% |

---

## 🧩 Core Concepts

### Hat Model
- **hatTitle:** "UI Designer Available" / "Looking for UI Designer"
- **username:** @aisha.designs, @david.chen
- **orbit:** Music & Audio, Visual Arts, Performing Arts, Beauty, Models, Actors, etc. + custom
- **lga:** Yaba, Lekki, Ikeja, Paris, Milan, etc.
- **country:** Flag + currency (200+ list)
- **motto:** Max 80 chars, truncated to 60 in cards
- **media:** Portfolio required for Talent, optional for Client
- **pricing:** priceMin, priceMax, rate, active
- **social:** rating 4.7-5.0, bookings, likes, commentsCount, orbitScore

### BentoCard — Same Card For All
- **Blue pill #0A13E6 = Talent hat**, Black pill = Client hat
- **White pill = hatType** (Freelance/Contract)
- **Talent flow = Book Flow:** Book Talent / Message Talent
- **Client flow = Apply Flow:** Apply / View hat
- Swap Talent/Client positions button

### My Hats
- Grid: `repeat(auto-fill, minmax(260px, 1fr))`, gap 18px, max 300px
- List/Grid toggle, View Client/Talent, Accept/Reject

### Showroom
- 12 talents from reference: Elena Voss, Marcus Chen, Sofia Reyes, Kenji Tanaka, Amara Diallo, Liam Okafor, Isla Morgan, David Park, Zara Khaled, Alex Rivera, Mila Jovic, Jasper Cole
- Filters: All, Models, Actors, Musicians, Creators, Developers + custom orbits
- Search by name/skill, Available only toggle
- Sorted by bookings + orbitScore + likes, top = Showroom Host

### Trust & Escrow
- **Not Funded:** "Escrow: Not Funded • Contacts Locked 🔒"
- **Secured:** "₦[priceMin] Secured • Contacts Unlocked 🔓" + green pulse
- Anti-leak regex masks whatsapp, telegram, call me, my number, hmu, dm me
- No platform fees v4 — full amount released to Talent after Review & Confirm

---

## 🔄 User Flow: Registration → Accepting Payment

See `TalentWorld_UserFlow_v4.png`

1. **Registration:** Choose Creator / Employer / Dual → Account Created
2. **Create Hat:** Talent (portfolio required) / Client (portfolio optional), set availability & priceMin
3. **Browse Feed:** Toggle Creator ↔ Employer (allowed, not forced). Creator sees Client cards, Employer sees Talent cards
4. **Discovery:** Bento Feed + Showroom 260px cards, filter/search
5. **Action:** Book (Talent) or Apply (Client)
6. **Funding:** Client funds escrow = priceMin
7. **Escrow Secured:** Contacts unlocked
8. **Work & Chat:** Secure exchange, anti-leak active
9. **Delivery:** Review & Confirm
10. **Accept Payment:** Release escrow 100% to Talent

---

## 💻 How to Preview (No Node.js needed)

**Method that never hits file limit:**

1. Save `*_LIVE.html` to Desktop with Notepad++
2. Double-click → opens in Chrome, instant preview
3. Edit in Notepad++, save, double-click again to see changes
4. When perfect, copy content of `.jsx` into your local `Talentworld/src/components/`

**For new chat (Meta AI):**
- Start fresh chat at www.meta.ai (0 files)
- Prompt: "Continue Talentworld — My Hats 260px done, now do BentoCard with offline LIVE preview. At end give small ZIP with only 4 components, not full project."

---

## 🚀 React Integration

```jsx
// src/components/MyHats.jsx
// Grid synced to 260px
<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'18px'}}>
  {hats.map(hat => <BentoCard hat={hat} />)}
</div>

// Role toggle persisted
localStorage.setItem('talentworld_role', 'creator' | 'employer')
localStorage.setItem('talentworld_viewMode', 'grid' | 'list')
```

---

## 📱 Responsive

From `DEDICATED_PREVIEW_RESPONSIVE_ANDROID_LAPTOP.html`:
- Desktop: modal max 1150px, rounded 16-20px
- Android <768px: modal full-screen 100vw/100vh, border-radius 0
- All images max-width 100%, overflow-x hidden, tap highlight transparent
- Validation: red ring on error fields

---

## 📄 Reference Files Used

- `file1515944311478240965_range_both_roles_1.html` — Both roles form, portfolio rule, LGA, verified Ltd/Plc
- `TWORLD-PART-1-_-Downloadable-Reference.html` — Dual toggle, Creator browsing Clients, Employer browsing Talents, priceMin, Showroom active
- `Talentworld-Showroom_1.html` — 12 talents, categories, rating, availability
- `DEDICATED_PREVIEW_RESPONSIVE_ANDROID_LAPTOP.html` — Bento responsive, escrow simulation, anti-leak regex

---

## 📦 Delivery

Final ZIP will contain only 4 files (no node_modules):
- MyHats.jsx (260px)
- BentoCard.jsx (same card for all)
- Showroom_SPLIT_Improved.jsx (custom orbit + toggle + priceMin)
- Profile.jsx

Plus docs:
- SRD v4 (no fees) .md
- User Flow diagram .png
- README.md

---

## ✅ Next Steps

1. Finalize Showroom improved split file (done — preview available)
2. Finalize My Hats 260px amendment
3. Generate small ZIP
4. Continue in new chat with offline LIVE method

---

**Built as split files to stay under 200KB preview limit and enable constant preview.**
