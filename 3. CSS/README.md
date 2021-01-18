# Front-end Roadmap 2021

## 3. CSS

### 1. Learn the basics [#](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

------

### 2. Making Layouts 

#### 	1. Floats [#](https://ofcourse.kr/css-course/float-%EC%86%8D%EC%84%B1) [#](https://webclub.tistory.com/606)

`float` 라는 단어는 원래 ‘뜨다’ 라는 의미이며, 원래 웹페이지에서 **이미지**를 어떻게 띄워서 텍스트와 함께 배치할 것인가에 대한 속성입니다.

- `inherit`: 부모 요소에서 상속
- `left`: 왼쪽에 부유하는 블록 박스를 생성. 페이지 내용은 박스 오른쪽에 위치하며 위에서 아래로 흐름.
- `right`: 오른쪽에 부유하는 블록 박스를 생성. 페이지 내용은 박스 왼쪽에 위치하며 위에서 아래로 흐름. 이후 요소에 clear 속성이 있으면 페이지 흐름이 달라짐. none 이 아니라면 display 속성은 무시된다.
- `none` - 요소를 부유시키지 않음

#### clear - floating 해제 기법

* 여기서 **"float 을 해제한다"** 는 의미는 float 이 적용된 요소를 해제하는 것이 아니라
  clear 속성을 적용해 float 의 영향을 받지 않도록 한다는 의미입니다.

* 플롯을 해제하는 방법 중에 전 세계적으로 통용되는 이름(관용적인 기법의 이름)으로 `clearfix` 라는 방법이 있습니다.



------

#### 	2. Positioning [#](https://joshua1988.github.io/web-development/css/layout-basic/)

`포지션(position)` 속성은 해당 엘리먼트가 페이지에 어떻게 위치할지를 지정하는 속성입니다. 

- `static` : 스태틱(static)은 기본 값입니다. 엘리먼트에 따로 값을 지정하지 않는다면 스태틱 값을 갖게 됩니다. 스태틱 값은 위치가 지정되지 않았다는 의미이기도 합니다.
- `relative` : 랠러티브(relative)는 `top`, `right`, `left`, `bottom`과 같은 속성을 주지 않으면 스태틱과 동일하게 위치합니다. 만약 `top: -20px; left: 20px`과 같은 속성을 주면 위로 20px 왼쪽으로 20px 떨어진 곳에 엘리먼트가 위치하게 됩니다. 이때 생성된 간격은 다음 엘리먼트의 위치에 영향을 주지 않습니다.
- `fixed` : 고정(fixed) 엘리먼트는 사용자에게 비춰지는 화면을 기준으로 위치가 지정됩니다. 페이지가 스크롤 되거나 페이지 크기가 축소, 확대되어도 동일한 위치에 남아 있습니다. 만약 아래와 같이 스타일을 작성하면 페이지 우측 하단에 고정된 엘리먼트가 표시됩니다.



------

#### 	3. Display [#](https://joshua1988.github.io/web-development/css/layout-basic/)

`display` 속성은 페이지의 레이아웃을 결정하는 속성입니다. 모든 HTML 엘리먼트는 `display` 값을 갖고 있으며 대부분 `block` 아니면 `inline` 입니다.

- `block` : 블록 엘리먼트는 기본적으로 하나의 줄을 차지하고 가능한 최대의 가로 넓이를 가집니다. 대표적인 태그에는 `div`, `p`, `form`, `header`, `section` 등이 있습니다.
- `inline` : 인라인 엘리먼트는 특정 텍스트를 감싸는 형태의 디스플레이 속성입니다. 대표적인 태그에는 `span`, `a` 등이 있습니다.
- `inline-block` : 인라인 블록 엘리먼트는 줄 바꿈 없이 다른 인라인 엘리먼트와 나란히 배치되는 디스플레이 속성입니다. 대표적인 태그에는 `button`이 있습니다.
- `flex` : 화면의 비율을 기준으로 레이아웃을 구성할 수 있는 최신 레이아웃 속성입니다. 복잡한 레이아웃을 구성할 때 직관적인 속성들로 더 쉽게 구성할 수 있습니다.
- `none` : 논(none) 엘리먼트는 화면에 표시되지 않습니다. 대표적으로 `script` 태그가 있습니다. `visibility` 속성과는 다르게 논 엘리먼트는 화면에 해당 요소에 대한 공간을 차지하지 않습니다.

#### 박스레이아웃

```css
strange {
  width: 500px;
  padding: 20px;
  box-sizing: border-box;
}
```

`box-sizing` 속성을 활용하면 패딩, 보더 등의 속성 값을 넓이에 반영하지 않습니다. 따라서, 위 코드의 결과는 넓이가 540px인 엘리먼트가 아니라 넓이가 500px인 엘리먼트입니다. 물론 `padding` 속성의 값은 넓이가 500px인 엘리먼트의 내부에 적용됩니다.

이러한 이유로 CSS 코드를 작성할 때 아래와 같은 코드를 추가하고 시작하는 경우가 많습니다.

```css
* {
  box-sizing: border-box;
}
```

페이지의 모든 엘리먼트에 동일한 박스 레이아웃 컨셉을 적용하면 레이아웃을 잡기가 더 수월해집니다.

#### 	

#### 	4. Box Model [#](http://www.tcpschool.com/css/css_boxmodel_boxmodel) [#](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

모든 HTML 요소는 박스(box) 모양으로 구성되며, 이것을 박스 모델(box model)이라고 부릅니다.

박스 모델은 HTML 요소를 패딩(padding), 테두리(border), 마진(margin), 그리고 내용(content)으로 구분합니다.

* **패딩 영역(padding)**은 안쪽 여백 경계(padding edge)가 감싼 영역으로, 콘텐츠 영역을 요소의 안쪽 여백까지 포함하는 크기로 확장합니다. 영역의 크기는 안쪽 여백 박스 너비와 안쪽 여백 박스 높이입니다.
* **테두리 영역(border)**은 테두리 경계(border edge)가 감싼 영역으로, 안쪽 여백 영역을 요소의 테두리까지 포함하는 크기로 확장합니다. 영역의 크기는 테두리 박스 너비와 테두리 박스 높이입니다.

* **바깥 여백 영역(margin)**은 바깥 여백 경계(margin edge)가 감싼 영역으로, 테두리 요소를 확장해 요소와 인근 요소 사이의 빈 공간까지 포함하도록 만듭니다. 영역의 크기는 바깥 여백 박스 너비와 바깥 여백 박스 높이입니다.
* **콘텐츠 영역(content)**은 콘텐츠 경계(content edge)가 감싼 영역으로, 글이나 이미지, 비디오 등 요소의 실제 내용을 포함합니다. 콘텐츠 영역의 크기는 콘텐츠 너비(콘텐츠 박스 너비)와 콘텐츠 높이(콘텐츠 박스 높이)입니다. 배경색과 배경 이미지를 가지고 있기도 합니다.



#### 	5. CSS Grid [#](https://studiomeal.com/archives/533) [#](https://www.youtube.com/watch?v=eprXmC_j9A4) [#](https://codepip.com/games/grid-garden/#ko)

- Grid는 두 방향(가로-세로) 레이아웃 시스템 (2차원)

![image](https://user-images.githubusercontent.com/24728385/104924273-8db61980-59e0-11eb-9cc6-0b31b77750d5.png)



#### 6. Flex Box [#](https://studiomeal.com/archives/197) [#](https://www.youtube.com/watch?v=7neASrWEFEM)

- Flex는 한 방향 레이아웃 시스템 (1차원)

------

### 3. Responsive design and Media Queries [#](https://www.codingfactory.net/10534) [#](https://nykim.work/84)

* 웹사이트의 레이아웃을 만들 때 방문자가 사용하는 모니터의 화면 해상도를 고려해야 합니다. 너무 크게 가로폭을 만들면 작은 해상도의 모니터로 접속했을 때 가로 스크롤이 생겨 컨텐츠를 보는 게 불편하기 때문입니다.

* 특히 스마트폰이나 태블릿 등 모바일 기기는 화면이 작기 때문에 가독성에 더욱 신경써야 합니다.

* 이러한 문제를 해결하는 방법 중의 하나가 반응형 웹디자인입니다. 해상도에 따라 가로폭이나 배치를 변경하여 가독성을 높이는 것입니다.

#### meta 태그 - viewport

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

* 뷰포트(viewport)란, 웹 페이지에서 사용자의 보이는 영역(visible area)를 말합니다. 따라서 이는 기기별로 달라지게 됩니다. 같은 페이지라 하더라도 모바일과 태블릿은 화면 크기가 다르기 때문에 사용자가 볼 수 있는 범위가 다르니까요. 즉, 이 태그는 뷰포트를 지정해주는 역할을 합니다.

* [네이버 모바일의 마크업](https://m.naver.com/)을 보면 `user-scalable=no`이 지정된 걸 볼 수 있습니다. 즉, 사용자가 줌인이나 줌아웃을 할 수 없도록 막아둔 상태입니다.`minimum-scale`과 `maximum-scale`도 1.0으로 지정했기 때문에 고정된 UI를 항시 보여줄 수가 있습니다.

#### 미디어 쿼리

* 미디어 쿼리는 반응형을 위한 기본이자 핵심입니다. 잘 활용하면 어떤 디바이스에서도 예쁜 웹 페이지를 만들 수 있어요.

* `media`라는 키워드로 사용하며, 아래는 미디어 쿼리를 활용한 예시입니다.

```css
.title {
  font-size: 40px;
}
 
@media (max-width: 600px) {
  .title {
    font-size: 20px;
  }
}
```

* 타이틀의 텍스트 크기를 40px로 하되, 600px보다 작은 화면에서는 20px로 줄인다는 내용입니다. 

#### 모바일 퍼스트? 데스크탑 퍼스트?

```css
/* Mobile First */
 
.title { font-size: 12px; }
 
@media (min-width: 640px) {
  .title { font-size: 14px; }
}
 
@media (min-width: 768px) {
  .title { font-size: 16px; }
}
 
@media (min-width: 1024px) {
  .title { font-size: 18px; }
}
```

#### v, 뷰포트를 기준으로 하다

* 이들의 풀네임은 Viewport Width / Viewport Height 입니다. 이름에서 유추할 수 있듯이 뷰포트를 기준으로 한 단위입니다. 뷰포트는 '보여지는 영역'이라고 했으니, 결국 보여지는 영역에서 얼마만큼 차지할 것인지를 지정하는 단위라 할 수 있겠네요.

[추후 공부가 더 필요함..](https://nykim.work/85)