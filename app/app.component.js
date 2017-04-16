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
var AppComponent = (function () {
    function AppComponent() {
        this.role_arr = ["Admin", "Member", "Super Admin", "Supervisor"];
        this.filterArr = []; // This array stores the names of the user of the chosen role
        this.user_arr = [
            {
                name: "Crawford Maxwell",
                age: 30,
                role: "Admin",
            },
            {
                name: "Rob Hoyt",
                age: 26,
                role: "Member",
            },
            {
                name: "Gordon Cody",
                age: 28,
                role: "Member",
            },
            {
                name: "Bala Savitri",
                age: 24,
                role: "Member",
            },
            {
                name: "Kumari Madhavi",
                age: 29,
                role: "Admin",
            },
            {
                name: "Radha Saraswati",
                age: 29,
                role: "Super Admin",
            },
            {
                name: "Sundara Baladeva",
                age: 30,
                role: "Member",
            },
            {
                name: "Varuna Pitambara",
                age: 24,
                role: "Supervisor",
            }
        ];
    }
    AppComponent.prototype.openEmpDetails = function (a) {
        for (var _i = 0, _a = this.user_arr; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.role === a) {
                this.filterArr.push(user.name); // if a match is found, push the employee name to the filterArr for display in the html
            }
        }
    };
    AppComponent.prototype.reset = function () {
        this.filterArr = [];
        this.filterArr.length = 0;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./app/app.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map