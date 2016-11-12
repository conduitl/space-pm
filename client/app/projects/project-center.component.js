"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var project_service_1 = require('./project.service');
// Project Center will actually call the service rather than allow the list to
// this is because project center needs to verify that the projects are projects
// the list needs to be a shared template that will display any kind of list.
var ProjectCenterComponent = (function () {
    function ProjectCenterComponent(projectService) {
        this.projectService = projectService;
        /* Settings for table */
        this.projectSettings = [
            {
                primaryKey: 'name'
            },
            {
                primaryKey: 'first_launch',
                header: 'First Launch',
                alternativeKeys: ['launch_date', 'first_flight']
            },
            {
                primaryKey: 'budget',
                format: 'currency'
            },
            {
                primaryKey: 'spend',
                format: 'currency'
            },
            {
                primaryKey: 'percent_budget_spent',
                header: 'Spend %'
            }
        ];
        // filter settings
        this.filterConfig = {
            exclude_keys: ['launch_date', 'budget']
        };
    }
    ProjectCenterComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getProjects();
        this.projectColFormat = this.projectService.defineValueFormats({
            launch_date: 'date:MMM y',
            budget: 'currency:USD:true:1.0-0',
            spend: 'currency:USD:true:1.0-0'
        });
    };
    ProjectCenterComponent.prototype.applyFilter = function (filter, settings) {
        this.projects = this.projectService.filterProjects(filter, settings);
        this.clearAlert();
    };
    ProjectCenterComponent.prototype.displayAlert = function (message) {
        this.alert = message;
    };
    ProjectCenterComponent.prototype.clearAlert = function () {
        this.alert = null;
    };
    ProjectCenterComponent = __decorate([
        core_1.Component({
            selector: 'project-center',
            templateUrl: 'app/projects/project-center.component.html'
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectCenterComponent);
    return ProjectCenterComponent;
}());
exports.ProjectCenterComponent = ProjectCenterComponent;
//# sourceMappingURL=project-center.component.js.map