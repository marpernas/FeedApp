import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [ 
    MovieProvider
  ]


})
export class FeedPage {

  public objeto_feed = {
    titulo: "Marcos Pereira",
    data: "Agosto 12, 2017",
    descricao: "Estou criando uma app increivel...",
    qntd_likes: 12,
    qntd_coments: 4,
    time_coment: "11h ago"
  }

  public lista_filmes = new Array<any>();


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private MovieProvider: MovieProvider 
  ) {
  }

   ionViewDidLoad() {
    this.MovieProvider.getLatesMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
