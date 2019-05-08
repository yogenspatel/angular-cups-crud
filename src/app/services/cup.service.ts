import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cup } from '../models/cup';

@Injectable({ providedIn: 'root' })
export class CupsService {
    constructor() { }

    getAllCupsData(): Cup[] {
        return JSON.parse(localStorage.getItem('cups')) || [];
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
        const cupIndex = cupsData.findIndex((cup => cup.id == cupData.id));
        cupsData[cupIndex] = cupData;
        localStorage.setItem('cups', JSON.stringify(cupsData));
        return of(null);
    }
    
    deleteCup(id: number): Observable<any> {
        let cupsData = this.getAllCupsData();
        cupsData = cupsData.filter(cup => cup.id !== id);
        localStorage.setItem('cups', JSON.stringify(cupsData));
        return of(null);
    }
}
