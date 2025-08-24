import './App.css'
import MyButton from './components/Button/Button'
import MyFooter from './components/Footer/Footer'
import MyHeader from './components/Header/Header'
import MainLayout from './components/Layout/Layout'

function App() {

  return (
    <>
    <MainLayout>
      <MyHeader/>
      {/* content
      <MyFooter/> */}
    </MainLayout>
    </>
  )
}

export default App
