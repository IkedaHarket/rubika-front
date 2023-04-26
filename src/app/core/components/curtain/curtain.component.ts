import { Component, OnInit } from '@angular/core';
import { CurtainService } from '../../services/curtain.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.scss']
})
export class CurtainComponent implements OnInit {

  isCurtainOpen!: boolean;
  curtainSub!: Subscription;
  
  constructor(
    public readonly curtain: CurtainService,
    ) { }

  ngOnInit(): void {
    this.curtainSub = this.curtain.isCurtainOpen$.subscribe((c) => this.isCurtainOpen = c)
  }

  ngOnDestroy(): void {
    this.curtainSub.unsubscribe();
  }

}
