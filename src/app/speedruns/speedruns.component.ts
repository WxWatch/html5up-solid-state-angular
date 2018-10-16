import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeedrunService } from './speedrun.service';

@Component({
  selector: 'app-speedruns',
  templateUrl: './speedruns.component.html',
  styleUrls: ['./speedruns.component.scss']
})
export class SpeedrunsComponent implements OnInit, OnDestroy {
  speedrunSub: Subscription;
  speedruns: Array<any>;

  pbSub: Subscription;
  personalBests: Array<any>;

  chartData: Array<any>;

  constructor(private speedrunService: SpeedrunService) { }

  ngOnInit() {
    this.getSpeedrunInfo();
    this.getPersonalBestInfo();
  }

  generateChartData() {
    this.chartData = [];
    this.chartData = this.speedruns.slice().reverse().map((run) => [run.date, run.times.primary_t]);
  }

  ngOnDestroy() {
    if (this.speedrunSub) {
      this.speedrunSub.unsubscribe();
    }
    if (this.pbSub) {
      this.pbSub.unsubscribe();
    }
  }

  getPersonalBestInfo() {
    this.pbSub = this.speedrunService.getPersonalBests().subscribe((data) => {
      this.personalBests = data['data'];
    }, (error) => {
      console.log('Error fetching personal bests', { error });
    });
  }

  getSpeedrunInfo() {
    this.speedrunSub = this.speedrunService.getSpeedruns().subscribe(async (data) => {
      this.speedruns = data['data'];
      for (const run of this.speedruns) {
        run.splitData = await this.speedrunService.getSplitsIoData(run.splits.uri);
      }

      this.generateChartData();
      console.log('speedruns', { data });
    }, (error) => {
      console.log('Error fetching speedruns', { error });
    });
  }
}
