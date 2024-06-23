# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

-    [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

### 🛠️ 문제해결

로그인 조건 달성하면 'welcome.html'로 이동하려는데

```javascript
window.location.href = "welcome.html";
```

위 코드가 계속 405 오류 페이지로 이동해서 이것저것 살펴보다 index.html 파일을 열어보았다.

```html
<button type="submit" class="btn-login">로그인</button>
```

```html
<button type="button" class="btn-login">로그인</button>
```

위 코드 type을 submit > button으로 바꿨더니 해결되었다.
