# 🚌 SM Ticket — Bus Ticket Booking Website

An interactive bus ticket booking page for **SM Paribahan**. Pick your seats, see the price update live, apply a coupon and confirm your booking. Built with **Tailwind CSS**, **DaisyUI** and **vanilla JavaScript**.

> **Programming Hero — Level 1 · Assignment 5 (Batch 9)**
> Completed: **February 19, 2024**  
> Mark: **__ / 60** 🏆

<p>
  <a href="https://shimul705.github.io/assignment5-b9/"><img alt="Live Demo" src="https://img.shields.io/badge/Live-Demo-1DD100?style=for-the-badge&logo=githubpages&logoColor=white"></a>
  <a href="https://github.com/shimul705/assignment5-b9"><img alt="Source Code" src="https://img.shields.io/badge/Source-Code-030712?style=for-the-badge&logo=github&logoColor=white"></a>
  <img alt="Mark __/60" src="https://img.shields.io/badge/Mark-__%2F60-2EA44F?style=for-the-badge">
</p>

---

## 🔗 Links

| | |
|---|---|
| **Live Site** | [shimul705.github.io/assignment5-b9](https://shimul705.github.io/assignment5-b9/) |
| **Repository** | [github.com/shimul705/assignment5-b9](https://github.com/shimul705/assignment5-b9) |

---

## 🎟️ Try It Yourself

### Coupon codes

| Coupon Code | Discount | 4 seats (2200 BDT) → Grand Total |
|---|---|---|
| `NEW15` | 15% OFF | **1870 BDT** (save 330) |
| `Couple 20` | 20% OFF | **1760 BDT** (save 440) |

> Codes are **case-sensitive**. Type them exactly as shown, including the space in `Couple 20`. The coupon box unlocks only after you select **4 seats**.

### Test steps

1. Open the [live site](https://shimul705.github.io/assignment5-b9/) and click **Buy Tickets**.
2. Select **4 seats**. Each one turns green and is added to the summary at 550 BDT.
3. Enter `NEW15` or `Couple 20` and click **Apply** to see the discount.
4. Enter a passenger name and an **11-digit** phone number (e.g. `01712345678`).
5. Click **Next** to open the **SUCCESS** modal.

**Edge cases to try:**
- Select a 5th seat to get the "Seat Limit Reached" modal.
- Enter a wrong coupon code to get the "Invalid Coupon" modal.
- Click Next with a missing seat, name or phone to get a warning that says what's missing.

---

## 📌 Overview

**SM Ticket** is my fifth Programming Hero assignment, and the first one where **the page actually does something**.

Assignment 3 taught me Tailwind and DaisyUI, and Assignment 4 taught me JavaScript logic in the console. This project brings the two together: JavaScript reads clicks and form input and **updates the page live through the DOM**. It changes seat colours, adds rows to the booking summary, recalculates prices, enables and disables buttons, and opens modals.

---

## ✨ Features & Page Sections

1. **Navbar and Hero:** a full-width bus banner with a **Buy Tickets** button that smoothly scrolls to the booking section, plus three stat cards (users, tickets sold, partners).
2. **Best Offers:** two ticket-style coupon cards (`NEW15` for 15% off and `Couple 20` for 20% off).
3. **Bus Info:** the Greenline Paribahan coach card with route, departure time, boarding and dropping points, a live **"Seats left"** counter and the fare per seat.
4. **Seat Selection** (40 seats, A1–J4):
   - Clicking a seat turns it green, adds it to the summary, raises the seat badge and lowers "Seats left".
   - You can select at most **4 seats**. Trying a 5th opens a **warning modal**.
5. **Price Calculation:** the **Total Price** and **Grand Total** update after every seat (550 BDT per seat).
6. **Coupon:** the coupon box unlocks only when 4 seats are selected. A valid code applies the discount and shows the saved amount. An invalid code opens the warning modal.
7. **Passenger Form:** name, phone and email fields. Clicking **Next** checks that at least 1 seat is selected, a name is entered and the phone number has exactly 11 digits. If anything is missing, the warning modal says exactly what.
8. **Success Modal:** a booking confirmation popup. **Continue** resets the page.
9. **Footer:** the brand, an app download badge and policy links.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure, forms, inline `onclick` handlers |
| **Tailwind CSS** (CDN) | Utility-class layout and responsive breakpoints |
| **DaisyUI 4** | Navbar, hero, card, badge, input and modal components |
| **JavaScript (ES6)** | DOM selection and manipulation, event listeners, arrays, objects, regex validation |
| **Google Fonts** | `Raleway`, `Inter`, `Roboto` |
| **GitHub Pages** | Deployment |

---

## 📱 Responsive Design

| Breakpoint | Device | Layout |
|---|---|---|
| `≥ 1280px` (`xl`) | Desktop | The original design: stat cards float over the hero, coupons side by side, seat map beside the booking form |
| `1024–1279px` (`lg`) | Small laptop | Nav links visible, bus info card in a row, stat cards in a row below the hero, coupons and booking form stacked |
| `768–1023px` (`md`) | Tablet | Stat cards in 3 columns (icon on top), route details in 3 columns, full-width seat map, then the booking form |
| `< 768px` | Mobile | A single column: stacked stat cards, smaller headings, compact seat buttons that fill the width, stacked footer |

---

## 📂 Project Structure

```
assignment5-b9/
├── index.html          # Page markup with Tailwind + DaisyUI classes, success and warning modals
├── css/
│   └── font.css        # Google Fonts (Raleway, Inter, Roboto) + font helper classes
├── js/
│   └── main.js         # Seat selection, price calculation, coupon, form validation, modals
├── images/             # Banner, icons, seat icons, coupon dividers
└── tailwind.config.js  # Tailwind config file
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/shimul705/assignment5-b9.git
cd assignment5-b9
```

Then open `index.html` in any browser. No build step is required, but an internet connection is needed for the Tailwind, DaisyUI and Google Fonts CDNs.

**Try it:** see the **🎟️ Try It Yourself** section above for the coupon codes and test steps.

---

## 🔧 2026 Update: Fixes

The booking logic is my original February 2024 code. In **2026**, while organising my portfolio, I fixed these issues:

| Issue in my 2024 version | 2026 fix |
|---|---|
| On devices in **dark mode**, DaisyUI switched the whole page to its dark theme, and text and inputs looked wrong | Added `data-theme="light"` so the page always shows the light design it was made for |
| The page was **desktop-only**: on mobile and tablet the stat cards, coupons, route details and seat map overflowed or overlapped | Added Tailwind breakpoint classes (`md:` `lg:` `xl:` `2xl:`) to every section. The desktop design is unchanged |
| The 4-seat limit and coupon errors used the browser's `alert()` popup | Replaced it with a DaisyUI **warning modal** that matches the success modal's style (`showWarning()` in `main.js`) |
| **Next** stayed silently disabled (an invisible grey button with white text) until the phone number was valid, so the SUCCESS modal seemed missing | Next is always green, as in the Figma. Clicking it validates seat, name and phone, then opens the warning modal or the SUCCESS modal |
| The success modal was fixed at `w-1/3`, too narrow on phones, and its text differed from the Figma | Made it responsive (`w-11/12` on mobile up to `w-1/3` on desktop) and matched the Figma text |

---

## 📚 What I Learned

- **DOM manipulation:** `getElementById`, `innerText`, `innerHTML`, `createElement`, `appendChild` and `classList`.
- **Event handling:** inline `onclick`, `addEventListener('click' / 'input')`.
- Keeping **state in JavaScript** (the `selectedSeats` array) and syncing it with the UI.
- **Dynamic calculations:** totals, discounts with an object lookup (`{ 'NEW15': 0.85 }`) and the remaining seat count.
- **Enabling and disabling controls** by condition, and validating a phone number with **regex** (`/^\d{11}$/`).
- Opening and closing **DaisyUI modals** from JavaScript, and smooth scrolling with `scrollIntoView`.

---

## 👤 Author

**Shimul**
GitHub: [@shimul705](https://github.com/shimul705)

---

<sub>Part of my Programming Hero learning journey. Each assignment shows a step in my growth as a web developer.</sub>
