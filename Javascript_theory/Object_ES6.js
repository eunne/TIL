/*//단축속성명 ES6
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
console.log(toy);*/


// 비구조화할당
//객체
var obj = {a:1, b:2, c:3, d:40};

var {a, c} = obj; // var a = 1 을 만듦
var {a:newA =10, f:newF = 50} = obj;
// 값이 undefined인 경우에 해당 할당값을 넣는다. a엔 값이 있으니 무시되고 f엔 값에 없으니 50이 할당된다.


//배열
var arr = [1, 2, 3, 40];

var [a,b, ...rest] = arr; // var a = 1, var b= 2, var rest = 3,40
//배열의 키는 인덱스니까 (즉, 없으니까) []안에 키를 지정해주는 것임.

getArr = [1,2,3,4,5,6];
[a,,c,,e] = getArr;
console.log(c);
// 콤마로 띄어진 값은 가져오지 않는다. 인덱스와 일치하는 값을 가져온다.

