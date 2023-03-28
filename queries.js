//1
db.restaurante.find().pretty();
//2
db.restaurante.find({},{restaurant_id:1,name:1,borought:1,cuisine:1});
//3
db.restaurante.find({},{"restaurant_id":1,"name":1,"borought":1,"cuisine":1,"_id":0});
//4
db.restaurante.find({},{"restaurant_id":1,"name":1,"borought":1,"address.zipcode":1,"_id":0});
//5
db.restaurante.find({},{"borought":"Bronx"});
//6
db.restaurante.find({},{"borought":"Bronx"}).limit(5);
//7
db.restaurante.find({},{"borought":"Bronx"}).limit(5).skip(5);
//8
db.restaurante.find({"grades.score": {$gt: 90}});
//9
db.restaurante.find({"grades": {"$elemMatch": {"score": {"$gt": 80, "$lt": 100}}}})
//10
db.restaurante.find({"address.coord": {$lt: -95.754168}})
//11
db.restaurante.find({$and: [{cuisine: {$ne: "American "}}, {"grades.score": {$gt: 70}}, {"address.coord": {$lt: -65.754168}}]})
//12
db.restaurante.find({cuisine: {$ne: "American "}, "grades.score": {$gt: 70}, "address.coord": {$lt: -65.754168}})
//13
db.restaurante.find({cuisine: {$ne: "American "}, "grades.grade": "A", borough: {$ne: "Brooklyn"}}).sort({cuisine: -1})
//14
db.restaurante.find({name: /^Wil/}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//15
db.restaurante.find({name: /ces$/}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//16
db.restaurante.find({name: /Reg/}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//17
db.restaurante.find({borough: "Bronx", cuisine: {$in: ["American ", "Chinese"]}})
//18
db.restaurante.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//19
db.restaurante.find({borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//20
db.restaurante.find({"grades.score": {$lte: 10}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//21
db.restaurante.find({$or: [{cuisine: {$nin: ["American ", "Chinese"]}}, {name: /^Wil/}]}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//22
db.restaurante.find({grades: {$elemMatch: {grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z")}}}, {restaurant_id: 1, name: 1, grades: 1})
//23
db.restaurante.find({$and: [{"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")}]}, {restaurant_id: 1, name: 1, grades: 1})
//24
db.restaurante.find({"address.coord.1": {$gt: 42, $lte: 52}}, {restaurant_id: 1, name: 1, address: 1})
//25
db.restaurante.find().sort({name: 1})
//26
db.restaurante.find().sort({name: -1})
//27
db.restaurante.find().sort({cuisine: 1, borough: -1})
//28
db.restaurante.find({"address.street": {$exists: false}})
//29
db.restaurante.find({"address.coord": { $type : "double" }})
//30
db.restaurante.find({"grades.score": {$mod: [7, 0]}}, {restaurant_id: 1, name: 1, "grades.grade": 1})
//31
db.restaurante.find({name: /mon/}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1})
//32
db.restaurante.find({name: /^Mad/}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1})
