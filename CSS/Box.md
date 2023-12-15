# box의 구성

- box는 총 4개의 영역으로 구성되어 있다.
    
    안쪽에서부터 바깥쪽으로 content → padding → border → margin
    

- 기본적으로는 content를 기준으로 박스사이즈가 결정된다.
    - padding: border를 기준으로 안쪽으로 생기는 여백
    - margin: border를 기준으로 바깥쪽으로 생기는 여백

<br>

# box사이즈 유지하는 방법 (padding, border영향 안 받는법)

- padding과 border값으로 인해 box사이즈가 변하는게 싫다면 box-sizing을 border box로 지정한다.
    
    이게 유지보수에도 좋고 현업에서도 이걸 더 많이 사용한다.
    
- 만약 box-size가 변하게 되면, 그 옆에 있는 요소들이 밀리게 되므로 설정해놓은 페이지의 구조가 바뀌게 되는 불상사가 발생한다.

- 통상적으로 padding을 넣는다는 것은 박스 안에 여백을 넣겠다는 의미인데 (즉, 박스사이즈는 그대로 유지) padding을 넣었는데 박스사이즈가 커지는 경우가 있다.
    
    이때는 box-sizing 속성을 border-box로 설정해줘야 한다.
    
- box-sizing 속성 사용시
    - content-box : 기본값, content가 박스사이즈가 된다.
    - border-box : padding과 border를 포함해서 박스사이즈가 결정된다.

- 아래보면, box1은 border-box를 설정했기때문에 안쪽으로 padding이 적용되 박스사이즈가 그대로지만
    
    box3은 content-box를 설정했기 때문에 padding이 바깥으로 적용되서 박스사이즈가 커졌다.
    

![box1](/img/box1.png)
box1: border-box 설정

![box3](/img/box3.png)
box3: content-box로 설정

```html
<style>
      div {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        background-color: chocolate;
      }
      .box1,
      .box3 {
        padding: 20px;
        border: 5px solid black;
      }

      .box1 {
        box-sizing: border-box;
      }

      .box3 {
        box-sizing: content-box;
      }
    </style>
```
