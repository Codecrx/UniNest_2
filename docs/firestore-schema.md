# Firestore Schema (Proposed)

## Collections

### users
- `id` (doc id)
- `role`: "student" | "owner" | "admin"
- `fullName`
- `phone`
- `email`
- `college`
- `pgId`
- `roomNumber`
- `businessName`
- `address`
- `gstOrLicense`
- `propertiesCount`
- `status`: "active" | "blocked"
- `createdAt`

### pgListings
- `ownerId`
- `name`
- `city`
- `area`
- `address`
- `photos` (array)
- `videos` (array)
- `tourAssetUrl`
- `amenities` (array)
- `roomTypes` (array)
- `foodMenu` (map)
- `safetyScore`
- `verificationStatus`
- `createdAt`

### bookings
- `studentId`
- `pgId`
- `roomType`
- `status`: "pending" | "accepted" | "rejected" | "cancelled"
- `moveInDate`
- `createdAt`

### reviews
- `studentId`
- `pgId`
- `ratings`: { cleanliness, food, safety, amenities }
- `media` (array)
- `comment`
- `createdAt`

### maintenanceTickets
- `studentId`
- `pgId`
- `category`
- `description`
- `media` (array)
- `status`: "new" | "in-progress" | "resolved"
- `createdAt`

### foodRatings
- `studentId`
- `pgId`
- `mealType`: "breakfast" | "lunch" | "dinner"
- `rating`
- `comment`
- `media` (array)
- `createdAt`

### sosAlerts
- `studentId`
- `pgId`
- `location`: { lat, lng }
- `status`: "open" | "escalated" | "closed"
- `createdAt`

### documents
- `studentId`
- `type`
- `fileUrl`
- `createdAt`

### subscriptions
- `ownerId`
- `tier`: "free" | "premium" | "pro"
- `status`
- `renewalDate`

### emailLogs
- `to`
- `subject`
- `status`
- `providerId`
- `metadata`
- `createdAt`
