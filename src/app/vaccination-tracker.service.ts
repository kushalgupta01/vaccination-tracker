import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class VaccinationTrackerService {
  constructor(private http: HttpClient) {}

  public getAvailableSlot1() {
    return of({
      centers: [
        {
          center_id: 610322,
          name: 'Girdharnargar UHC',
          address: 'Badiya Limdi  Opp Akshar Restaurant',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'Central Zone',
          pincode: 380004,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '17:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: 'b291b8e1-9ef5-485e-8bc7-dc3b139e1418',
              date: '22-05-2021',
              available_capacity: 200,
              min_age_limit: 45,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-05:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 515527,
          name: 'Bardolpura Muni. School -1',
          address: 'Near Madhupura UHC Bardolpura',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'Central Zone',
          pincode: 380004,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '18:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: '3d39dfb1-fcc9-49de-bea1-cca36eba92c1',
              date: '22-05-2021',
              available_capacity: 0,
              min_age_limit: 18,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-06:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 516215,
          name: 'K G K School Kubernagar',
          address: 'Bunglow Area Kubernagar',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'North Zone',
          pincode: 382340,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '17:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: 'cac31121-e98a-4eb6-8429-015a2b580978',
              date: '22-05-2021',
              available_capacity: 100,
              min_age_limit: 18,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-05:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 576653,
          name: 'Meghaninagar Uhc',
          address: 'Under Memco Bridge Rameshwar Cross Road Meghaninagar',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'North Zone',
          pincode: 380016,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '17:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: 'd41c5114-5d3b-4cc3-8f3e-1ddb2cd99bde',
              date: '22-05-2021',
              available_capacity: 0,
              min_age_limit: 45,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-05:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 591177,
          name: 'Kankaria Urban Health Center',
          address: 'Besides Parsi Agiyari Kankaria',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'NA-',
          pincode: 380022,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '17:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: 'a691612f-3b5a-47c6-ae83-82d9cb215e4a',
              date: '22-05-2021',
              available_capacity: 10,
              min_age_limit: 45,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-05:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 517092,
          name: 'Sarvajanik School',
          address: 'Sarvajanik School Opp Ucco Bank Sarkhej',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'south West Zone',
          pincode: 380055,
          lat: 22,
          long: 72,
          from: '09:00:00',
          to: '17:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: 'fa1ad1da-6513-4486-bd4f-a8a3ef6884ae',
              date: '22-05-2021',
              available_capacity: 0,
              min_age_limit: 18,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-05:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 518264,
          name: 'Bagefirdosh Guj. School',
          address:
            'Bagefirdosh Guj. School Opp Prakash Estate Rita Nagar Ahmedabad',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'NA-',
          pincode: 380026,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '18:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: 'ea2facce-7331-4ba0-ada9-28f8d1d41c86',
              date: '22-05-2021',
              available_capacity: 30,
              min_age_limit: 18,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-06:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 600886,
          name: 'Dariyapur UHC',
          address: 'DARIYAPUR JORDAN ROAD',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'Central Zone',
          pincode: 380001,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '17:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: '63906069-3255-4fb9-8cf4-e57a51f0402c',
              date: '22-05-2021',
              available_capacity: 0,
              min_age_limit: 45,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-05:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 515525,
          name: 'Jhangirpura',
          address: 'Jhangirpura School',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'Central Zone',
          pincode: 380016,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '18:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: '87de7c52-4d2c-447d-be85-38f46aba2647',
              date: '22-05-2021',
              available_capacity: 0,
              min_age_limit: 18,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-06:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 515146,
          name: 'Dariapur Municipal School No 8',
          address: 'Pitaliya Banba Gheekanta Road',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'Central Zone',
          pincode: 380001,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '18:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: '2c6924a1-b113-4a46-a1de-6381e9dc2353',
              date: '22-05-2021',
              available_capacity: 0,
              min_age_limit: 18,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-06:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 555819,
          name: 'Sarkhej CHC',
          address: 'Sarkhej CHC Nr Sarkhej ITI Opp Shakri Talav',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'south West Zone',
          pincode: 382210,
          lat: 22,
          long: 72,
          from: '09:00:00',
          to: '17:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: '2733d85e-525d-4bb8-a3a0-e7510c272607',
              date: '22-05-2021',
              available_capacity: 0,
              min_age_limit: 45,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-05:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        },
        {
          center_id: 644489,
          name: 'CITY SCHOOL KHIJADI NI POL',
          address: 'KHIJADI NI POL KHADIA',
          state_name: 'Gujarat',
          district_name: 'Ahmedabad Corporation',
          block_name: 'Central Zone',
          pincode: 380001,
          lat: 23,
          long: 72,
          from: '09:00:00',
          to: '18:00:00',
          fee_type: 'Free',
          sessions: [
            {
              session_id: 'b37ea239-bd74-44dc-befa-1fef4a549b25',
              date: '22-05-2021',
              available_capacity: 150,
              min_age_limit: 18,
              vaccine: 'COVISHIELD',
              slots: [
                '09:00AM-11:00AM',
                '11:00AM-01:00PM',
                '01:00PM-03:00PM',
                '03:00PM-06:00PM'
              ],
              available_capacity_dose1: 0,
              available_capacity_dose2: 0
            }
          ]
        }
      ]
    });
    //return this.http.get(  'https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=770&date=22-05-2021' );
  }

  public getAvailableSlot() {
    return this.http.get(
      'https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=770&date=22-05-2021'
    );
  }
}
