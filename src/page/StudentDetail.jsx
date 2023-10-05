import Contant from './component/Contant'
import Footer from './component/Footer'
import Header from './component/header'

function StudentDetail() {


  return (
    <>
      <div className=' space-y-4'>
        <div>
          <Header />
        </div>
        <div>
           <Contant/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

    </>
  )
}

export default StudentDetail
