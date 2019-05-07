import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cup } from '../models/cup';

@Injectable({ providedIn: 'root' })
export class CupsService {
    constructor() { }

    getAllCupsData(): Cup[] {
        return JSON.parse(localStorage.getItem('cups')) || [];
    }

    getCupById(id: number) {
        const cup = this.getAllCupsData().find(x => x.id == id);
        return cup;
        // return ok(user);
    }

    addCup(cupData): Observable<any> {
        const cupsData = this.getAllCupsData();
        const newCupData: Cup = {
            id: cupsData.length ? Math.max(...cupsData.map(x => x.id)) + 1 : 1,
            name: cupData.name,
            action: cupData.action,
            type: cupData.type
        };
        cupsData.push(newCupData);
        localStorage.setItem('cups', JSON.stringify(cupsData));
        return of(null);
    }
    editCup(cupData: Cup): Observable<any> {
        let cupsData = this.getAllCupsData();
        // const currentCup = this.getCupById(cupData.id);

        for (var i in cupsData) {
            if (cupsData[i].id == cupData.id) {
                cupsData[i] = cupData;
                break; //Stop this loop, we found it!
            }
        }
        localStorage.setItem('cups', JSON.stringify(cupsData));
        return of(null);
    }
    deleteCup(id: number): Observable<any> {
        let cupsData = this.getAllCupsData();
        cupsData = cupsData.filter(x => x.id !== id);
        localStorage.setItem('cups', JSON.stringify(cupsData));
        return of(null);
    }


}
