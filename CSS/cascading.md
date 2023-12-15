# 구체적일수록 우선순위가 높다.

![cascading1](/img/cascading1.png)

- inline tag > id > class > tag 순서로 css 속성이 적용되는 것을 확인할 수 있다.

```html
    <style>
        h1 {
          font-size: 16px;
        }
        button {
          background-color: blue;
          color: white;
        }
        .special {
          background-color: blueviolet;
        }
        #primary {
          background-color: pink;
        } 
    </style>
```

```html
<body>
    <h1>Cascading을 확인하는 버튼들</h1>
    <button>태그 버튼</button>
    <button class="special">클래스 버튼</button>
    <button class="special">클래스 버튼</button>
    <button class="special" id="primary">클래스+아이디 버튼</button>
    <button class="special" id="primary" style="background-color: aqua;">클래스+아이디 버튼</button>
  </body>
```

<br>

# 동일레벨에서는 가장 최근 스타일로 적용된다.

```css
<style>
        h1 {
          font-size: 16px;
        }
        **button {
          background-color: blue;
          color: white;
        }**
        .special {
          background-color: blueviolet;
        }
        #primary {
          background-color: pink;
        }
        **button {
          background-color: yellow;
        }**
```

![cascading2](/img/cascading2.png)

1. `button`에 대한 배경색을 `blue`으로 정의
2. 그 이후 `button`에 대한 배경색을 `yello`로 정의
3. **최종 결과값**은 `yello`으로 나옴
4. 하지만, **글자색**에 대해서는 **‘재정의’하지 않았기 때문에** 기존과 동일하게 `white`로 나옴
