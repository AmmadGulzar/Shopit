import React from "react";

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../data/dummy';
function Sparkline() {
    const primaryxAxis = { visible : false};
    const primaryYAxis = { visible : false};
    const chartArea = { border : {width :0},  };


    return (
      <div className="">
    <ChartComponent id='charts' chartArea={chartArea} primaryXAxis={primaryxAxis} primaryYAxis={primaryYAxis} >
      <Inject services={[SplineAreaSeries]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={SparklineAreaData} xName='x' yName='yval' name='London' type='SplineArea' fill='#f7d08b' opacity='0.4' border={{width: 3, color:'#f7d08b'}}  >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    )
}
;
export default Sparkline;
