# 01. Function

- 코드조각 (a piece of code)
- 한번 작성한 것으로 계속 다시 쓸 수 있음
    - write once and reuse over and over
    - ex) print() → 값을 콘솔에 출력하기 위해 만들어 놓은 function

<br>

# 02. How to write Functions?

```python
1. function 작성
def function_name():
	print("hello how r u?")
```

1. def: Function을 정의해준다. (definition)
2. function_name을 적는다. (same as variable)
3. function_name 옆에 “():” 을 넣어준다.
4. 반복해서 사용하고 싶은 코드를 적어준다.

<br>

# 03. How to work?

```python
2. 실행
function_name()
```

- function이름 옆에 ()를 붙인다.
- 괄호 = 실행버튼” 이라고 생각하면 된다.

<br>

# 04. function에 데이터를 넣는 방법 (indentation)

```python
def function_name():
	print("hello how r u?") -> fucntion_name 안에 있음

print("say hi") -> function_name과 관계 없음
```

- 다른 언어들은 공백에 대한 규칙이 없음 (대신 중괄호{}를 씀)
- 대신 python은 공백(들여쓰기, indentation)라는 규칙이 있음(중요)
    - 공백을 통해 어떤 것 안에 어떤 것이 있는지 이해함.

<br>

# 05. function에 데이터를 보내는 방법 (Parameters)

```python
def function_name():
	print("hello how r u?")

function_name("eunne")
```

1. function_name() : 괄호 안에 데이터를 넣으면 이 데이터를 function으로 보내는 것임
2. function에서 해당 데이터를 받기 위한 공간을 갖고 있어야함. 하지만 지금은 갖고 있지 않음

```python
def function_name(**user_name**):
	print("hello how r u?")

function_name("eunne")
```

1. function을 만들 때, 위와 같이 ‘user_name’이라는 데이터가 들어갈 공간(space)을 제공해야함. 
    
    해당 변수는 function안에서만 작동하기 때문에 밖에서 user_name이라는 변수를 호출해도 안 나옴.
    

```python
def function_name(**user_name**):
	print("hello", **user_name,** "how r u?")

function_name("eunne")

console: hello eunne how r u?
```

1. function에 user_name을 어떻게 출력할지 넣어줌.
