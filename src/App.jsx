import './App.scss'
import { Routes, Route } from 'react-router-dom'

// 라우터 import
import Nav from "./home/Nav"
import Footer from './home/Footer'

import Main from "./routes/Main"
import Story from "./routes/Story"
import Menu from "./routes/Menu"
import Branch from "./routes/Branch"
import Franchise from "./routes/Franchise"



function App() {
   return (
      <div className='App'>
         <Nav />

         <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/Story' element={<Story />}></Route>
            <Route path='/Menu' element={<Menu />}></Route>
            <Route path='/Branch' element={<Branch />}></Route>
            <Route path='/Franchise' element={<Franchise />}></Route>
         </Routes>
         
         <Footer />
      </div>
   )
}


/*
★배포방법
터미널 명령어 : npm run deploy

1. npm install gh-pages
2. package.json 수정
　      "scripts": {
          (...)
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build"
        },
        "homepage": "깃 배포 주소/"

3. 터미널에 npm run deploy
4. 커밋 & 푸쉬
5. 깃 레포지토리 - 설정 - 렌더링 페이지 gh-pages로 선택
*/

export default App
