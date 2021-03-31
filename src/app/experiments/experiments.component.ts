import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiment: string[] = ['Mars soil sample','Plant growth in habitat','Human bone density'];

  experimentBeingEdited: string = null;

  constructor() {}

  ngOnInit() {}

  addExperiment(experiment: string) {    
    if (!this.experiment.includes(experiment))
      this.experiment.push(experiment);
  }

  remove(experiment: string) {
    let index = this.experiment.indexOf(experiment);
    this.experiment.splice(index, 1);
  }

  edit(experiment: string) {
    debugger;
    this.experimentBeingEdited = experiment;
  }

  save(newExperiment: string, experiment: string) {
    experiment = newExperiment;
    this.experimentBeingEdited = null;
  }

}
