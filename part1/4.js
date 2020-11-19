let newData = {
  name: "Chandra Oktaviani", email: "candraoktaviani2017@gmail.com", 
  hobby: ["reading novel", "watching anime"]
}

let data = {
  id : 1,
  name: "Leanne Graham",
  username : "Bret",
  email: "Sincere@april.biz",
  ...newData,
  address:{
    street: "Kulas Light",
    suite: 'Apt. 556',
    city: "Gwenborough",
    zipcode: "9229"
  },
  phone: "1-770-736-8031 x56442",
  website: 'hildegard.org'
}
console.log(data);

const{street: localeStreet,city: localeCity} = data.address;

console.log(`${localeStreet} and ${localeCity}`);