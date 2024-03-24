import React from "react";

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../data/dummy';
function Sparkline() {
    const primaryxAxis = { visible : false , rangePadding: 'None', canResize: true, };
    const primaryYAxis = { visible : false,canResize: true ,rangePadding: 'None'};
    const chartArea = { border : {width :0}, canResize: true ,rangePadding: 'None' };


    return (
    <div className=" h-full absolute w-[115%] left-[-1rem] bottom-[-1rem]">
      <ChartComponent id='chart1' chartArea={chartArea} primaryXAxis={primaryxAxis} primaryYAxis={primaryYAxis} width="100%" height="100%"  >
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
