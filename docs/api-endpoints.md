# API Endpoints

Base URL: `https://your-api-domain`

## Auth (Firebase Auth on client)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/otp`

## Bookings
- `POST /api/bookings`
- `GET /api/bookings?studentId=&pgId=`

## Reviews
- `POST /api/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`

## Maintenance
- `POST /api/maintenance`
- `GET /api/maintenance?pgId=`

## Food Ratings
- `POST /api/food-ratings`
- `GET /api/food-ratings?pgId=`

## SOS
- `POST /api/sos`
- `GET /api/sos?status=open`

## Email Automation
- `POST /api/email`

## Payments (optional integration)
- `POST /api/payments`
- `GET /api/payments?studentId=`
