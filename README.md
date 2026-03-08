# Navkar Restaurant (Starter Blueprint)

This repository contains a responsive front-end starter page based on the Navkar restaurant system plan.

## Instant preview

```bash
python3 -m http.server 4173
```

Open these URLs in your browser:

- Main preview: `http://localhost:4173`
- QR/table simulation preview: `http://localhost:4173/?table=5`

## Included

- Home/hero section with positioning for QR self-ordering
- Live preview card showing current URL and detected table number from query params
- Menu categories section
- Smart feature highlights (call waiter, kitchen display, loyalty/reviews)
- Role-based panel summary (customer, waiter, admin)
- Firebase data model and security guidance section

## Next build steps

1. Add Firebase project config and Auth.
2. Build dedicated routes/pages for customer, waiter, and admin flows.
3. Connect Firestore collections (`users`, `menu`, `orders`, `tables`).
4. Enforce role-based Firestore Security Rules.
5. Add analytics and payment integrations.
