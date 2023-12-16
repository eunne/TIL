# 5ways to align items

# align block

- Use 'margin : auto'

- block이란 의미는 (like 'div' tag) 한 줄 전체를 차지하는 박스이므로 박스크기 외에는 마진으로 빈 공간이 남아있다.
- 그래서 margin : auto를 해주면 마진이 고르게 분포되면서 가운데 정렬도 바뀐다.

![marginauto](/img/marginauto.png)

<br>

# centering inline

- 수평정렬: Use 'text-align: center'
  <br>
  'text'이지만 inline요소도 가로 center로 정렬시켜 준다.

- 수직정렬: tricky한 방법인데, 높이를 부모 박스의 100%로 맞춘 후에, 텍스트 박스간의 줄간 간격을 부모 박스 높이와 동일하게 설정한다.

```
text {
 height: 100%
 line-height: 100px
}
```

![centeringinline](/img/centeringinline.png)

<br>

# translate

- inner box를 parent box의 중간으로 이동시키기
- inner box의 기존 자리를 유지하면서 이동시키기 : use relative

<br>

- relative: parent box의 50%
  ![transform](/img/transform1.png)

```
.inner {
        width: 80px;
        height: 80px;
        background-color: blue;
        position: relative;
        top: 50%;
        left: 50%;
      }
```

- transform: 내 box 크기의 50%
- transform은 요소 자체를 움직일 수 있음

![transform](/img/transform2.png)
![transform](/img/transform3.png)

```
.inner {
        width: 80px;
        height: 80px;
        background-color: blue;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
```

<br>

# flex box

- parent box에 선언해야함. 그래야 inner box가 정렬됨.
- display 사용
- justify-content: 수평정렬
- align-items: 수직정렬

```
.box {
        width: 200px;
        height: 200px;
        background-color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
      }
```
