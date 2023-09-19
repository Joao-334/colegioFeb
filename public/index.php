<?php
use Unifeb\Repo\PostRepository;
require "../vendor/autoload.php";

require_once "../src/database/db.php";
require "../src/Repo/PostRepository.php";

$postRepo = new postRepository($pdo);

$posts = $postRepo->getPosts();
?>

<?php require_once "../public/particles/init.php"?>

  <main class="main">
    <div class="container__image">
      <img src="public/img/banner.jpg" alt="banner" class="image">
    </div>
    <div class="topics">
      <div class="card__fund">
        <img src="/public/img/imagem1.jpeg" alt="imagem menina" />
        <p>
          Acreditamos que teoria e prática andam lado a lado. Assim,
          entregamos um bom equilíbrio entre ambas de forma que o aprendizado
          aconteça tanto em sala de aula como em atividades e projetos
          extracurriculares. Utilizamos o material de ensino ETAPA que é
          referência nacional de qualidade. Além disso, oferecemos estrutura
          de ponta com laboratórios de ensino superior e mensalidades
          acessíveis.
        </p>
      </div>
      <div class="card__med">
        <img src="/public/img/imagem2.jpeg" alt="imagem 2 pessoas" />
        <p>
          Nossa metodologia é formulada pensando no futuro. Assim, além de
          preparar os alunos para as melhores universidades, buscamos formar
          as mentes que transformarão o mercado nos próximos anos. Os três
          anos do ensino médio são decisivos. É hora de aprofundar, concluir e
          revisar todos os conteúdos para, além de ter boas colocações em
          provas importantes dos vestibulares, definir qual será a área de
          atuação e profissão escolhida.
        </p>
      </div>
    </div>

    <div class="infra">
      <img src="/public/img/estudantes2.jpg" alt="estudantes feb" />
      <p>
        O Colégio FEB possui anos de experiência e excelência em educação e
        está preparado para receber os alunos em um ambiente estruturado,
        acolhedor e seguro proporcionando as melhores práticas de ensino. Sua
        estrutura é dinâmica e arrojada composta por salas de aulas modernas,
        laboratórios, biblioteca, área verde ampla e anfiteatro. Além disso,
        os alunos contam com o único Espaço Maker de Barretos, com selo da
        rede mundial Fab Lab, que oferece um ambiente de fo- mento ao
        empreendedorismo e inovação, por meio de infraestrutura e equipamentos
        para prototipagem e desenvolvimento de projetos.
      </p>
    </div>

    <div class="noticies">
      <h2 class="title">Fique por dentro das novidades do colégio feb</h2>
      <div class="noticies__container">
        <!-- Deploy: -->
        <?php foreach ($posts as $post): ?>
          <div class="noticie">
            <img src="https://www.unifeb.edu.br/uploads/posts/<?=$post->getImage();?>" alt="enganei você trouxa">
            <a href="<?= $post->getLink(); ?>"><?=$post->getTitle()?></a>
          </div>
        <?php endforeach;?>
      </div>
      <i class="bi bi-arrow-bar-down" id="icon"></i>
      <button class="more__noticies"><a href="https://www.unifeb.edu.br/posts" target="blank">Veja mais</a></button>
    </div>
  </main>

  <footer class="footer">
      <div class="image__background">
        <p>
        PARA MAIS INFORMAÇÕES FALE CONOSCO!
        WhatsApp (17) 3321-6417 ou ligue (17) 3321-6417
        </p>
      </div>
      <div class="container__icon-plus-logo">
        <img src="/public/img/logo.png" alt="logo feb" class="logo">
        <div class="icons">
          <i class="bi bi-facebook" onclick="window.open('', '_blank')"></i>
          <i class="bi bi-instagram" onclick="window.open('', '_blank')"></i>
        </div>
      </div>

      <div class="footer__rights">
        <p class="footer__copy" style="text-align: center;">&#169; 2023 <span
            style="color: #650965; font-weight: 600;">João Felipe Reis Cavoli</span>. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
  <script src="public/js/controlOpacity.js"></script>
</body>

</html>
