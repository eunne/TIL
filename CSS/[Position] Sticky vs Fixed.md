# Description

- 아래 두 postion은 스크롤링 할 때 상자의 위치를 고정시켜 화면 밖으로 나가지 않도록 고정할 수 있다.

<br>

# sticky

- sticky는 relative랑 비슷함
- 기존 문서 flow를 유지한 상태로 스크롤링 시 지정한 위치에 고정 됨 (단, 고정할 위치값을 꼭 정해줘야함. 안 정해주면 고정 안됨.)
- 그래서 기존 문서 flow가 재배치 되지 않음

![sticky](/img/sticky.png)

<br>

# fixed

- fixed는 absolute랑 비슷함
- 기존 문서 flow에서 빠져나와 지정된 위치에 고정 됨
- 그래서 기존 문서 flow가 재배치됨

![fixed](/img/fixed.png)

<br>

## fixed and absolute

![fixed and absolute](/img/fixed and absolute.mov)

<br>

# Reference

https://developer.mozilla.org/en-US/docs/Web/CSS/position
