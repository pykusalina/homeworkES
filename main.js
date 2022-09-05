// task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// task 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names: [name1, name2, name3,name4], ages: [age1, age2, age3, age4]} = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26
 
 // task 3
 function mul() {
    let el = 1;
   arguments.forEach(element => {
    if (!isNaN(element)) {
        el *=element
    } else {
        return 0;
    }
   });
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0

 // task 4
 let server = {
    data: 0,
    convertToString: function (callback) {
       callback( () =>  {
          return data + "";
       });
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       server.data = data;
       server.convertToString(notification());
    },
    notification: function () {
       return ((callback)  => {
          result = callback();
       });
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"
 

 // task 5
 let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

 function mapBuilder() {
    console.log(map.size); // 4
	console.log(map.get(2)); // "span"

}


let map = mapBuilder(keys, values);


 