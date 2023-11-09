export default function Footer() {
    return (
        <div className="rodape bg-dark pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-color-w">
              <h4><b>Sobre nós</b></h4>
              A Diverus Lda, é uma empresa 100% Angola com o objectivo<br/>
              De levar ate si um novo conceito de Dropshipping nacional<br/> 
              Desconstruindo barreiras para lá das nossas fronteiras.
            </div>
            <div className="col-lg-4 text-color-w">
              <h4><b>Contacto</b></h4>
              <b>Tel:</b><a href="tel:+244935074974"> +244 935 074 974</a><br/>
              <b>WhatsApp:</b><a href="https://api.whatsapp.com/send?1=pt_PT&phone=244935074974"> +244 935 074 974</a><br/>
              <b>Email:</b><a href="mailto:info@diversus.ao"> info@diversus.ao</a>
            </div>
            <div className="col-lg-2 text-color-w">
              <h4 className="mb-3"><b>Redes sociais</b></h4>
              <a href="https://www.facebook.com/V%C3%AAnus-robusta-imobili%C3%A1ria-102576001628797/" target="_blank" className="nav-link-inc" rel="noreferrer"><i className="fa fa-facebook" /></a>
              <a href="https://www.instagram.com/venusrobusta/?hl=pt" target="_blank" className="nav-link-inc ms-2 me-2" rel="noreferrer"><i className="fa fa-instagram" /></a>
            </div>
          </div>
          <hr className="mt-5"/>
          <div className="text-color-w">©2023 Diversus, Todos os Direitos Reservados.</div>
        </div>
      </div>
    )
}