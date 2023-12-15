```html
<body>
  <div class="outer">
    <div class="box">
      <div class="inner inner1">inner1</div>
      <div class="inner inner2">inner2</div>
      <div class="inner inner3">inner3</div>
    </div>
  </div>
</body>
```

# position

![position](/img/position.png)

![position2](/img/position2.png)

- 문서는 코드를 작성한 순서대로 보여진다.
    
    div1,2,3 순서대로 작성했으니 보여지는 것도 1,2,3 순서로 보여짐.
    
- position 기본값 : static

<br>

# relative

![relative](/img/relative.png)

![relative2](/img/relative2.png)

- 기존 문서의 위치에서, 상대적으로 설정한 값만큼 이동한다. (부모 = box)
- inner2는 이동했지만, inner3은 기존 Inner2의 flow를 인식하여 그대로 자리를 유지하고 있다.

<br>

# absolute

![absolute](/img/absolute.png)

![absolute2](/img/absolute2.png)

- 기존문서 flow에서 빠져나옴 → body가 부모가 되므로 body를 기준으로 이동.
- 이에 따라 inner3이 이동함 (즉, 기존 inner2가 있던 문서의 요소들의 재배치가 일어남)
- 부모의 100%로 크기를 설정했기 때문에, inner2의 크기가 body의 100%로 설정됨. (가장 근접한 부모 중에서 Position이 static이 아닌 부모를 기준으로 설정됨)
- 따라서, 특정 부모를 기준으로 absolute를 설정하고 싶다면, 해당 부모의 Postion을 relative로 바꿔줘야 함.

<br>

# ❗ position vs absolute 정리

- postiion은 기존 문서 flow그대로 유지
- 기존 문서의 위치에서 상대적으로 이동함

- absolute는 기존 문서 flow에서 빠져나옴
- position: relative인 부모를 기준으로 이동함
