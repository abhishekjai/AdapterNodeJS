class User {   
    constructor(id,name,last){
        this.id=id;
        this.name=name;
        this.last=last;
    }
}
class Adapter{
    constructor(_adapter){
        this._adapter=_adapter;
    }
    save(obj){
        const schema = ['id','name','last']
        const arr = Object.keys(obj);
        let flag = true;
        schema.forEach((val)=>{
            if(!arr.includes(val)){
                flag=false;
            }
        })
        if(flag){
            const newUser = new User(obj.id,obj.name,obj.last);
            this._adapter.push(newUser);
            return 'User successfully added';
        }
        return 'User not added'
    }
    update(id,obj){
        const schema = ['id','name','last'];
        const user = this._adapter.find(c => id === c.id);
        if(!user){
            return 'User not available';
        }
        const arr = Object.keys(obj);
        const index = this._adapter.indexOf(user);
        console.log(index);
        arr.forEach((val)=>{
            if(schema.includes(val)){
                this._adapter[index][val]=obj[val];
            }
        })
        return 'Successfully Updated';
    }
    show(){
        console.log(this._adapter);
    }
}
const user1 = new User(1,'abhishek','jaiswal');
const user2 = new User(2,'nambiar','abhi');
const user3= new User(3,'chinmay','abhishek');
let arr = [];
arr.push(user1);
arr.push(user2);
adapt = new Adapter(arr);
adapt.save(user3);
adapt.show();
adapt.update(1,user3);
adapt.show();




/* const user1 = new User(1,'abhishek','jaiswal');
const user2 = new User(2,'bheem','abhishek');
let arr = [];
arr.push(user1);
arr.push(user2);
arr.forEach()
console.log(arr); 
/* let User = function (id,name,last){
    this.id=id;
    this.name=name;
    this.last=last;
}  */