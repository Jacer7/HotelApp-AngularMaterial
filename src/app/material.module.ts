import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';




@NgModule (
    {
        imports: [
            MatBadgeModule,
            MatDialogModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatButtonToggleModule,
            MatListModule,
            MatTabsModule,
            MatCardModule


        ],

        exports: [
            MatBadgeModule,
            MatButtonModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatButtonToggleModule,
            MatListModule,
            MatTabsModule,
            MatCardModule
            
        ]
    }
)

export class MaterialModule {}