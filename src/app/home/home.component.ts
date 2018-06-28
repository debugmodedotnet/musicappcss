import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from "@angular/core";
import { Direction, IgxCarouselComponent, IgxLinearProgressBarComponent } from "igniteui-angular/main";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   @ViewChild("carousel") public carousel: IgxCarouselComponent;
  // @ViewChild("linearbar") public linearbar: IgxLinearProgressBarComponent;

  public slides: any[] = [];
  public loop = true;
  public pause = true;
  public total: number;
  public current: number;
  public contacts: any = []


  constructor() { }

  public ngOnInit() {
    this.addNewSlide();
    this.carousel.stop();
    this.total = this.slides.length;
    this.current = this.carousel.current;
    this.contacts = this.getcontacts();
  }

  public addNewSlide() {
    this.slides.push(
      {
        description: "30+ Material-based Angular components to code speedy web apps faster.",
        heading: "Ignite UI for Angular",
        image: "./assets/avengers.jpg"
      },
      {
        description: "A complete JavaScript UI library empowering you to build data-rich responsive web apps.",
        heading: "Ignite UI for Javascript",
        image: "https://www.infragistics.com/angular-demos/assets/images/carousel/slide2-ignite.png"
      },
      {
        description: "Build full-featured business apps with the most versatile set of ASP.NET AJAX UI controls",
        heading: "Ultimate UI for ASP.NET",
        image: "https://www.infragistics.com/angular-demos/assets/images/carousel/slide3-aspnet.png"
      }
    );
  }

  public onSlideChanged(carousel: IgxCarouselComponent) {
    this.current = carousel.current + 1;
   // this.linearbar.value = carousel.current + 1;
  }

  public searchContact: string;



   getcontacts(){ 
     return [
    {
      isFavorite: false,
      name: "PFS Roxy Theatere",
      phone: "2023 Sansom Ft",
      photo: "https://www.infragistics.com/angular-demos/assets/images/men/27.jpg"
    },
    {
      isFavorite: true,
      name: "Landmark's Ritz Bourse",
      phone: "400 Ranstead St",
      photo: "https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
    },
    {
      isFavorite: false,
      name: "Landmark's Ritz East",
      phone: "125 S 2nd St",
      photo: "https://www.infragistics.com/angular-demos/assets/images/women/50.jpg"
    },
    {
      isFavorite: false,
      name: "Lisa Landers",
      phone: "901-747-3428",
      photo: "https://www.infragistics.com/angular-demos/assets/images/women/3.jpg"
    },
    {
      isFavorite: true,
      name: "Dorothy H. Spencer",
      phone: "573-394-9254",
      photo: "https://www.infragistics.com/angular-demos/assets/images/women/67.jpg"
    }
  ];
}

}
