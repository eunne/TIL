# list []

- 대괄호[] 안에 쉼표로 분리하여 값을 기재
- 특징: 데이터 가공 시 좋음, 변수 내 데이터를 직접 수정 및 변경 (modify = mutate)할 수 있음
- 정렬된 리스트 제공 ((ordered items, and mutable)

![list](/img/list.png)

- append : 아이템을 추가
- 특정 데이터에 접근: list만들 때 처럼 []를 열고, index number를 적으면 됌
- reverse : 순서를 변경
- clear : 전체삭제

  <br>

# 각각의 list 값에 변수를 일괄로 할당하는 법

```python
animals = ["dog", "cat", "monkey"]

pink, blue, black = animals

console:
pink = "dog"
blue = "cat"
black = "monkey"
```

- 리스트 안에 있는 값들을 각각의 변수에 할당하고 싶을 때, 리스트 길이와 동일한 변수들을 콤마로 구분해서 넣어주면, 자동으로 각 변수에 각 위치에 있는 값들을 할당해준다.

```python
animals = ["dog", "cat", "monkey"]

pink, blue, _ = animals

console:
pink = "dog"
blue = "cat"
_ = "monkey"
```

- 각각의 값 중에서 무시하고 싶은 내용이 있으면 변수명을 ‘_’로 넣으면 된다.

<br>

# 리스트에서 값을 빼거나 분리하고 싶을 때, pop, [:]

```a = [1, 2, 3, 4, 5, 6]

a.pop(0) => [2, 3, 4, 5, 6]
a[0:2] => [0,1]
a[1:-1]=> [2, 3, 4, 5]
```
<br>
- pop: 은 인덱스 넘버에 있는 숫자를 제거한다.<br>
- [ : ]는 [리스트 시작 인덱스 : 로부터 count ]
