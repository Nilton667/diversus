import banner from '@public/img/banner.png'
import banner2 from '@public/img/banner2.png'
import banner3 from '@public/img/banner3.png'
import calendar from '@public/img/calendar.png'
import glob from '@public/img/glob.png'
import box from '@public/img/box.png'
import money from '@public/img/money.png'
import map from '@public/img/map.png'
import suport from '@public/img/suport.png'
import Zara from '@public/img/zara.png'
import ZaraHome from '@public/img/zarahome.png'
import Aliexpress from '@public/img/Aliexpress.png'
import Amazon from '@public/img/Amazon.png'
import EBay from '@public/img/EBay.png'
import Gap from '@public/img/Gap.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="banner-1 pt-5 pb-5 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                  <div>
                    <h1 className="h1-Pollaroid">e-commerce</h1>
                    <h1><b>Obtenha tudo o que você ama dos EUA Enviando para Angola por um preço tão baixo e o melhor de tudo é em Kwanza</b></h1>
                    <p>Fazemos a entrega em sua casa num período de 30 dias Úteis.</p>
                    <a href="https://chrome.google.com/webstore/detail/v%C3%A9nus-express/eipcdgglfgmimpgcgoihiehhlpjnkiem?hl=en" target="_blank" type="button" className="btn btn-dark rounded-pill mt-4 pe-4 ps-4 pt-3 pb-3" rel="noreferrer">Baixar Extensão</a>
                    {
                      //!userIsLoggedIn()
                      //  ?
                      //  <Link to="/login" type="button" className="btn rounded-pill mt-4 ms-2 pe-4 ps-4 pt-3 pb-3  btn-primary border-0">Entrar</Link>
                      //  :
                        ""
                    }
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <Image src={banner} alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="banner-1 pt-5 pb-5 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-end">
                  <Image src={banner2} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div>
                    <h1 className="h1-Pollaroid">e-commerce</h1>
                    <h1><b>Fazer comprar internacional se tornou mais rápido e mais fácil</b></h1>
                    <p>Fazemos a entrega em sua casa num período de 30 dias Úteis.</p>
                    <a href="https://chrome.google.com/webstore/detail/v%C3%A9nus-express/eipcdgglfgmimpgcgoihiehhlpjnkiem?hl=en" target="_blank" type="button" className="btn btn-dark rounded-pill mt-4 pe-4 ps-4 pt-3 pb-3" rel="noreferrer">Baixar Extensão</a>
                    {
                     /* !userIsLoggedIn()
                        ?
                        <Link to="/login" type="button" className="btn rounded-pill mt-4 ms-2 pe-4 ps-4 pt-3 pb-3  btn-primary border-0">Entrar</Link>
                        :*/
                        ""
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="div-shops">
      <div className="container text-center">
        <h2><b>Faca compra nas melhores <span className="h1-Pollaroid-span">loja</span> do mundo</b></h2>
        <div className="mt-4">
          <a href="https://www.amazon.com/" target="_blank" rel="noreferrer"><Image src={Amazon} alt="" className="m-3" width={130}/></a>
          <a href="https://aliexpress.com/" target="_blank" rel="noreferrer"><Image src={Aliexpress} alt="" className="m-3" width={150}/></a>
          <a href="https://www.ebay.com/" target="_blank" rel="noreferrer"><Image src={EBay} alt="" className="m-3" width={120}/></a>
          <a href="https://www.gap.com/" target="_blank" rel="noreferrer"><Image src={Gap} alt="" className="m-3" width={70}/></a>
          <a href="https://www.zara.com/" target="_blank" rel="noreferrer"><Image src={Zara} alt="" className="m-3" width={80}/></a>
          <br/>
          <a href="https://www.zarahome.com/" target="_blank" rel="noreferrer"><Image src={ZaraHome} alt="" className="m-3" height={30}/></a>
        </div>
      </div>
    </div>
    <div className="div-vantagem d-flex align-items-center">
      <div className="container">
        <h1 className="h1-Pollaroid">Vantagens</h1>
        <h2>As vantagens de trabalhar com a Vénus</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card-body p-4">
              <div className="p-3 mb-4 shadow-sm rounded-circle div-icon d-flex align-items-center justify-content-center">
                <div><Image src={calendar} alt="" width={40} /></div>
              </div>
              <h4><b>Receba seu pacote rapidamente</b></h4>
              Suas compras são entregues em sua porta em menos de 30 dias úteis.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-body p-4">
              <div className="p-3 mb-4 shadow-sm rounded-circle div-icon d-flex align-items-center justify-content-center">
                <div><Image src={glob} alt="" width={40} /></div>
              </div>
              <h4><b>Faça compras no mercado global</b></h4>
              Compre em suas lojas favoritas Online, e envie suas compras para nossas instalações Diversus.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-body p-4">
              <div className="p-3 mb-4 shadow-sm rounded-circle div-icon d-flex align-items-center justify-content-center">
                <div><Image src={box} alt="" width={40} /></div>
              </div>
              <h4><b>Nos empacotamos pra você</b></h4>
              Empacotamos todos os seus produtos de diferentes lojas em um único pacote.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-body p-4">
              <div className="p-3 mb-4 shadow-sm rounded-circle div-icon d-flex align-items-center justify-content-center">
                <div><Image src={money} alt="" width={40}/></div>
              </div>
              <h4><b>Sem taxas ocultas</b></h4>
              Apos o pagamento o cliente esta isento de quaisquer despesa.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-body p-4">
              <div className="p-3 mb-4 shadow-sm rounded-circle div-icon d-flex align-items-center justify-content-center">
                <div><Image src={map} alt="" width={40}/></div>
              </div>
              <h4><b>Rastreie pacotes facilmente</b></h4>
              Saiba exatamente quando a sua encomenda sai das nossas instalações e quando chega à sua porta.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-body p-4">
              <div className="p-3 mb-4 shadow-sm rounded-circle div-icon d-flex align-items-center justify-content-center">
                <div><Image src={suport} alt="" width={40}/></div>
              </div>
              <h4><b>Suporte 24/24</b></h4>
              Nossa equipe de atendimento ao cliente está aqui para ajudá-lo em cada etapa do processo 24 horas por dia.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-end">
            <Image src={banner3} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-5 pb-5">
            <h1 className="h1-Pollaroid ">Nosso foco</h1>
            Nos baseamos em uma serie de problemas encontrados ao efetuar compras pela internet no qual nos focamos em dar respostas rápidas seguras e descomplicadas. <br /> <br />
            <h4><b>Descomplicar a compras online</b></h4>
            Facilitar a compras online para clientes que não possuem acesso a um cartão de credito. <br /> <br />
            <h4><b>Facilitar as entregas</b></h4>
            Gerimos todo o processo de transportação do seu pacote até a sua porta. <br /> <br />
            <h4><b>Dar acesso ao mercado global</b></h4>
            Sabemos o quão complicado é fazer as compras online estão deixe que a Vénus faça por sí.
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
