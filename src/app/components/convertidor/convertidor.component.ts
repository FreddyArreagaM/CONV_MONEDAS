import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  ngOnInit(): void { }

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero == 'USD') {
          this.total = this.cantidad;
        } else {
          if (this.quiero == 'EUR') {
            this.total = this.cantidad * 0.92;
          } else {
            this.total = this.cantidad * 0.80;
          }
        }
        break;
      case 'EUR':
        if (this.quiero == 'USD') {
          this.total = this.cantidad * 1.09;
        } else {
          if (this.quiero == 'EUR') {
            this.total = this.cantidad;
          } else {
            this.total = this.cantidad * 0.88;
          }
        }
        break;
      case 'LIBRA':
        if (this.quiero == 'USD') {
          this.total = this.cantidad * 1.24;
        } else {
          if (this.quiero == 'EUR') {
            this.total = this.cantidad * 1.14;
          } else {
            this.total = this.cantidad;
          }
        }
        break;
    }
  }
}
