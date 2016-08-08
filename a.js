class Student{
    do(){
        return 'the first';
    }
}

class Student1{
    constructor(){
        return this;
    }
    do(){
        return 'the two';
    }
}

class Student2{
    constructor(name){
        this.name=name;
    }

    do(name){
        return 'hello' +name;
    }
}
let a=new Student();
console.log(a);
console.log(a.constructor);
console.log(a.do());

let b=new Student1();
console.log(b);
console.log(b.constructor);
console.log(b.do());

let c=new Student2();
console.log(c);
console.log(c.constructor);
console.log(c.do('Cher'));