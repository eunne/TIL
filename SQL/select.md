# select

```
SELECT * FROM copang_main.memeber;
```

- '\*' : 모든 column을 가져와라

# Where

- 원하는 row만 선택

# 이 중에 있는

## 1. BETWEEN A AND B

## NOT BETWEE A AND B

- expcet bt a and b
- 연속된 데이터 범위를 선택할 때 사용

```
SELECT * FROM member WHERE sign_up_day NOT BETWEEN '2013-01-01' AND '2015-01-01';
```

## 2. IN

- 나이가 딱 20, 30 이렇게 원하는 조건만 선택할 때
- 조건문이 길어질 때 or 대신에 사용할 수 있음

```
SELECT * FROM member WHERE age IN (20,30);
```

# 한 글자를 나타내는 \_ / 임의의 길이를 나타내는 %

```
SELECT * FROM member where email LIKE 'c_____@%';
```

- 이메일주소가 c로 시작하고 그 뒤에 여섯글자가 있는
  row를 조회할 때.

# like

-

```
SELECT * FROM member WHERE address LIKE '%고양%';
```

# 같지않음 (!=. <>)

# And > Or

- and 우선순위가 더 높음
- 따라서 먼저 실행하기 원하는 조건을 괄호로 씌워줄 것
