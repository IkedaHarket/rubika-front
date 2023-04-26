import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { CurtainService } from '../../services/curtain.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curtain-layout',
  templateUrl: './curtain-layout.component.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('500ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({ opacity: 0}))
        ])
      ]
    )
  ],
  styleUrls: ['./curtain-layout.component.scss']
})
export class CurtainLayoutComponent implements OnInit {

  isCurtainOpen!: boolean;
  curtainSub!: Subscription;
  routerContentIsDone!: boolean;
  clearRouterContentIsDone!: NodeJS.Timeout

  constructor(
    private readonly curtain: CurtainService,
    ) { }

  ngOnInit(): void {
    this.curtainSub = this.curtain.isCurtainOpen$.subscribe((c) => {
      clearTimeout(this.clearRouterContentIsDone)
      if(c) {
        this.routerContentIsDone = false
      }else{
        this.clearRouterContentIsDone = setTimeout(()=> {
          this.routerContentIsDone = true
        },500)
      }
      this.isCurtainOpen = c
    })
  }

  ngOnDestroy(): void {
    this.curtainSub.unsubscribe();
  }

}
