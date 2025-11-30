import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  imports: [NgStyle]
})
export class ButtonComponent implements OnInit {
  @Input() color: string = ''
  @Input() background: string = ''
  @Input() border: string = 'none'
  @Input() label: string = '#1976d2'
  @Input() width: string = 'auto'

  constructor() { }

  ngOnInit() {
  }

}
