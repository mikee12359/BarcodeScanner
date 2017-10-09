"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var NavigationService = (function () {
    function NavigationService(_router) {
        this._router = _router;
    }
    NavigationService.prototype.backToPreviousPage = function () {
        if (this._router.canGoBack()) {
            this._router.back();
        }
        else {
            this.navigateToControlPage(true);
        }
    };
    NavigationService.prototype.navigateToControlPage = function (clearHistory) {
        if (clearHistory === void 0) { clearHistory = false; }
        this._router.navigate(["/controlPage"], {
            clearHistory: clearHistory, animated: true, transition: {
                name: "slide",
                duration: 250,
                curve: "linear"
            }
        });
    };
    NavigationService.prototype.navigateToWebViewPage = function (clearHistory) {
        if (clearHistory === void 0) { clearHistory = false; }
        this._router.navigate(["/webviewPage"], {
            clearHistory: clearHistory, animated: true, transition: {
                name: "slide",
                duration: 250,
                curve: "linear"
            }
        });
    };
    NavigationService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    NavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQXdEO0FBQ3hELHNDQUEyQztBQUUzQyw4QkFBcUM7QUFFckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQjtJQUNFLDJCQUFvQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUFJLENBQUM7SUFFM0MsOENBQWtCLEdBQXpCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUIsVUFBNkIsWUFBNkI7UUFBN0IsNkJBQUEsRUFBQSxvQkFBNkI7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUN0RCxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxpREFBcUIsR0FBNUIsVUFBNkIsWUFBNkI7UUFBN0IsNkJBQUEsRUFBQSxvQkFBNkI7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUN0RCxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyx3Q0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFsQ1UsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBRWtCLHVDQUFnQjtPQURsQyxpQkFBaUIsQ0FtQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIHB1YmxpYyBiYWNrVG9QcmV2aW91c1BhZ2UoKSB7XG4gICAgaWYgKHRoaXMuX3JvdXRlci5jYW5Hb0JhY2soKSkge1xuICAgICAgdGhpcy5fcm91dGVyLmJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYXZpZ2F0ZVRvQ29udHJvbFBhZ2UodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9Db250cm9sUGFnZShjbGVhckhpc3Rvcnk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvY29udHJvbFBhZ2VcIl0sIHtcbiAgICAgIGNsZWFySGlzdG9yeTogY2xlYXJIaXN0b3J5LCBhbmltYXRlZDogdHJ1ZSwgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb1dlYlZpZXdQYWdlKGNsZWFySGlzdG9yeTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi93ZWJ2aWV3UGFnZVwiXSwge1xuICAgICAgY2xlYXJIaXN0b3J5OiBjbGVhckhpc3RvcnksIGFuaW1hdGVkOiB0cnVlLCB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgZHVyYXRpb246IDI1MCxcbiAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufSJdfQ==