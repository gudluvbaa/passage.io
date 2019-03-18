import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM',
  },
  display: {
    dateInput: 'YYYY/MM',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MMMM',
  },
};

@Component({
  selector: 'app-ee-info-form',
  templateUrl: './ee-info-form.component.html',
  styleUrls: ['./ee-info-form.component.css'],
  providers: [{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}]
})
export class EeInfoFormComponent implements OnInit {
  stepIdx = 1;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  specialBenefitList = [
    {
      type: 1,
      itemList: 
      [
        {
          itemId: 1,
          itemName: '免費零食'
        },{
          itemId: 2,
          itemName: '下午茶點'
        },{
          itemId: 3,
          itemName: '供膳包吃'
        },{
          itemId: 4,
          itemName: '用餐補貼'
        }
  
      ]
    },{
      type: 2,
      itemList: 
      [
        {
          itemId: 5,
          itemName: '生日福利'
        },{
          itemId: 6,
          itemName: '節日福利'
        },{
          itemId: 7,
          itemName: '帶薪年假'
        },{
          itemId: 8,
          itemName: '年度旅遊'
        },{
          itemId: 9,
          itemName: '專業培訓'
        }
      ]
    },{
      type: 3,
      itemList: 
      [
        {
          itemId: 10,
          itemName: '領導nice'
        },{
          itemId: 11,
          itemName: '公司氛圍好'
        }
      ]
    },{
      type: 4,
      itemList: 
      [
        {
          itemId: 12,
          itemName: '績效獎金'
        },{
          itemId: 13,
          itemName: '年底雙薪'
        },{
          itemId: 14,
          itemName: '股票期權'
        },{
          itemId: 15,
          itemName: '年終分紅'
        },{
          itemId: 16,
          itemName: '互聯網金融'
        }
      ]
    },{
      type: 5,
      itemList: 
      [
        {
          itemId: 17,
          itemName: '地鐵周邊'
        },{
          itemId: 18,
          itemName: '免費班車'
        },{
          itemId: 19,
          itemName: '交通補助'
        },{
          itemId: 20,
          itemName: '住房補助'
        },{
          itemId: 21,
          itemName: '通訊補貼'
        }
      ]
    },{
      type: 6,
      itemList: 
      [
        {
          itemId: 22,
          itemName: '彈性工作'
        },{
          itemId: 23,
          itemName: '不加班'
        },{
          itemId: 24,
          itemName: '加班補助'
        },{
          itemId: 25,
          itemName: '全勤獎金'
        }
      ]
    },{
      type: 6,
      itemList: 
      [
        {
          itemId: 27,
          itemName: '定期體驗'
        },{
          itemId: 28,
          itemName: '五險一金'
        }
      ]
    }
  ];


  chosenMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    console.log(normlizedMonth,datepicker)
    datepicker.close();
  }

  goBack() {
    this._router.navigate(['auth/register']);
  }
  toNext() {
    if (this.stepIdx < 5) {
      this.stepIdx += 1;
    } else {
      this._router.navigate(['app/employee/vacancy-list']);
    }
  }
  toPrevious() {
    this.stepIdx -= 1;
  }
  selectItem() {
    console.log("kpo weofkp kwepokfpweof");
  }
  
}
