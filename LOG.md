
# Applications

## Online Offers

### App: online-offers-api
```
nx g @nrwl/nest:app online-offers-api --dry-run
```


### Module Offers
```
nx g @nrwl/nest:module offers --sourceRoot=apps/online-offers-api/src --path=app --dry-run
nx g @nrwl/nest:controller offers --sourceRoot=apps/online-offers-api/src --spec=0 --path=app --dry-run
nx g @nrwl/nest:service offers --sourceRoot=apps/online-offers-api/src --path=app --spec=0 --dry-run
nx g @nrwl/nest:class offers/offer --sourceRoot=apps/online-offers-api/src --path=app --spec=0 --dry-run
```

### Module Advertisers
```
nx g @nrwl/nest:module advertisers --sourceRoot=apps/online-offers-api/src --path=app --dry-run
nx g @nrwl/nest:controller advertisers --sourceRoot=apps/online-offers-api/src --spec=0 --path=app --dry-run
nx g @nrwl/nest:service advertisers --sourceRoot=apps/online-offers-api/src --path=app --spec=0 --dry-run
nx g @nrwl/nest:class advertisers/advertiser --sourceRoot=apps/online-offers-api/src --path=app --spec=0 --dry-run
```

## 2. Gespot Zwolle

### App: gespot-zwolle-api
```
nx g @nrwl/nest:app gespot-zwolle-api --dry-run
```

### Module Offers
```
nx g @nrwl/nest:module photos --sourceRoot=apps/gespot-zwolle-api/src --path=app --dry-run
nx g @nrwl/nest:controller photos --sourceRoot=apps/gespot-zwolle-api/src --spec=0 --path=app --dry-run
nx g @nrwl/nest:service photos --sourceRoot=apps/gespot-zwolle-api/src --path=app --spec=0 --dry-run
nx g @nrwl/nest:class photos/photo --sourceRoot=apps/gespot-zwolle-api/src --path=app --spec=0 --dry-run
```
