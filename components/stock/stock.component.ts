//Component controller

class StockController implements ng.IComponentController {
    static $inject = ['$log'];
    public title: string;
    constructor(private $log: ng.ILogService) {
        this.title =  "Widget 1 in TypeScript";
        $log.log("in Stock constructor");
    }
    $onInit(): void {
        console.log("Init of Stock Called");
    }
}

let widgetTemplate=
'<section class="smart-targets-card">'+
  '<header class="p-a-15 p-b-0 card-draggable"><h3 class="m-y-0">Stock Component</h3></header>'+
  '<div class="col-xs-12 absolute"'+
    '<div class="smart-targets-table">'+
      '<div class="smart-targets-table-body">'+
        '<div class="smart-targets-table">'+
          '<div class="smart-targets-table-cell text-right wid-20">'+
          'NDAQ-USQ'+
          '</div>'+
          '<div class="smart-targets-table-cell text-right wid-20">'+
          '102.34 USD'+
          '</div>'+
        '</div>'+
        '<div class="smart-targets-table">'+
          '<div class="smart-targets-table-cell text-right wid-20">'+
          'JPM-USQ'+
          '</div>'+
          '<div class="smart-targets-table-cell text-right wid-20">'+
          '68.56 USD'+
          '</div>'+
        '</div>'+
        '<div class="smart-targets-table">'+
          '<div class="smart-targets-table-cell text-right wid-20">'+
          'BBBY-USQ'+
          '</div>'+
          '<div class="smart-targets-table-cell text-right wid-20">'+
          '67.34 USD'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</section>';

// Widget component
let StockComponent = { controller: StockController, template: widgetTemplate}

export default StockComponent