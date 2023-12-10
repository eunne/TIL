# Box Model

총 4개의 영역으로 안쪽에서부터 바깥쪽으로 content → padding → border → margin으로 구성되어 있다.

기본적으로는 content를 기준으로 박스사이즈가 결정된다.

- padding: border를 기준으로 안쪽으로 생기는 여백
- margin: border를 기준으로 바깥쪽으로 생기는 여백

<br>

통상적으로 padding을 넣는다는 것은 박스 안에 여백을 넣겠다는 의미인데 (즉, 박스사이즈는 그대로 유지)<br>
padding을 넣었는데 박스사이즈가 커지는 경우가 있다.

이때는 box-sizing 속성을 border-box로 설정해줘야 한다.

box-sizing 속성 사용시
- :content-box -> 기본값, content가 박스사이즈가 된다.
- :border-box -> padding과 border를 포함해서 박스사이즈가 결정된다.


<Br>

# Ref
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
