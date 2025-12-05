# Database Schema (auto-generated)

## User

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| name | String |  |  |
| email | String |  |  |
| phone | String |  |  |
| password | String |  |  |
| imageUrl | String |  |  |
| token | String? |  |  |
| isVerified | Boolean |  |  |
| role | UserRole |  |  |
| verificationCode | Int? |  |  |
| createdAt | DateTime? |  |  |
| updatedAt | DateTime? |  |  |
| Worker | Worker[] |  |  |
| DeliveryDriver | DeliveryDriver[] |  |  |
| Order | Order[] |  |  |
| Wallet | Wallet[] |  |  |
| locations | UserLocation[] |  |  |
| Review | Review[] |  |  |
| notifications | Notification[] |  |  |
| Notification | Notification[] |  |  |

## Category

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| name | String |  |  |
| subName | String? |  |  |
| slug | String |  |  |
| description | String? |  |  |
| info | String? |  |  |
| price | Float? |  |  |
| imageUrl | String? |  |  |
| type | ServiceType |  |  |
| subType | ServiceSubType? |  |  |
| status | String |  |  |
| sortOrder | Int |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| services | Service[] |  |  |
| Store | Store[] |  |  |
| WorkerCategory | WorkerCategory[] |  |  |

## WorkerCategory

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| worker | Worker |  |  |
| category | Category |  |  |
| workerId | String |  | FK |
| categoryId | String |  | FK |

## Service

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| name | String |  |  |
| slug | String |  |  |
| description | String? |  |  |
| categoryId | String |  | FK |
| category | Category? |  |  |
| type | ServiceType |  |  |
| subType | ServiceSubType? |  |  |
| price | Float? |  |  |
| duration | Int? |  |  |
| availability | Boolean |  |  |
| imageUrl | String? |  |  |
| iconUrl | String? |  |  |
| rating | Float |  |  |
| ratingCount | Int |  |  |
| warranty | Int? |  |  |
| installmentAvailable | Boolean |  |  |
| installmentMonths | Int? |  |  |
| monthlyInstallment | Float? |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| parameters | ServiceParameter[] |  |  |

## ServiceParameter

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| name | String |  |  |
| description | String? |  |  |
| imageUrl | String? |  |  |
| iconUrl | String? |  |  |
| price | Float |  |  |
| warranty | Int? |  |  |
| installmentAvailable | Boolean |  |  |
| installmentMonths | Int? |  |  |
| monthlyInstallment | Float? |  |  |
| serviceId | String |  | FK |
| service | Service |  |  |
| status | String |  |  |
| sortOrder | Int |  |  |
| rating | Float? |  |  |
| ratingCount | Int? |  |  |
| duration | Int? |  |  |
| availability | Boolean? |  |  |
| faqs | Json? |  |  |
| whatIncluded | Json? |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| Order | Order[] |  |  |

## Worker

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| userId | String |  | FK |
| user | User? |  |  |
| title | String |  |  |
| description | String |  |  |
| isAvailable | Boolean |  |  |
| isFavorite | Boolean |  |  |
| hourlyRate | Float |  |  |
| jobSuccessRate | Float |  |  |
| totalEarned | Float |  |  |
| skills | String[] |  |  |
| rating | Float |  |  |
| reviewsCount | Int |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| isVerified | Boolean? |  |  |
| totalJobsDone | Int |  |  |
| about | String? |  |  |
| experiences | WorkExperience[] |  |  |
| reviews | Review[] |  |  |
| Order | Order[] |  |  |
| schedule | Schedule[] |  |  |
| earnings | Earning[] |  |  |
| WorkerCategory | WorkerCategory[] |  |  |

## Earning

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| amount | Float |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| worker | Worker |  |  |
| workerId | String |  | FK |

## Schedule

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| workerId | String |  | FK |
| scheduledTime | DateTime |  |  |
| date | DateTime |  |  |
| day | String |  |  |
| shiftType | ShiftEnum |  |  |
| worker | Worker |  |  |
| maxOrders | Int |  |  |
| ordersCount | Int |  |  |
| isFull | Boolean |  |  |
| location | String? |  |  |
| workerType | WorkerTypeEnum |  |  |
| status | StatusEnum |  |  |
| priority | PriorityEnum |  |  |
| notes | String? |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| ScheduleOrder | ScheduleOrder[] |  |  |

## WorkExperience

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| workerId | String |  | FK |
| worker | Worker |  |  |
| title | String |  |  |
| company | String |  |  |
| duration | String |  |  |
| description | String |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## Review

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| workerId | String |  | FK |
| worker | Worker |  |  |
| userId | String |  | FK |
| user | User |  |  |
| orderId | String |  | FK |
| order | Order |  |  |
| rating | Float |  |  |
| comment | String |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## DeliveryDriver

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| userId | String |  | FK |
| user | User? |  |  |
| vehicleType | String? |  |  |
| license | String? |  |  |
| availability | Boolean |  |  |
| rating | Float |  |  |
| reviewsCount | Int |  |  |
| completedOrders | Int |  |  |
| earnings | Float |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| Order | Order[] |  |  |

## OrdersStore

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| orderId | String |  | FK |
| order | Order |  |  |
| storeId | String |  | FK |
| store | Store |  |  |
| products | ProductsOrder[] |  |  |

## Order

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| userId | String? |  | FK |
| user | User? |  |  |
| serviceId | String? |  | FK |
| service | ServiceParameter? |  |  |
| providerId | String? |  | FK |
| provider | Worker? |  |  |
| deliveryDriverId | String? |  | FK |
| deliveryDriver | DeliveryDriver? |  |  |
| latitude | Float? |  |  |
| longitude | Float? |  |  |
| address | String? |  |  |
| notes | String? |  |  |
| price | Float? |  |  |
| duration | Int? |  |  |
| status | OrderStatus |  |  |
| totalAmount | Float |  |  |
| paymentStatus | PaymentStatus |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| store | OrdersStore[] |  |  |
| paymentMethod | PaymentMethod? |  |  |
| Review | Review[] |  |  |
| ScheduleOrder | ScheduleOrder[] |  |  |
| Notification | Notification[] |  |  |

## ProductsOrder

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| orderId | String |  | FK |
| orders | OrdersStore |  |  |
| productId | String |  | FK |
| product | Product |  |  |
| quantity | Int |  |  |

## ScheduleOrder

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| scheduleId | String |  | FK |
| orderId | String |  | FK |
| schedule | Schedule |  |  |
| order | Order |  |  |

## Wallet

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| userId | String |  | FK |
| user | User? |  |  |
| balance | Float |  |  |
| transactions | Transaction[] |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## Transaction

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| walletId | String |  | FK |
| wallet | Wallet? |  |  |
| type | String |  |  |
| amount | Float |  |  |
| paymentId | String? |  |  |
| status | String |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## Store

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| name | String |  |  |
| description | String? |  |  |
| type | String |  |  |
| logo | String? |  |  |
| coverImage | String? |  |  |
| images | String[] |  |  |
| address | String |  |  |
| locations | StoreLocation[] |  |  |
| phone | String? |  |  |
| email | String? |  |  |
| workingHours | StoreWorkingHours[] |  |  |
| categoryId | String? |  | FK |
| category | Category? |  |  |
| rating | Float |  |  |
| reviewsCount | Int |  |  |
| isActive | Boolean |  |  |
| status | String |  |  |
| minOrderAmount | Float? |  |  |
| deliveryFee | Float? |  |  |
| priceDriver | Float? |  |  |
| categories | StoreCategory[] |  |  |
| products | Product[] |  |  |
| offers | StoreOffer[] |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| OrdersStore | OrdersStore[] |  |  |

## StoreLocation

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| storeId | String |  | FK |
| store | Store |  |  |
| name | String |  |  |
| address | String |  |  |
| latitude | Float |  |  |
| longitude | Float |  |  |
| phone | String? |  |  |
| isActive | Boolean |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## StoreCategory

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| storeId | String |  | FK |
| store | Store |  |  |
| name | String |  |  |
| description | String? |  |  |
| image | String? |  |  |
| isActive | Boolean |  |  |
| sortOrder | Int |  |  |
| products | Product[] |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## Product

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| name | String |  |  |
| description | String? |  |  |
| price | Float |  |  |
| salePrice | Float? |  |  |
| images | String[] |  |  |
| storeId | String |  | FK |
| store | Store |  |  |
| categoryId | String |  | FK |
| category | StoreCategory |  |  |
| isAvailable | Boolean |  |  |
| rating | Float |  |  |
| ingredients | String[] |  |  |
| extras | Json? |  |  |
| stock | Int |  |  |
| discountPrice | Float? |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| ProductsOrder | ProductsOrder[] |  |  |
| StoreOfferProduct | StoreOfferProduct[] |  |  |

## StoreOfferProduct

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| storeOfferId | String |  | FK |
| storeOffer | StoreOffer |  |  |
| productId | String |  | FK |
| product | Product |  |  |

## StoreOffer

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| storeId | String |  | FK |
| store | Store |  |  |
| name | String |  |  |
| description | String? |  |  |
| type | String |  |  |
| image | String? |  |  |
| startDate | DateTime? |  |  |
| endDate | DateTime? |  |  |
| discount | Float? |  |  |
| isActive | Boolean |  |  |
| products | StoreOfferProduct[] |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## UserLocation

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| userId | String |  | FK |
| user | User |  |  |
| name | String? |  |  |
| address | String |  |  |
| apartment | String? |  |  |
| floor | String? |  |  |
| building | String? |  |  |
| street | String? |  |  |
| area | String? |  |  |
| city | String? |  |  |
| latitude | Float |  |  |
| longitude | Float |  |  |
| isDefault | Boolean |  |  |
| type | String |  |  |
| notes | String? |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## StoreWorkingHours

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| storeId | String |  | FK |
| store | Store |  |  |
| dayOfWeek | Int |  |  |
| isOpen | Boolean |  |  |
| openTime | String |  |  |
| closeTime | String |  |  |
| breakStart | String? |  |  |
| breakEnd | String? |  |  |
| isSpecialDay | Boolean |  |  |
| specialDate | DateTime? |  |  |
| note | String? |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |

## Notification

| Field | Type | PK | Notes |
|---|---:|:---:|---|
| id | String | PK |  |
| title | String |  |  |
| message | String |  |  |
| type | NotificationType |  |  |
| relatedId | String |  | FK |
| senderId | String |  | FK |
| orderId | String? |  | FK |
| isRead | Boolean |  |  |
| createdAt | DateTime |  |  |
| updatedAt | DateTime |  |  |
| user | User? |  |  |
| sender | User? |  |  |
| order | Order? |  |  |

## Relationships

- WorkerCategory.workerId → Worker.id
- WorkerCategory.categoryId → Category.id
- Service.categoryId → Category.id
- ServiceParameter.serviceId → Service.id
- Worker.userId → User.id
- Earning.workerId → Worker.id
- Schedule.workerId → Worker.id
- WorkExperience.workerId → Worker.id
- Review.workerId → Worker.id
- Review.userId → User.id
- Review.orderId → Order.id
- DeliveryDriver.userId → User.id
- OrdersStore.orderId → Order.id
- OrdersStore.storeId → Store.id
- Order.userId → User.id
- Order.serviceId → ServiceParameter.id
- Order.providerId → Worker.id
- Order.deliveryDriverId → DeliveryDriver.id
- ProductsOrder.orderId → OrdersStore.id
- ProductsOrder.productId → Product.id
- ScheduleOrder.scheduleId → Schedule.id
- ScheduleOrder.orderId → Order.id
- Wallet.userId → User.id
- Transaction.walletId → Wallet.id
- Store.categoryId → Category.id
- StoreLocation.storeId → Store.id
- StoreCategory.storeId → Store.id
- Product.storeId → Store.id
- Product.categoryId → StoreCategory.id
- StoreOfferProduct.storeOfferId → StoreOffer.id
- StoreOfferProduct.productId → Product.id
- StoreOffer.storeId → Store.id
- UserLocation.userId → User.id
- StoreWorkingHours.storeId → Store.id
- Notification.relatedId → User.id
- Notification.senderId → User.id
- Notification.orderId → Order.id
