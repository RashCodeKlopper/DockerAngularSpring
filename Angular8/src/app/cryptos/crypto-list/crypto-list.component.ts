import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import {Coin} from '../entity/Coin';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {
  coins: Coin[];

  constructor(private service: CryptoService) {
    this.loadCoins();
  }

  ngOnInit() {
  }

  loadCoins() {
    this.service.getCryptoList()
      .subscribe(
      coins => {
        console.log(coins);
        this.coins = coins.map(c => new Coin(c));
      }, err => {
        console.log(err.message);
      }
    );
  }
}
