# shortit
> URL 단축 및 QR코드 생성 및 저장 서비스
<img width="1920" alt="Screenshot 2023-08-25 at 11 35 12 PM" src="https://github.com/DoctorK4/shortit/assets/68728192/afa67fe0-5ad2-43f3-b9c6-af395ec6ad8b">

# 배포 주소
https://drk-shortit.vercel.app/

# stacks
`Next.js`, `Mongo DB`, `Axios`, `react-qr-codes`

# 기능 

## 1. URL 단축
<img width="940" alt="Screenshot 2023-08-25 at 11 35 04 PM" src="https://github.com/DoctorK4/shortit/assets/68728192/09558297-2cec-469b-8070-edff3b0b6e47">
메인화면이나 '/short-links'에서 url을 입력하면 단축 URL을 만들어주고 등록한 내용을 자동으로 저장시켜줍니다. 
특히 '/short-links'에서 저장한 url은 수정 및 삭제가 가능합니다. 

## 2. QR코드 생성
<img width="955" alt="Screenshot 2023-08-25 at 11 34 52 PM" src="https://github.com/DoctorK4/shortit/assets/68728192/5c757ccf-290c-4631-8777-78b162dcc164">
url을 입력하면 QR코드를 생성하고, 그 내용을 저장, 수정, 삭제할 수 있습니다. 

# 구현 포인트

## 1. 서버사이드 렌더링
저장했던 사이트 리스트를 서버사이드렌더링으로 구현하였으며, 삭제나 수정 이후에도 바로 목록이 바뀔 수 있도록 하였습니다. 

## 2. API 인터페이스
Mongo DB의 컬렉션에 URL 내용을 저장하기 위해 요청 시 body 양식과 보내야하는 주소에 대해서 구상하고 구현하였습니다. 
해당 기능을 위한 인터페이스는 'pages/api/'폴더에 있는 각 엔드포인트별 index 및 동적 라우팅 파일을 확인해주시기 바랍니다. 

# file tree
```
📂components
 ┃ ┣ 📜Button.js
 ┃ ┣ 📜Button.module.css
 ┃ ┣ 📜Card.js
 ┃ ┣ 📜Card.module.css
 ┃ ┣ 📜Input.js
 ┃ ┣ 📜Input.module.css
 ┃ ┣ 📜Link.js
 ┃ ┣ 📜Link.module.css
 ┃ ┣ 📜QRCode.js
 ┃ ┣ 📜QRCodeForm.js
 ┃ ┣ 📜QRCodeForm.module.css
 ┃ ┣ 📜QRCodeList.js
 ┃ ┣ 📜QRCodeList.module.css
 ┃ ┣ 📜ShortLinkForm.js
 ┃ ┣ 📜ShortLinkForm.module.css
 ┃ ┣ 📜ShortLinkList.js
 ┃ ┗ 📜ShortLinkList.module.css
 ┣ 📂db
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜QRCode.js
 ┃ ┃ ┗ 📜ShortLink.js
 ┃ ┗ 📜dbConnect.js
 ┣ 📂lib
 ┃ ┣ 📜axios.js
 ┃ ┣ 📜copyToClipboard.js
 ┃ ┣ 📜createShortURL.js
 ┃ ┗ 📜formatDate.js
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂qrcodes
 ┃ ┃ ┃ ┣ 📜[id].js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂short-links
 ┃ ┃ ┃ ┣ 📜[id].js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂qrcodes
 ┃ ┃ ┣ 📜[id].js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜new.js
 ┃ ┣ 📂short-links
 ┃ ┃ ┣ 📜[id].js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜new.js
 ┃ ┣ 📜[shortUrl].js
 ┃ ┣ 📜_app.js
 ┃ ┣ 📜_document.js
 ┃ ┗ 📜index.js
 ┣ 📂public
 ┃ ┣ 📜calendar.svg
 ┃ ┣ 📜cut-url.svg
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜link.svg
 ┃ ┣ 📜logo.svg
 ┃ ┗ 📜reply.svg
 ┣ 📂styles
 ┃ ┣ 📜App.module.css
 ┃ ┣ 📜Home.module.css
 ┃ ┣ 📜QRCodeCreatePage.module.css
 ┃ ┣ 📜QRCodeEditPage.module.css
 ┃ ┣ 📜QRCodeListPage.module.css
 ┃ ┣ 📜ShortLinkCreatePage.module.css
 ┃ ┣ 📜ShortLinkEditPage.module.css
 ┃ ┣ 📜ShortLinkListPage.module.css
 ┃ ┗ 📜global.css
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜jsconfig.json
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜request.http
```