let Name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let age = [32, 30, 26, 28, 44]

const object = {}

for(let i=0; i<Name.length; i++){
    object[Name[i]]=age[i]
}

console.log(object)
