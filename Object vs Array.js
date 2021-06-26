const { Console } = require("console");
const { defaultCoreCipherList } = require("constants");

let arr_toystory = [ 'Buzz', 'Woody', 'Jessie']

let obj_toystory = { 
	Firstname: 'Buzz',
    Lastname: 'Lightyear',
    members : {},
    addFamily: function(age, name, role){
    	this.members[role] = {
        	age: age,
            name: name
        };
    },
    getHeadcount: function(){
    	return Object.keys(this.members).length;
    }
};

//불러오기(접근)
console.log(arr_toystory[0]);
console.log(obj_toystory['Firstname']);
console.log(obj_toystory.Firstname);


// 객체에 값 넣기
obj_toystory.addFamily('Secrit', 'Woody' , 'cowboy');
obj_toystory.addFamily('Secrit', 'Jessie' , 'cowgirl');

console.log(obj_toystory.members) //일반 값을 호출할 땐 ()사용 안함
console.log(obj_toystory[members]) // 객체 내 객체는 호출이 안됨.
console.log(obj_toystory.getHeadcount()); //함수를 호출할 땐 ()를 사용


// 객체에 접근하기
var printMembers = function() {
    var members = obj_toystory.members; //토이스토리 객체 안의 members 키
    for (role in members) { //member 객체 안에 role이라는 키
        console.log(`role: ${role}, age: ${members[role].age}, name: ${members[role].name}`);
        //members.role.name 은 안된다.
        //this.role.name도 안된다. -> 이건 내가 this에 대해 잘 몰라서 그런 듯
    }
};
printMembers();


//새로운 멤버 추가
var members = obj_toystory.members
members.dog = {age: 'unknown', name:'slinky'}
console.log(obj_toystory.members)


//삭제
delete members.cowgirl;
console.log(members);

delete arr_toystory[2];
console.log(arr_toystory);


//단축속성명 ES6
var Firstname2 = 'Buzz'
var Lastname2 = 'Lightyear'
var members2 = {}
var addFamily2 = function(age, name, role){
    	this.members[role] = {
        	age: age,
            name: name
        }
    }
var getHeadcount2 = function(){
    	return Object.keys(this.members).length
    }

// 각각의 변수로 선언된 변수값들을 하나의 객체로 모으자!
var obj_toystory2 = {Firstname2, Lastname2, members2, addFamily2, getHeadcount2}
console.log(obj_toystory2)



//속성계산명
var obj ={}; //객체생성
for (var i = 0; i < 4; i++){
    obj['key' + i] = i;
}
console.log(obj);
// 동적으로 프로퍼티키를 변경하면서 생성할 수 있다.

var profile = 'buzz:95'
var toy = {
    [profile] : true,
    name: profile.split(':')[0]   
};
console.log(toy);


// 비구조화할당
var ojb = {a:1, b:2, c:3}

var {a, c} = obj;
console.log(a);
console.log(c);
