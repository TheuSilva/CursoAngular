import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url: 'https://a-static.mlcdn.com.br/470x352/quebra-cabeca-500-pecas-paisagens-deslumbrantes-havai-toyster/casaferrari/ts2634havai/8ebda4afcb9d9abad92d2e2b569fc33c.jpg', 
      description: 'Paisagem 1'
    },

    {
      url: 'https://s2.glbimg.com/PWzElwICb5ItVqUPSQmj6bxMkSY=/620x455/e.glbimg.com/og/ed/f/original/2014/07/29/caverna-melissani-kefalonia-grecia.jpg', 
      description: 'Paisagem 2'
    }
  ];

}
