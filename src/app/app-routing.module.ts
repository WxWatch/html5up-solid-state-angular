import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpeedrunsComponent } from './speedruns/speedruns.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'speedruns',
        component: SpeedrunsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
