# 👀투두리스트 (TodoList) 원데이 프로젝트

![image](https://github.com/user-attachments/assets/b7c5bae7-bef4-43cd-bd38-25ad90ae0786)


- 배포 URL : https://react-todo-list-olive-nu.vercel.app/

## 프로젝트 소개

- 사용자가 해야 할 일들을 효율적으로 관리할 수 있도록 돕는 간단한 투두리스트 애플리케이션입니다.
- 사용자 친화적인 인터페이스를 통해 일정을 계획하고 목표를 달성할 수 있도록 설계되었습니다.

## 팀원 구성

 

- 이성훈

## 1. 개발 환경

 

- Front : HTML, CSS, Typescript, React, Recoil
- Version & Issue Management : Github
- Tools : Notion
- Service : Vercel

## 2. 프로젝트 구조

 

```
📦src
 ┣ 📂components
 ┃ ┣ 📂TodoContainer
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜NoTodo.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┗ 📂TodoItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┣ 📂constants
 ┃ ┗ 📜constants.ts
 ┣ 📂lib
 ┃ ┗ 📜localStorage.ts
 ┣ 📂pages
 ┃ ┣ 📜HomePage.tsx
 ┃ ┗ 📜style.css
 ┣ 📂utils
 ┃ ┗ 📜generateId.ts
 ┣ 📜global.css
 ┣ 📜main.tsx
 ┣ 📜reset.css
 ┣ 📜types.ts
 ┗ 📜vite-env.d.ts
```

## 3. 개발 기간

 

### 개발 기간

- 전체 개발 기간 : 2024-09-04  - 2024-09-04

## 4. 신경 쓴 부분

 

- 디렉토리 구조 : index.tsx 파일의 import 경로 단축을 이용해 import문을 간결하게 만들어 코드의 가독성을 향상시켰습니다.
- 디자인 : CSS의 기본 색상만을 활용하여 개발 속도를 높이면서도 깔끔하고 심플한 디자인을 구현했습니다.
- UX : 사용자 경험을 고려한 직관적인 인터페이스를 설계했습니다.
- class의 정적 메서드를 이용한 LocalStorage 저장을 통해 코드의 가독성을 향상시켰습니다.

## 5. 페이지별 기능

 

- HomePage
    - 할 일을 추가, 제거, 수정할 수 있습니다
- DetailPage (추가 예정)

## 6. 트러블 슈팅

 

- 절대 경로 설정 - 절대 경로를 사용하고 싶었지만 baseUrl과 path 설정이 원하는 대로 적용이 안됐습니다.
이후 타 프로젝트(ContactList)에서 tsconfig.json이 아닌 tsconfig.app.json에 등록해줘야 한다는 사실을 알게 되었습니다.

## 7. 개선 목표

 

- DetailPage 추가
- DB 추가
- 소셜 로그인

## 8. 프로젝트 후기

 

### 이성훈

이번 원데이 프로젝트에서는 TodoList 애플리케이션을 개발했습니다. 하루라는 짧은 시간 안에 Typescript와 React를 활용하여 기본적인 CRUD 기능을 구현하였으며, 이를 통해 Typescript에 대한 이해도를 높일 수 있었습니다.

작업 중에는 절대 경로 설정 문제로 인해 경로 설정이 원활하게 되지 않는 어려움이 있었지만, 이후에 tsconfig.app.json에 올바르게 등록하는 법을 알게 되어 앞으로는 마음껏 적용할 수 있게 되었습니다.

앞으로 기회가 된다면 DetailPage와 데이터베이스 연동, 소셜 로그인 기능을 추가하여 애플리케이션을 더욱 완성도 높게 개선할 예정입니다. 이번 프로젝트를 통해 짧은 시간 안에 집중적으로 작업하는 방법과 Typescript의 활용법을 더 깊이 있게 배우는 좋은 기회가 되었습니다.
