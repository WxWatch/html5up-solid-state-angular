import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('logoLoad', [
      state('preLoad', style({
        opacity: 0,
        transform: 'translateY(0.5em)'
      })),
      state('postLoad', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('preLoad => postLoad', [
        animate('1s 0s ease')
      ])
    ]),

    trigger('h2Load', [
      state('preLoad', style({
        opacity: 0,
        transform: 'translateX(0.25em)',
        filter: 'blur(2px)'
      })),
      state('postLoad', style({
        opacity: 1,
        transform: 'translateX(0)',
        filter: 'blur(0)'
      })),
      transition('preLoad => postLoad', [
        animate('0.5s 650ms ease')
      ])
    ]),

    trigger('pLoad', [
      state('preLoad', style({
        opacity: 0,
        transform: 'translateX(0.5em)',
        filter: 'blur(2px)'
      })),
      state('postLoad', style({
        opacity: 1,
        transform: 'translateX(0)',
        filter: 'blur(0)'
      })),
      transition('preLoad => postLoad', [
        animate('0.5s 800ms ease')
      ])
    ]),
  ],
})
export class BannerComponent implements OnInit, AfterViewInit {
  animationState = 'preLoad';

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationState = 'postLoad';
    });
  }

}
