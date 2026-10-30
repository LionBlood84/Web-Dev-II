import './App.css';
import logo from './assets/logo.svg';
import heroImg from './assets/hero.png';
import eulogyImg from './assets/eulogy-for-evolution.jpg';
import blurredImg from './assets/blurred.jpg';
import articulationImg from './assets/articulation.jpg';
import allEncoresImg from './assets/all-encores.jpg';
import profilePic from './assets/profile_picture.jpg';
import twitterIcon from './assets/twitter-icon.svg';
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.svg';

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Erased Tapes Logo" className="header-logo" />
      <nav className="header-nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  );
}

function ArticleIntro() {
  return (
    <div className="article-header">
      <h1 className="main-title">Erased Tapes:</h1>
      <h2 className="subtitle">Exploring the Sonic Frontier</h2>
      <p className="lead-paragraph">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
      </p>
    </div>
  );
}

function ColumnLayout() {
  return (
    <section className="three-column-section">
      <div className="column">
        <h3 className="section-heading">Heading</h3>
        <p>
          Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.
        </p>
        <p>
          Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.
        </p>
      </div>

      <div className="column">
        <p>
          Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla.
        </p>
        <p>
          Parturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.
        </p>
        <h3 className="section-heading">Heading</h3>
        <p>
          Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in. Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.
        </p>
        <p>
          Amet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo. Vestibulum tincidunt fames convallis ligula semper porttitor.
        </p>
      </div>

      <div className="column">
        <p>
          Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor. Porta gravida placerat lobortis litora elit feugiat venenatis. Cras magna himenaeos consequat aliquet ad nec pharetra. Ligula eleifend imperdiet aptent primis placerat. Nec magnis tempus vulputate ipsum ad sagittis mus.
        </p>
        <h3 className="section-heading">Heading</h3>
        <p>
          Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor. Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.
        </p>
        <p>
          Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea. Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa. Nunc mauris taciti montes sapien molestie orci ac quis.
        </p>
      </div>
    </section>
  );
}

function ImageGallery() {
  return (
    <div className="gallery-grid">
      <div className="hero-feature">
        <img src={heroImg} alt="Hero Feature" />
      </div>
      <div className="quad-grid">
        <div className="quad-item">
          <img src={eulogyImg} alt="Eulogy for Evolution" />
        </div>
        <div className="quad-item">
          <img src={blurredImg} alt="Blurred" />
        </div>
        <div className="quad-item">
          <img src={articulationImg} alt="Articulation" />
        </div>
        <div className="quad-item">
          <img src={allEncoresImg} alt="All Encores" />
        </div>
      </div>
    </div>
  );
}

function AuthorSection() {
  return (
    <section className="author-section">
      <div className="author-info">
        <h3 className="section-heading">The Author</h3>
        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.
        </p>
      </div>
      <div className="author-sidebar">
        <img src={profilePic} alt="The Author" className="author-photo" />
        <div className="author-socials">
          <a href="#twitter"><img src={twitterIcon} alt="Twitter" className="dark-icon" /></a>
          <a href="#facebook"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
        </div>
      </div>
    </section>
  );
}

function CommentsSection() {
  return (
    <div className="comments-container">
      <h3 className="section-heading">Comments</h3>
      <div className="comments-list">
        <div className="comment-item">
          <span className="comment-author">soundseeker92</span>
          <p className="comment-text">
            This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?
          </p>
        </div>
        <div className="comment-item">
          <span className="comment-author">Ted Baker</span>
          <p className="comment-text">
            I've been following the label for years—so glad someone's finally writing about their impact.
          </p>
        </div>
        <div className="comment-item">
          <span className="comment-author">Queen_of_noise</span>
          <p className="comment-text">
            I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
      <div className="copyright">
        Copyright &copy; 2023 Erased Disks Ltd.
      </div>
      <div className="footer-socials">
        <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#facebook"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-content">
        <ArticleIntro />
        <ColumnLayout />
        <ImageGallery />
        <AuthorSection />
        <CommentsSection />
      </main>
      <Footer />
    </div>
  );
}