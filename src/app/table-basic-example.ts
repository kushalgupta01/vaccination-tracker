import { Component, OnInit } from '@angular/core';
import { VaccinationTrackerService } from './vaccination-tracker.service';

export interface PeriodicElement {
  centerName: string;
  address: string;
  doses: number;
  dose1: number;
  pincode: string;
}
const ELEMENT_DATA1: PeriodicElement[] = [];
const ELEMENT_DATA: PeriodicElement[] = [
  {
    centerName: 'No Center Available with doses',
    address: '-NA-',
    doses: 0,
    dose1: 0,
    pincode: '-NA-'
  },
  {
    centerName: 'Bardolpura Muni. School -1',
    address: 'Near Madhupura UHC Bardolpura',
    doses: 50,
    dose1: 0,
    pincode: '382115'
  }
];
interface District {
  value: string;
  viewValue: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample implements OnInit {
  constructor(private service: VaccinationTrackerService) {}

  districts: District[] = [];

  displayedColumns: string[] = [
    'doses',
    'centerName',
    'address',
    'dose1',
    'pincode'
  ];
  dataSource = ELEMENT_DATA1;
  date: any = new Date();
  ngOnInit(): void {
    this.service.getDistricts().subscribe((data: any) => {
      data.districts.forEach((district: any) => {
        this.districts.push({
          viewValue: district.district_name,
          value: district.district_id
        });
      });
    });
  }

  private fetchVaccinationData() {
    console.log('Fetch call');
    let centerData: PeriodicElement[] = [];
    let self = this;
    self.service
      .getAvailableSlot(this.districtId, this.date)
      .subscribe((data: any) => {
        data.centers.forEach((center: any, index: any) => {
          let availableDosesSession: any[] = center.sessions.filter(
            (session: any) =>
              session.available_capacity > 0 && session.min_age_limit < 45
          );

          if (availableDosesSession.length > 0) {
            centerData.push({
              centerName: center.name,
              address: center.address,
              doses: availableDosesSession.reduce(
                (sum, sess) => sum + sess.available_capacity,
                0
              ),
              dose1: availableDosesSession.reduce(
                (sum, sess) => sum + sess.available_capacity_dose1,
                0
              ),
              pincode: center.pincode
            });
          }
        });
        this.dataSource = centerData.sort(
          (a: PeriodicElement, b: PeriodicElement) => {
            // Use toUpperCase() to ignore character casing
            const bandA = +a.dose1;
            const bandB = +b.dose1;

            let comparison = 0;
            if (bandA < bandB) {
              comparison = 1;
            } else if (bandA > bandB) {
              comparison = -1;
            }
            return comparison;
          }
        );
      });
  }
  private fetchVaccinationDatabackup() {
    console.log('Fetch call backup');
    let centerData: PeriodicElement[] = [];
    let self = this;
    self.service
      .getAvailableSlot(this.districtId, this.date)
      .subscribe((data: any) => {
        data.centers
          //filtering non zero doses
          .filter(
            (center: any) =>
              center.sessions[0].available_capacity > 0 &&
              center.sessions[0].min_age_limit < 45
          )

          //pushing into new bucket
          .forEach((center: any, index: any) => {
            centerData.push({
              centerName: center.name,
              address: center.address,
              doses: center.sessions[0].available_capacity,
              dose1: center.sessions[0].available_capacity_dose1,
              pincode: center.pincode
            });
          });

        //sorting
        this.dataSource = centerData.sort(
          (a: PeriodicElement, b: PeriodicElement) => {
            // Use toUpperCase() to ignore character casing
            const bandA = +a.doses;
            const bandB = +b.doses;

            let comparison = 0;
            if (bandA < bandB) {
              comparison = 1;
            } else if (bandA > bandB) {
              comparison = -1;
            }
            return comparison;
          }
        );
        // data.centers.filter((center: any) => console.log(center));
      });
  }

  startId: number;
  districtId: number = 770;
  startTracker() {
    console.log('Tracker Started');
    let self = this;
    self.startId = setInterval(self.fetchVaccinationData.bind(self), 2000);
  }

  stopTracker() {
    console.log('Tracker Stoped');

    if (this.startId) clearInterval(this.startId);
    this.dataSource = ELEMENT_DATA1;
  }
  districtSelection(abc: any) {
    this.districtId = abc;
  }

  refresh() {
    this.stopTracker();
    this.startTracker();
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
