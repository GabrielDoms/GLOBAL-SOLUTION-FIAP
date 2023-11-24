import "./styles.scss";

export function Home() {
  return (
    <div className="HomeContent">
      <div className="HomeMetropolisSmogContainer">
        <img className="HomeMetropolisSmogImage" src="/agulha.jpg" alt="Agulha" />

        <div className="HomeMetropolisSmogAboutContainer">
          <div className="HomePresentationContainer">
            <div className="HomePresentationTitle">Nossa Ideia</div>
            <div className="HomePresentationDescription">
            A Saúde no Foco é uma empresa dedicada a promover o bem-estar integral,
            com ênfase na conscientização sobre práticas saudáveis e na prevenção dos riscos associados ao uso de anabolizantes.
            Nossa missão é inspirar e informar, capacitando indivíduos a tomar decisões conscientes em relação à sua saúde física e mental.
            </div>
            <div className="HomePresentationTitle">Como funcionará nossa aplicação?</div>
            <div className="HomePresentationDescription">
            A aplicação Saúde no Foco vai além de uma ferramenta, sendo um aliado integral para o seu bem-estar. 
            Ao registrar a quantidade de doses de anabolizantes consumidas semanalmente, a aplicação utiliza algoritmos avançados para personalizar a avaliação do seu estado clínico.
            Analisando fatores como frequência, tipo e quantidade, oferece uma avaliação precisa e insights detalhados sobre os riscos à saúde associados ao seu padrão de uso. Comprometida com a sua segurança, a aplicação não só avalia, mas também fornece recomendações personalizadas para mitigar riscos, 
            orientando-o na busca por um estilo de vida mais equilibrado. 
            A missão da Saúde no Foco é dar-lhe as ferramentas e o conhecimento necessários para decisões informadas sobre sua saúde, colocando-o no controle da sua jornada rumo a um bem-estar duradouro.
            </div>
          </div>
          <div className="HomePresentationTitle">Nossa causa</div>
          <div className="HomeMetropolisSmogAboutText">
          O uso de anabolizantes por algumas pessoas é muitas vezes impulsionado pela busca incessante por padrões estéticos ideais e desempenho físico aprimorado. 
          Essa decisão, no entanto, não está isenta de riscos significativos para a saúde. A pressão social, os padrões inatingíveis e a busca por resultados rápidos podem levar indivíduos a adotarem essa prática sem pleno conhecimento dos impactos adversos. 
          É fundamental reconhecer que, além dos potenciais benefícios estéticos, o consumo de anabolizantes pode acarretar sérios problemas de saúde, exigindo uma abordagem mais informada e equilibrada em relação aos objetivos de condicionamento físico e bem-estar.
          </div>
        </div>
      </div>
    </div>
  );
}
