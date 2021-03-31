import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat dome','Drones','Food containers','Oxygen tanks'];

  equipmentBeingEdited: string = null;

  constructor() {}

  ngOnInit() {}

  addEquipment(equipment: string) {    
    if (!this.equipment.includes(equipment))
      this.equipment.push(equipment);
  }

  remove(equipment: string) {
    let index = this.equipment.indexOf(equipment);
    this.equipment.splice(index, 1);
  }

  edit(equipment: string) {
    debugger;
    this.equipmentBeingEdited = equipment;
  }

  save(newEquipment: string, equipment: string) {
    equipment = newEquipment;
    this.equipmentBeingEdited = null;
  }

}
