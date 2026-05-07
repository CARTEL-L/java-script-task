const personal = {
    name: "Ngozi",
    age: 25
};
const professional = {
    role: "Developer",
    company: "Semicolon"
}
const mergeUser = {...personal, ...professional}
console.log(mergeUser)
