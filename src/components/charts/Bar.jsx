import React from "react";

import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
function Bar() {
    const dataA = [
        { month: 'Jan', sales: 355 }, { month: 'Feb', sales: 390 },
        { month: 'Mar', sales: 300 }, { month: 'Apr', sales: 350 },
        { month: 'May', sales: 390 }, { month: 'Jun', sales: 180 },
       
    ];
    const dataB = [
        { month: 'Jan', sales: 280 }, { month: 'Feb', sales: 250 },
        { month: 'Mar', sales: 325 }, { month: 'Apr', sales: 215 },
        { month: 'May', sales: 250 }, { month: 'Jun', sales: 310 },
       
    ];
    const palette  = [
        "#f7d08b","#f1c3d2"
    ]
    const primaryxAxis = { 
        valueType: 'Category',
        majorGridLines: {color: 'none',},
        minorGridLines: {color: 'none',} 
    };
    const primaryyAxis = {  lineStyle: { width: 0 },
    maximum: 400,
    interval: 100,
    minimum: 100,
    labelStyle: { color: 'gray' }, 
    majorGridLines: {color: 'none',},
    minorGridLines: {color: 'none',} 
};

    return (
    <div >
        <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} palettes={palette}>
        <Inject services={[ColumnSeries, Legend, LineSeries, Category]}/>
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={dataA} xName='month' type='Column' yName='sales' name='' columnSpacing={0.2} columnWidth={0.40} cornerRadius={{topLeft: 10, topRight: 10 }} />
            <SeriesDirective dataSource={dataB} xName='month' type='Column' yName='sales' columnSpacing={0.2} columnWidth={0.40} cornerRadius={{topLeft: 10, topRight: 10 }} />
        </SeriesCollectionDirective>
        </ChartComponent> 
    </div>)
}
;
export default Bar;
