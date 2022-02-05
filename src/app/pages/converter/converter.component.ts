import { Component } from '@angular/core';
import { TimeZoneResponse } from 'src/app/response/timeZoneResponse';
import { RequestTime } from 'src/app/model/Time';
import { RequestService } from 'src/app/service/time.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  public time: string;
  public timeZone: string;
  private requestTime: RequestTime;

  constructor(private requestService: RequestService) { 
    this.requestTime = new RequestTime();
  }

  public timeConverted(): void {
    if(this.timeZoneValidation()){
        this.requestTime.time = this.time;
        this.requestTime.timezone = this.timeZone;
        this.sendTime();
    }else{
        this.openAlert('The number must be have the character + or -');
    } 
  }

  private timeZoneValidation(): boolean {
    return (this.timeZone.charAt(0) == '-' || this.timeZone.charAt(0) == '+') ? true : false;
  }

  private sendTime(): void {
    this.requestService.create(this.requestTime).subscribe((response: TimeZoneResponse) =>{
      this.time = response.response.time; 
      this.timeZone = response.response.timezone;
      this.openAlert('Time converted!');
    });
  }

  private openAlert(message: string){
    alert(message)
  }
}
