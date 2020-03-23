# delivery-app

## Frontend

run build before running backend
```
npm run build
```

## Backend

install dependencies:
```
npm install -d
```

start mongodb

run with:
```
node app.js beta.env
```

## API

### Restaurant

[GET] get all restaurants:
```
/api/restaurant
```

output:
```
[
  {
    basic: {
      name: "My Restaurant"
    },
    details: {
      address: {
        street: "Street name 1",
        city: "Duga Resa :)"
      },
      phone: "123-456"
    }
  },
  {
    basic: {
      name: "My Restaurant 2"
    },
    details: {
      address: {
        street: "Street name 2",
        city: "Karlovac"
      },
      phone: "123-456"
    }
  }
]
```

[POST] create new:
```
/api/restaurant/add
```
input:
```
{
  basic: {
    name: { type: String, required: true }
  },
  details: {
    address: {
      street: {type: String },
      city: {type: String }
    },
    phone: {type: String }
  }
}
```
