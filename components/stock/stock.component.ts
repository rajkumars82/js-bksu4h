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
  '<table style="width:90%;margin-left:25px">'+
    '<th>'+
      '<tr style="font-weight:bold">'+
        '<td>Symbol</td>'+
        '<td style="text-align:right">Current Price (USD)</td>'+
        '<td style="text-align:right">Previous Price (USD)</td>'+
      '</tr>'+
      '</th>'+
      '<tr>'+
        '<td>NDAQ-USQ</td>'+
        '<td style="text-align:right">102.3</td>'+
        '<td style="text-align:right">99.98</td>'+
      '</tr>'+
      '<tr style="color:red;font-weight:bold">'+
        '<td>JPM-USQ</td>'+
        '<td style="text-align:right">67.89</td>'+
        '<td style="text-align:right">67.56</td>'+
      '</tr>'+
      '<tr>'+
        '<td>BBBY-USQ</td>'+
        '<td style="text-align:right">45.67</td>'+
        '<td style="text-align:right">46.00</td>'+
      '</tr>'+
      '<tr>'+
        '<td>FB-USQ</td>'+
        '<td style="text-align:right">78.33</td>'+
        '<td style="text-align:right">77.00</td>'+
      '</tr>'+
      '<tr>'+
        '<td>AMZN-USQ</td>'+
        '<td style="text-align:right">1000.67</td>'+
        '<td style="text-align:right">995.03</td>'+
      '</tr>'+
    '</table>'+
'</section>';

// Widget component
let StockComponent = { controller: StockController, template: widgetTemplate}

export default StockComponent