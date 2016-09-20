import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'project-list',
    template: `
        <h2>Projects Overview</h2>
        <p>Summary of projects here</p>
        <router-outlet></router-outlet>
        <h3>LIST OF PROJECTS</h3>
        <p>Table listing all the projects</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Astronauts</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let project of projects"
                    [class.selected]="isSelected(project)"
                    (click)="onSelect(project)">
                    <td>{{project.name}}</td>
                    <td>{{project.mission_date}}</td>
                    <td>{{project.personnel[0]}}</td>
                    <td>
                        <button class="btn btn-default">view details</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC;
            color: white;
        }
    `]
})
export class ProjectListComponent implements OnInit { 
    // Issues
    // #initSelection
    // * when ':id' route param navigated to via url, corresponding project should be highlighted in table oninit
    private selectedId: number;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService
    ) { }
    projects: Project[];
    ngOnInit(): void {
        this.route.params.forEach( (params: Params) => {
            this.selectedId = +params['id'];
            this.getProjects();
        })
        
    }
    getProjects(): void {
        this.projectService.getProjects()
            .then ( (projects) => {
                this.projects = projects;
            });
    }
    onSelect(project: Project): void {
        this.router.navigate(['/projects', project.id]);
        this.selectedId = project.id; // successfully driving row highlights on click
    }
    isSelected(project: Project) {
        return project.id === this.selectedId;
    }
}