# Front-end Roadmap 2021

## 1. Internet

### 1. How does the internet work?

* `Internet`: 웹의 핵심적인 기술이면서  컴퓨터들이 서로 통신하는 거대한 네트워크
* `Router`: 컴퓨터에서 보낸 메세지가 올바른 대상의 컴퓨터로 도착하는지 확인한다
* `Modem`: 장거리 네트워크를 가능하게 해주는 '전화선'을 사용하는 장치
* `ISP(Internet Service Provider)`: 인터넷 서비스 제공업체 ex) KT, SKT, LG

### 2. What is TCP/IP?

* `Transmission Control Protocol` (전송 제어 규약)
* `Internet Protocol` (인터넷 규약)
* ex) 주문을 하고, 상점에 가고, 또 여러분의 상품을 살 수 있게 해주는 ***운송 장치***와 같습니다.

### 3. What is HTTP?

* `Hypertext Transfer Protocol `(하이퍼텍스트 전송 규약)
* 클라이언트와 서버가 서로 통신할 수 있게 하기 위한 언어를 정의하는 어플리케이션 규약
* ex) 여러분의 상품을 주문하기 위해 여러분이 사용하는 ***언어***와 같습니다.

### 4. DNS and how it works?

* `Domain Name System Servers`: 웹사이트를 위한 주소록
* 브라우저는 웹사이트를 검색하기 전에 DNS를 살펴본다.
* ex) 이것은 여러분이 접근하기 위해 상점의 ***주소를 찾아보는 것***과 같습니다.

### 5. Browsers and how they work?

* 정보는 텍스트, 이미지 및 비디오가 웹에서 전송되는 방법을 정의하는 ```HTTP```을 사용하여 전송됩니다. 이 정보는 전 세계 어디에서나 브라우저를 사용하는 사람들이 정보를 볼 수 있도록 일관된 형식으로 공유 및 표시할 필요가 있다.
* 하지만 모든 브라우저들은 포맷을 같은 방식으로 해석하지 않는다. 이 말인 즉슨 다른 웹 브라우저를 사용하면 사용자에게 웹사이트가 다르게 보이고 동작할 수 있다는 것이다. 브라우저 간 일관성을 만들어 선택한 브라우저가 무엇이든 상관없이 인터넷을 할 수 있게 하는 것을 ```web statandards```이라고 한다.
* ```Hyperlinks```를 사용하면 웹의 다른 페이지 또는 사이트로 이동할 수 있습니다. 모든 웹 페이지, 이미지 및 비디오에는 웹 주소라고도 하는 고유한 ````URL(Uniform Resource Locator)```이 있습니다. 브라우저가 데이터를 위해 서버를 방문할 때, 웹 주소는 브라우저에게 html에 설명된 각 항목을 찾을 위치를 알려주고, 그 다음 브라우저가 웹 페이지에서 어디로 가는지 알려준다.
* 웹 사이트는 사용자에 대한 정보를 ```cookies```라는 파일에 저장합니다. 다음 번에 해당 사이트를 방문할 때 컴퓨터에 저장됩니다. 돌아오면 웹 사이트 코드가 해당 파일을 읽어 해당 파일이 사용자인지 확인합니다. 예를 들어, 웹 사이트로 이동하면 페이지는 쿠키에 의해 가능한 사용자 이름과 암호를 기억한다.

### 6. What is Domain Name?

* 컴퓨터는 숫자로 된 주소를 쉽게 처리 할 수 있지만 사람들은 서버를 실행하는 사람이나 웹 사이트에서 제공하는 서비스를 파악하기가 어렵다. 이러한 모든 문제를 해결하기 위해 ```domain name```이라는 사람이 읽을 수있는 주소를 사용한다.
*  `com`이라고 하는 것을 조금 어려운 말로 TLD라고 한다. 도메인의 가장 끝 쪽에 위치하면서, 그 목적이나 종류 또는 등록자가 소속되어 있는 국가를 나타낸다. 
* TLD를 관심 있게 살펴볼 경우, 사이트에 접속하지 않고도 어떤 사이트일지 추측해볼 수 있다.  앞서 설명한 `com`은 ‘commercial’를 의미하며 일반 상업 목적으로 등록되는 도메인이다.

### 7. What is hosting?

* 웹 호스팅은 조직과 개인이 웹 사이트나 웹 페이지를 인터넷에 게시할 수 있도록 하는 서비스이다.
* 웹 사이트는 서버라고 하는 특수 컴퓨터에 호스트되거나 저장됩니다. 인터넷 사용자가 웹 사이트를 보고 싶을 때 웹 사이트 주소나 도메인을 브라우저에 입력하기만 하면 됩니다. 그러면 컴퓨터가 서버에 연결되고 웹 페이지가 브라우저를 통해 서버로 전달된다.
