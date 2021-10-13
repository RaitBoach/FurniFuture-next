<<<<<<< Updated upstream
import Footer from "../components/footer";
import Layout from "../components/layout.js";


export default function Home(){
  return (
    <div>
      <Layout></Layout>
=======
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FurniFuture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <Image src="" class="d-block w-100 carouselimages" alt="Esimene" layout='fill'/>
                  </div>
                  <div class="carousel-item">
                    <Image src="/public/images/dog_couch.jpg" class="d-block w-100 carouselimages" alt="Teine" layout='fill'/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
        </div>

        <div class="container gallerymargin">
            <div class="row row-cols-1 row-cols-md-3 g-6">
                <div class="col">
                <div>
                    <Image src="/../public/images/sofa.png" class="card-img-top main_gallery" alt="#" layout='fill'/>
                    <div class="card-body">
                    <h5 class="card-title">Elutuba</h5>
                    </div>
                </div>
                </div>
                <div class="col">
                <div>
                    <Image src="/../public/images/esimene.jpg" class="card-img-top main_gallery" alt="#" layout='fill'/>
                    <div class="card-body">
                    <h5 class="card-title">Magamistuba</h5>
                    </div>
                </div>
                </div>
                <div class="col">
                <div>
                    <Image src="/../public/images/table.png" class="card-img-top main_gallery" alt="laud" layout='fill'/>
                    <div class="card-body">
                    <h5 class="card-title">Kontor</h5>
                    </div>
                </div>
                </div>
                <div class="col">
                    <div>
                    <Image src="/../public/images/chair-example.png" class="card-img-top main_gallery" alt="tool" layout='fill'/>
                    <div class="card-body">
                        <h5 class="card-title">Köök</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div>
                    <Image src="/../public/images/esimene.jpg" class="card-img-top main_gallery" alt="..." layout='fill'/>
                    <div class="card-body">
                        <h5 class="card-title">Vannituba</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div>
                    <Image src="/../public/images/esimene.jpg" class="card-img-top main_gallery" alt="..." layout='fill'/>
                    <div class="card-body">
                        <h5 class="card-title">Sisekujundus</h5>
                    </div>
                    </div>
                </div>
            </div>

            <div class="about-section padding-top-50">
                  
              <h1 class = "members" id="">Meie liikmed</h1>
              <p>&nbsp;</p>
            <div class="row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="/../public/images/icon.jpg" alt="Harri" layout='fill'/>
                  <div class="container">
                    <h2>Harri Liimann</h2>
                    <p class="title">Arhitekt</p>
                    <p>harri.liimann@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>              
                            
              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="/../public/images/icon.jpg" alt="Andres" layout='fill'/>
                  <div class="container">
                    <h2>Andres Tammistu</h2>
                    <p class="title">Analüütik</p>
                    <p>andres.tammistu@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="/../public/images/icon.jpg" alt="Ingela" layout='fill'/>
                  <div class="container">
                    <h2>Ingela Rohusaar</h2>
                    <p class="title">Programmeerija</p>
                    <p>ingela.rohusaar@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              
              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="/../public/images/icon.jpg" alt="Rasmus" layout='fill'/>
                  <div class="container">
                    <h2>Rasmus Sokk</h2>
                    <p class="title">Programeerija praktikant</p>
                    <p>rasmus.sokk@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
      </main>

      <style jsx>{`
      .disabled{
          pointer-events: none;
          cursor: default;
      }
      
      .members {
        text-align:center;
      }
      .carousel slide {
        style="height: calc(100vh - 70px);
        overflow: hidden;"
      }
      .carousel-item img {
          object-fit: cover;
          height: 100%;
      }
      
      
      .gallerymargin{
          margin-top: 80px;;
      }
      
      .nav-item{
          font-size: 25px;
          font-family: 'Poppins', sans-serif;
      }
      
      .card {
        display:flex;
        justify-content: space-between;
        border:1px solid black;
        flex-wrap: nowrap;
        margin: 20px;
      }
      
      .card button {
        border: none;
        outline: 0;
        padding: 25px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 85%;
        height: 75px;
        font-size: 18px;
      }
      
      .card button:hover {
        opacity: 0.7;
      }
      
      .container {
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 10px;
      }
      
      .box {
        flex: 0 0 40%;
        text-align: center;
        height: 100%;
      }
      
      .pilt {
        max-height: 300px;
      }
      
      .text {
        height:125px;
      }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
>>>>>>> Stashed changes
    </div>

  )
}
    
