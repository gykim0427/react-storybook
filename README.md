# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# React 프로젝트 Storybook 툴 배포 테스트
React 프로젝트 Storybook 툴 배포 테스트
## 개발환경
1. IDE
- VS Code
2. 개발언어
- TypeScript
3. API / 라이브러리
- React
- Storybook
- Chromatic
4. 빌드도구
- Vite
## 가이드
1. Vite + React 프로젝트 생성
	1) npm create vite@latest [project_name]
	2) typescript 선택
2. Storybook 설치
	1) StoryBook 설치
		- npx storybook@latest init 
	2) Storybook 설정 자동 초기화
		- npx sb init
	3) Storybook 실행 (node.js 18버전 이상)
		- npm run storybook
	4) Storybook addone 설치
		- npm install @storybook/addon-designs --save-dev
	5) Storybook 실행
		- npm run build-storybook
3. Chromatic 설치
	1) Chromatic 설치 
		- npm install -D chromatic
	2) Chromatic 사이트 접속
		- https://www.chromatic.com/start?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook
	3) 깃 계정 인증
	4) 사용할 깃 레포지토리 선택
	5) storybook 선택
	6) storybook 빌드
		- npm run build-storybook
	7) git 초기화 / 커밋
		- git init
		- git add .
		- git commit -m "message comments"
	8) 부여 받은 고유 project-token 명령어 실행
		- npx chromatic --project-token=[project-token]
	9) storybook uuid 링크 -> 팀과 공유하여 피드백
		- "https://67a5aa~~~~~ckve.chromatic.com/" 와 같은 형식
	10) github 무료 CI 서비스 설정
		- github actions 추가
	11) 프로젝트 root 폴더에 root/.github/workflows 디렉토리 생성
	12) workflows폴더에 chromatic.yml 파일 생성
		- projectToken secret관리를 위해 깃허브 repository > Settings > Secret and Valriables > Action > Repository sectrets > New repository secret 버튼 클릭
			. Name : CHROMATIC_PROJECT_TOKEN
			. Secret : 위에서 부여 받은 project-token 입력
4. 버전 관리
	1) Git (프로젝트 히스토리) 반영
		. git pull & push
	2) Chromatic	(UI Design 히스토리) 반영
		- npx chromatic --project-token=[project-token]

** Chromatic / git 비교
	- storybook에서 로드하는 모든 컴포넌트, 스타일 변경 추적
** Chromatic UI반영 비교
	- 수정된 컴포넌트, 스타일 육안으로 확인
** UI 품질 보장
	- Build & Accept 과정을 통해 반영된 디자인 검토
	- 피드백(댓글 등)
** 선git반영/후chromatic반영 이유?
	- 소스코드와 UI 변경이력을 일관되게 유지하기 위해
	- git에 반영하지 않으면 다른 팀원과 공유하지 못함reset

