import { Component } from '@angular/core';
import { TemperatureService } from 'src/app/temperature.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  city: string = ``;
  temperature: number = 0;

  constructor(private temperatureService: TemperatureService) { }

  searchTemperature() {
    if (this.city === '') {
      alert(`Campo cidade não pode ser vazio`);
      return;
    }

    this.temperatureService.getTemperature(this.city, 'metric')
      .subscribe(
        (data: any) => {
          this.temperatureService.setLastSearchData(data);
          this.temperature = data.main.temp;
          this.city = '';
        },
        (error) => {
          console.error('Erro na busca da temperatura:', error);

          if (error.status === 404) {
            alert(`Cidade não encontrada. Por favor, verifique o nome da cidade e tente novamente.`);
          } else {
            alert(`Ocorreu um erro ao buscar a temperatura. Por favor, tente novamente mais tarde.`);
          }
        }
      );
  }
}