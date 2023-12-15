


# 구체적일수록 우선순위가 높다.
![cascading3](/img/cascading3.png)

- !important: cascading을 무시하고 내가 가장 짱이야!라고 말하는 것. 체계를 무시하므로 안좋음!
- 인라인: 태그 바로 안에서 명시한 것
- 아이디: 클래스보다 더 명확하게 지정해주는 것
- 클래스
- 태그

<br>

## inline tag > id > class > tag 순서로 css 속성이 적용되는 것을 확인할 수 있다.
![cascading1](/img/cascading.png)

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
![cascading2](/img/cascading2.png)

1. `button`에 대한 배경색을 `blue`으로 정의
2. 그 이후 `button`에 대한 배경색을 `yello`로 정의
3. **최종 결과값**은 `yello`으로 나옴

<br>

# 이전에 정의한 값을 재정의하지 않았다면, 이전 값은 유효하다.
4. 하지만, **글자색**에 대해서는 **‘재정의’하지 않았기 때문에** 기존과 동일하게 `white`로 나옴



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
