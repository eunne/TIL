# CSS?

- 웹페이지의 스타일링을 담당!
- 내가 꾸며주고자 하는 부분을 잘 선택할 수 있도록 선택자를 잘 사용해야함.

```css
선택자 {
	속성1: "속성값1";
	속성2: "속성값2";
}
```

<br>

## CSS 사용하는 여러방법들

- style tag로 사용
    
    ```css
    <style>contents</style>
    ```
    

- css + html linking
    
    별도 css파일 만든 후, html에서 css주소 가져오기
    

- inline styling: 태그 안에서 바로 적용
    
    ```css
    <tag style="값:속성;">contents</tag>
    ```

<br>    

# CSS 특징

![css1.png](/img/css1.png)

- **cascading** style sheets: **우선순위가 있는** 스타일 시트
- 두가지 이상의 스타일이 있을 때, 어떤 우선순위에 따라 적용할지 결정
    
    ![css1-1](/img/css1-1.png)
    
    사용자가 정의한 스타일 > 코드 > 브라우저 순으로 우선순위가 높다.

    
<br>

## ❗구체적일 수록 우선순위가 높다.

![css2.png](/img/css2.png)

- !important: cascading을 무시하고 내가 가장 짱이야!라고 말하는 것. 체계를 무시하므로 안좋음!
- 인라인: 태그 바로 안에서 명시한 것
- 아이디: 클래스보다 더 명확하게 지정해주는 것
- 클래스
- 태그

- 동일한 레벨에서는 가장 최근에 작성한 스타일이 우선순위가 높음
- 이전에 정의한 값을 재정의하지 않았다면, 이전 값은 유효하다.

  
<br>
