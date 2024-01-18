import { Component } from '@angular/core';
import { TemperatureService } from 'src/app/temperature.service';

@Component({
  selector: 'app-content-time',
  templateUrl: './content-time.component.html',
  styleUrls: ['./content-time.component.scss']
})
export class ContentTimeComponent {

  temperatureData: any;

  constructor(private temperatureService: TemperatureService) {}

  ngOnInit() {
    this.temperatureService.lastSearchData$.subscribe(data => {
      this.temperatureData = data;
    });

    this.getTemperatureData('Sumaré', 'metric');
  }

  getTemperatureData(city: string, metric: string) {
    this.temperatureService.getTemperature(city, metric).subscribe((data) => {
      this.temperatureService.setLastSearchData(data);
    });
  
  }
    getCurrentDate(): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const formattedDate = `${dayOfWeek}, ${currentDate.toLocaleDateString()}`;
    return formattedDate;
  }
  
}
