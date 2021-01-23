import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../modles/pokemons';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon;

    // Radar
    public radarChartOptions: RadialChartOptions = {
      responsive: true,
      legend: {
        display: false
      }
    };
    public radarChartLabels: Label[] = ['体力', '攻撃力', '防御力', 'スピード'];

    public radarChartData: ChartDataSets[] = [];
    public radarChartType: ChartType = 'radar';

  constructor(
    private routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(map => {
      const id = +map.get('id');
      this.pokemon = this.pokemons[id - 1]
      this.radarChartData.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.Speed,
        ]
      })
    })
  }

}
