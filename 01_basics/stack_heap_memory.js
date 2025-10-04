// Stack (primitive data types) Heap (non primtive data types)

let youtubename= 'sarthak pandey'

let anothername=youtubename
anothername = 'chai aur code'

console.log(youtubename)
console.log(anothername)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne)
console.log(userTwo)