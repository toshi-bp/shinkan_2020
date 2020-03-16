<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
    class="campus-map"
    :class="{'campus-map--grabbing': isMouseDown}"
    @mousedown.prevent="onMouseDownMap"
    @mousemove.prevent="onMouseMoveMap"
    @mouseup.prevent="onMouseUpMap"
    @mouseleave.prevent="onMouseUpMap"
    @touchstart.prevent="onTouchStartMap"
    @touchmove.prevent="onTouchMoveMap"
    @touchend.prevent="onTouchEndMap"
    @touchcancel.prevent="onTouchEndMap"
    @wheel.prevent="onWheelMap"
    ref="campusMap"
  >
  <g id="シンボル定義">
    <!-- <symbol id="ゴミ箱" viewBox="-7.3 -7.3 14.7 14.7">
      <circle style="fill:#595757;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;" cx="0" cy="0" r="7.1"/>
      <g>
        <path style="fill:#FFFFFF;" d="M3.8,2.7V2.4c0-0.1-0.1-0.3-0.3-0.3H3.2v-5.7c0-0.4-0.4-0.8-0.8-0.8h-4.9c-0.4,0-0.8,0.4-0.8,0.8
          v5.7h-0.3c-0.1,0-0.3,0.1-0.3,0.3v0.3C-3.8,2.8-3.7,3-3.5,3h1.4l0.6,1c0.1,0.2,0.4,0.4,0.7,0.4h1.7c0.3,0,0.6-0.2,0.7-0.4l0.6-1
          h1.4C3.7,3,3.8,2.8,3.8,2.7z M2.4,2.2h-4.9v-5.7h4.9V2.2z M-1.4-2.5v3.6c0,0.1,0.1,0.2,0.2,0.2h0.4c0.1,0,0.2-0.1,0.2-0.2v-3.6
          c0-0.1-0.1-0.2-0.2-0.2h-0.4C-1.3-2.7-1.4-2.6-1.4-2.5z M-1.2,3h2.4L0.9,3.5c0,0-0.1,0-0.1,0h-1.6c0,0-0.1,0-0.1,0L-1.2,3z
          M0.5-2.5v3.6c0,0.1,0.1,0.2,0.2,0.2h0.4c0.1,0,0.2-0.1,0.2-0.2v-3.6c0-0.1-0.1-0.2-0.2-0.2H0.7C0.6-2.7,0.5-2.6,0.5-2.5z"/>
      </g>
    </symbol>
    <symbol id="喫煙所" viewBox="-7.3 -7.3 14.7 14.7">
      <circle style="fill:#171C61;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;" cx="0" cy="0" r="7.1"/>
      <g>
        <path style="fill:#FFFFFF;" d="M1.9-1.1V-3c0-0.1-0.1-0.2-0.2-0.2h-5.8c-0.4,0-0.7,0.3-0.7,0.7v1c0,0.4,0.3,0.7,0.7,0.7h5.8
          C1.8-0.8,1.9-1,1.9-1.1z M1.2-1.6h-2.6v-1h2.6V-1.6z M3.4,0.7V0.2c0-0.1-0.1-0.1-0.1-0.1H2.5c-0.1,0-0.1,0.1-0.1,0.1v0.5
          c0,0.4-0.2,0.8-0.5,1C1.3,2.1,1,2.7,1,3.3v1C1,4.4,1,4.5,1.1,4.5h0.7c0.1,0,0.1-0.1,0.1-0.1V3.4c0-0.4,0.2-0.8,0.6-1.1
          C3.1,2,3.4,1.3,3.4,0.7z M4.8,0.7V0.2c0-0.1-0.1-0.1-0.1-0.1H4c-0.1,0-0.1,0.1-0.1,0.1v0.5c0,0.8-0.4,1.5-1,1.9
          C2.6,2.7,2.4,3.1,2.4,3.4v0.9c0,0.1,0.1,0.1,0.1,0.1h0.7c0.1,0,0.1-0.1,0.1-0.1V3.4c0-0.1,0.1-0.2,0.1-0.3
          C4.3,2.6,4.8,1.7,4.8,0.7z M3.4-1v-2.2c0-0.1-0.1-0.1-0.1-0.1H2.5c-0.1,0-0.1,0.1-0.1,0.1V-1c0,0.1,0.1,0.1,0.1,0.1h0.7
          C3.3-0.8,3.4-0.9,3.4-1z M4.8-1v-2.2c0-0.1-0.1-0.1-0.1-0.1H4c-0.1,0-0.1,0.1-0.1,0.1V-1c0,0.1,0.1,0.1,0.1,0.1h0.7
          C4.8-0.8,4.8-0.9,4.8-1z"/>
      </g>
    </symbol>
    <symbol id="案内所" viewBox="-7.3 -7.3 14.7 14.7">
      <circle style="fill:#F39800;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;" cx="0" cy="0" r="7.1"/>
      <g>
        <path style="fill:#FFFFFF;" d="M-1-2.9v2.5h-0.3c-0.2,0-0.3,0.2-0.3,0.3v0.8c0,0.2,0.2,0.3,0.3,0.3h1.9C0.8,1.1,1,0.9,1,0.7v-3.6
          h0.3c0.2,0,0.3-0.2,0.3-0.3V-4c0-0.2-0.2-0.3-0.3-0.3h-2.6c-0.2,0-0.3,0.2-0.3,0.3v0.8c0,0.2,0.2,0.3,0.3,0.3H-1z M1.2,3.1
          c0-0.7-0.5-1.2-1.2-1.2c-0.7,0-1.2,0.5-1.2,1.2c0,0.7,0.5,1.2,1.2,1.2C0.7,4.3,1.2,3.8,1.2,3.1z"/>
      </g>
    </symbol>
    <symbol id="駐輪場" viewBox="-7.3 -7.3 14.7 14.7">
      <circle style="fill:#6A4196;stroke:#FFFFFF;stroke-width:0.5;stroke-linejoin:round;stroke-miterlimit:10;" cx="0" cy="0" r="7.1"/>
      <g>
        <path style="fill:#FFFFFF;" d="M5.2-1.1c0-1.1-0.9-2-2.1-2C2-3.1,1-2.2,1-1c0,0.6,0.3,1.1,0.7,1.5L1.5,0.9L0.1-1.4
          C0-1.5-0.1-1.6-0.3-1.6h-0.8c-0.2-0.9-1-1.6-2-1.6c-1.1,0-2.1,0.9-2.1,2.1C-5.2,0.1-4.2,1-3.1,1c0.2,0,0.5,0,0.7-0.1l0.5,0.8h-0.8
          c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4h1.4C-1.2,2.5-1,2.3-1,2.2V1.9h1.8L0.6,2.3h-0.8c-0.1,0-0.3,0.1-0.3,0.3v0.3
          c0,0.1,0.1,0.3,0.3,0.3h1C0.9,3.1,1,3,1.1,2.9l1.3-2C2.6,1,2.8,1,3.1,1C4.3,1,5.2,0.1,5.2-1.1z M-1.9-1.6h-1.3
          c-0.3,0-0.5,0.3-0.3,0.6l0.7,1.2c-0.1,0-0.2,0-0.3,0c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3C-2.6-2.3-2.1-2-1.9-1.6z M-2.5-0.8
          h0.7c0,0.2-0.2,0.4-0.3,0.6L-2.5-0.8z M0.7,1.2h-2.1l-0.4-0.6c0.4-0.3,0.6-0.8,0.7-1.3h0.6L0.7,1.2z M4.4-1c0,0.7-0.6,1.3-1.3,1.3
          h0c-0.1,0-0.2,0-0.3,0l0.7-1.2c0.1-0.1,0-0.3-0.1-0.4L3.2-1.4c-0.1-0.1-0.3,0-0.4,0.1L2.1-0.2C1.9-0.4,1.8-0.7,1.8-1.1
          c0-0.7,0.6-1.2,1.2-1.2C3.8-2.4,4.4-1.8,4.4-1z"/>
      </g>
    </symbol> -->
  </g>
  <g :transform="transformForScalable" ref="campusMapWrap">
    <g id="芝生">
      <path style="fill:#DBEAB8;" d="M552.1,305.3c2.5-2.9,6.3-4.8,10.4-4.7c6.7,0.2,12.1,5.3,12.7,11.8l4.5-21.5l-37.2-7.6l-3.9,20.5
        L552.1,305.3L552.1,305.3z"/>
      <path style="fill:#DBEAB8;" d="M561.8,326.9c-4.2-0.1-7.9-2.2-10.3-5.4l0,0l-16.5,1.6l-5.9,30.6l8.9,1.3l3,14.7l22.6-1.4l10.1-48.1
        C571.3,324.4,566.8,327.1,561.8,326.9z"/>
      <circle style="fill:#DBEAB8;" cx="561.9" cy="313.4" r="6.5"/>
      <polygon style="fill:#DBEAB8; stroke:#DBEAB8" points="471.9,155 559.4,174 521.4,352.8 512.4,351.4 508,371.2 475.3,371.7 467.4,212.2 	" @click.exact="onClickLabel('薬学部芝生')" @touchstart="onClickLabel('薬学部芝生')" class="clickable-bldg"/>
      <polygon style="fill:#DBEAB8;" points="560.6,206.9 550.9,247.9 587.3,256.3 596.2,215 	"/>
      <polyline style="fill:#DBEAB8;" points="601.8,296.3 597.1,358 565.2,358.1 563.6,368.4 698.4,360.1 713.4,292 705.4,290.6
        699,321.1 623.8,304.9 624.6,301.3 601.8,296.3 	"/>
      <polygon style="fill:#DBEAB8;" points="485,490.4 536.1,475.6 525.8,378.7 517,379 530.8,464.9 483.8,463.5 	"/>
      <polygon style="fill:#DBEAB8;" points="533.4,378.3 542.1,479.7 485.3,495.7 485.5,499 523.7,497.9 529.2,523.9 577.8,525.4
        560.4,376.6 	"/>
      <polygon style="fill:#DBEAB8;" points="599.5,22.1 568.5,167.9 622.2,177.4 632.3,128.8 743.8,154.6 759.7,82.7 762.7,37 	"/>
      <path style="fill:#DBEAB8;" d="M150.9,563.4l-2.8-0.1c-0.4,0-0.9,0.2-1.2,0.5l-23.2,22.6c-0.2,0.2-0.3,0.4-0.4,0.7l-3.5,11.7
        c0,0.1-0.1,0.3-0.1,0.4l-0.1,4.7c0,0.9,0.7,1.7,1.6,1.7l29.6-0.1c0.9,0,1.6-0.7,1.6-1.6l0-38.8
        C152.5,564.2,151.8,563.5,150.9,563.4z"/>
      <path style="fill:#DBEAB8;" d="M127.9,489.8l22,0.6c1.1,0,1.9,0.9,1.9,2L152,531c0,0.5-0.2,1-0.5,1.4l-3.8,4.1
        c-0.4,0.4-0.9,0.6-1.5,0.6l-4.3-0.1c-1.1,0-2,0.8-2,1.9l-0.9,19.9c0,0.5-0.2,1-0.6,1.4l-25,23.9c-0.2,0.2-0.4,0.4-0.5,0.7l-6.3,15
        c-0.3,0.8-1.1,1.2-1.9,1.2l-3.2-0.1c-1.3,0-2.2-1.2-1.9-2.5l26.3-107C126.1,490.4,127,489.8,127.9,489.8z"/>
      <path style="fill:#DBEAB8;" d="M149.8,555.3l-3.9-0.1c-0.5,0-1-0.5-0.9-1l0.3-9.1c0-0.5,0.5-1,1-0.9l3.9,0.1c0.5,0,1,0.5,0.9,1
        l-0.3,9.1C150.8,554.9,150.3,555.4,149.8,555.3z"/>
      <polygon style="fill:#DBEAB8;" points="144.1,430.1 143,482.7 127.8,482.3 140.5,430.1 	"/>
      <polygon style="fill:#DBEAB8;" points="78.4,558.9 78.4,607.3 85.4,611.3 98.2,559.1 	"/>
      <polygon style="fill:#DBEAB8;" points="103.1,637.6 78.2,662.1 77.9,672.2 83.3,685.6 150.6,671.2 151,626.1 109.3,626.5 	"/>
      <polygon style="fill:#DBEAB8; stroke:#DBEAB8" points="210,489 209.1,559.8 307.3,560.2 307.3,521.5 338.1,521.5 337.9,488.4" @click.exact="onClickLabel('中庭')" @touchstart="onClickLabel('中庭')" class="clickable-bldg"/>
      <polygon style="fill:#DBEAB8;" points="370.7,425.8 370.8,455 475,455 472,426.2 	"/>
      <path style="fill:#DBEAB8;" d="M700.7,368.4v10.8l26.8,23.6l70.4,171.7c1.5,3.8,5,6.4,9.1,6.8l91.7,8.8c3.5,0.3,7-0.3,10.1-2
        c14.9-8,56.6-37.4,54.9-115.1c-1.4-68.5,2.5-68.6-7.9-79.4C944.6,382,896,368.8,896,368.8l-182.3-39.9l-8.6,39L700.7,368.4z"/>
    </g>
    <g id="道路">
      <g id="公道">
        <polygon style="fill:none;stroke:#DCDDDD;stroke-width:6;stroke-miterlimit:10;" points="87.7,622.7 495.9,619 482.8,522.4
          479.1,457 471.5,375.8 312.7,375.2 163.1,373.9 142.9,399.4 116.7,504.5 		"/>
        <polygon style="fill:none;stroke:#DCDDDD;stroke-width:6;stroke-miterlimit:10;" points="479.7,3.4 463.4,212.2 471.5,375.8
          521.6,375 701.6,363.9 763.7,83.3 766.9,33.4 597,17.8 		"/>
        <polyline style="fill:none;stroke:#DCDDDD;stroke-width:6;stroke-miterlimit:10;" points="87.7,622.7 60.9,655.5 28.1,677.9 		"/>
        <line style="fill:none;stroke:#DCDDDD;stroke-width:6;stroke-miterlimit:10;" x1="80.6" y1="631.4" x2="16.9" y2="630.2"/>
      </g>
    </g>
    <g id="下地">
      <g id="背景">
        <rect x="159.8" y="487.7" style="fill:#F5DCD7;" width="42.2" height="119.1"/>
        <rect x="160" y="636.2" style="fill:#FBDEE5;" width="47.2" height="32.8"/>
        <polygon style="fill:#FBDEE5;" points="292.8,691.7 253.7,682.3 213.5,675.8 213.5,633.8 292.8,633.8 		"/>
        <polygon style="fill:#F5DCD7;" points="150.8,612.7 116.4,613.2 115.8,607.8 112.4,608.2 113.7,618.5 150.9,618.1 		"/>
        <polygon style="fill:#F5DCD7;" points="251.3,617.4 160.1,618 160.4,612.6 251.4,612.6 		"/>
        <polygon style="fill:#F5DCD7;" points="400.1,615.8 263.8,617 263.9,612.4 293.3,612.2 303.6,601.7 303.9,564.2 400.1,564.2 		"/>
        <rect x="407.3" y="581.3" style="fill:#F5DCD7;" width="42.5" height="34.3"/>
        <rect x="307.3" y="521.5" style="fill:#F5DCD7;" width="94.1" height="38.7"/>
        <rect x="344.4" y="488" style="fill:#F5DCD7;" width="114" height="28.6"/>
        <polygon style="fill:#F5DCD7;" points="478.3,516.1 467.5,516.1 467.5,500.3 477.1,500 		"/>
        <polygon style="fill:#F5DCD7;" points="477,490.9 475,455 370.8,455 370.7,441.7 370.7,379.2 316.4,379.2 316.4,444.1
          359.3,444.1 359.3,460.6 359.3,460.6 359.3,481.4 467.1,481.4 467.4,491.3 		"/>
        <rect x="313.9" y="446.9" style="fill:#F5DCD7;" width="42.2" height="34.3"/>
        <rect x="244.9" y="438.1" style="fill:#F5DCD7;" width="63.2" height="42.9"/>
        <polygon style="fill:#DBDFF1;" points="731.2,211.8 566.7,175.8 560.7,203.5 670.8,227.5 661.2,271.5 715.2,283.2 725.1,239.3
          "/>
        <rect x="151.7" y="438" style="fill:#F5DCD7;" width="85.4" height="42.9"/>
        <polygon style="fill:#F5DCD7;" points="309.6,430.1 273.4,430.1 273.4,379.1 309.8,379.1 		"/>
        <polygon style="fill:#F5DCD7;" points="266.7,430.1 140.5,430.1 147.4,402 158.3,388.4 177.8,378 266.7,379.1 		"/>
        <polygon style="fill:#F5DCD7;" points="453.7,615 491.2,615 483.3,556.2 483.3,556.2 478.9,521.3 405.8,521.3 405.8,543.5
          405.8,543.5 405.8,577.8 449.7,577.8 449.7,558 453.7,558 		"/>
        <polygon style="fill:#F5DCD7;" points="300.1,600.3 300.1,564.2 207.8,564.2 207.8,607.1 292.8,607.1 		"/>
        <rect x="544.1" y="269.5" transform="matrix(0.9771 0.2127 -0.2127 0.9771 74.8 -125.5716)" style="fill:#DBDFF1;" width="153.8" height="30.6"/>
        <polygon style="fill:#DBDFF1;" points="472.5,147.9 560.9,166.5 590.7,21.1 483.3,7.8 		"/>
        <polygon style="fill:#DBDFF1;" points="632.3,128.8 622.2,177.4 733.3,202 743.8,154.6 		"/>
        <polygon style="fill:#DDD1E7;" points="534.7,393.1 562.3,390.6 570.1,458.9 540.5,461.7 		"/>
        <polygon style="fill:#D2DCCD;" points="754.3,144.3 779.3,149.8 773.2,176.5 794.9,181 790.5,202.9 743.6,192.7 		"/>
        <rect x="799" y="237.3" transform="matrix(0.9771 0.2127 -0.2127 0.9771 77.5484 -173.7845)" style="fill:#D2DCCD;" width="94.7" height="72.5"/>
        <rect x="899.3" y="256.1" transform="matrix(0.9771 0.2127 -0.2127 0.9771 82.45 -189.5226)" style="fill:#D2DCCD;" width="45.3" height="64.6"/>
        <rect x="715.6" y="313" transform="matrix(0.9771 0.2127 -0.2127 0.9771 88.9414 -164.472)" style="fill:#D2DCCD;" width="186.5" height="36.3"/>
        <rect x="739.5" y="201.2" transform="matrix(0.9771 0.2127 -0.2127 0.9771 63.382 -159.3821)" style="fill:#D2DCCD;" width="65.8" height="27.2"/>
        <rect x="728.9" y="234.7" transform="matrix(0.9771 0.2127 -0.2127 0.9771 73.5095 -156.0087)" style="fill:#D2DCCD;" width="65.8" height="57.8"/>
        <path style="fill:#FFFCDB;" d="M77.1,623.2c0,0-1.7-3.5-1.9-4s-10.8-4.3-10.8-4.3l-0.1-56.2l33.9,0.4l16.2-66.4L1.6,491.2L1,553.3
          l37.6,73.3l29.5,0.5L77.1,623.2z"/>
        <path style="fill:#FFFCDB;" d="M63.4,635.1l8.6,0.5L58.6,652c0,0-22.1,16.1-22.4,15.5c-0.3-0.6-2.5-4.1-2.5-4.1l-8.8-0.3
          l-0.2-28.9L63.4,635.1z"/>
        <rect x="663.6" y="317.4" transform="matrix(0.9771 0.2127 -0.2127 0.9771 86.8115 -136.9339)" style="fill:#DBDFF1;" width="32.3" height="35.1"/>
      </g>
      <g id="境界線">
        <line style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" x1="160.1" y1="618" x2="251.3" y2="617.2"/>
        <line style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" x1="263.8" y1="617" x2="400.1" y2="615.8"/>
        <polyline style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" points="407.3,615.6 491.2,615 478.6,521.1
          "/>
        <line style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" x1="478.3" y1="516.1" x2="477.1" y2="500"/>
        <polyline style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" points="477,490.9 475.3,458.2 472,426.2
          371.1,424.8 371.3,379.2 316.4,379.2 		"/>
        <polyline style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" points="309.8,379.1 177.8,378 158.3,388.4
          147.4,402 127.8,482.3 		"/>
        <polyline style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" points="126.3,489.8 99,600.7 106.1,600.9 		"/>
        <polyline style="fill:none;stroke:#B25A5A;stroke-width:2;stroke-miterlimit:10;" points="112.3,608.2 113.7,618.5 150.9,618.1
          "/>
        <line style="fill:none;stroke:#986474;stroke-width:2;stroke-miterlimit:10;" x1="159.9" y1="626" x2="251.1" y2="625.3"/>
        <line style="fill:none;stroke:#986474;stroke-width:2;stroke-miterlimit:10;" x1="263.6" y1="625.2" x2="282.2" y2="625"/>
        <path style="fill:none;stroke:#986474;stroke-width:2;stroke-miterlimit:10;" d="M293,623.8c-0.4,43.2-0.2,67.9-0.2,67.9
          S257,681.1,213,675.8c-26-3.1-47.3-1.6-60.9,1.2l-81.3,17.1"/>
        <line style="fill:none;stroke:#986474;stroke-width:2;stroke-miterlimit:10;" x1="151" y1="626.1" x2="109.3" y2="626.5"/>
        <polyline style="fill:none;stroke:#A09A5E;stroke-width:2;stroke-miterlimit:10;" points="85.4,611.3 114.4,492.6 1.6,491.2
          1,553.3 38.6,626.6 68.1,627.1 77.1,623.2 		"/>
        <polyline style="fill:none;stroke:#A09A5E;stroke-width:2;stroke-miterlimit:10;" points="63.4,635.1 24.7,634.3 24.9,663.2
          33.7,663.4 36.2,667.5 58.3,652.4 72,635.6 		"/>
        <line style="fill:none;stroke:#986474;stroke-width:2;stroke-miterlimit:10;" x1="89.4" y1="634.2" x2="57.3" y2="672.3"/>
        <polyline style="fill:none;stroke:#6B5478;stroke-width:2;stroke-miterlimit:10;" points="485,490.4 483.5,463.5 530.9,464.9
          517,379 525.8,378.7 		"/>
        <polyline style="fill:none;stroke:#6B5478;stroke-width:2;stroke-miterlimit:10;" points="533.4,378.3 560.4,376.6 577.8,525.4
          529.2,523.9 523.7,497.9 485.5,499 485.3,495.7 		"/>
        <polyline style="fill:none;stroke:#616F8B;stroke-width:2;stroke-miterlimit:10;" points="521.4,352.8 512.4,351.4 508,371.2
          475.3,371.7 467.4,212.2 471.9,155 		"/>
        <polyline style="fill:none;stroke:#616F8B;stroke-width:2;stroke-miterlimit:10;" points="472.5,147.9 483.3,7.8 590.7,21.1 		"/>
        <polyline style="fill:none;stroke:#616F8B;stroke-width:2;stroke-miterlimit:10;" points="599.5,22.1 762.7,37 759.7,82.7
          733.3,202 		"/>
        <line style="fill:none;stroke:#616F8B;stroke-width:2;stroke-miterlimit:10;" x1="731.2" y1="211.8" x2="715.2" y2="283.2"/>
        <polyline style="fill:none;stroke:#616F8B;stroke-width:2;stroke-miterlimit:10;" points="713.4,292 698.4,360.1 541,369.8
          538,355.1 529.1,353.8 		"/>
        <line style="fill:none;stroke:#485B47;stroke-width:2;stroke-miterlimit:10;" x1="754.3" y1="144.3" x2="737.3" y2="221.2"/>
        <line style="fill:none;stroke:#485B47;stroke-width:2;stroke-miterlimit:10;" x1="735.7" y1="228.2" x2="723.2" y2="284.8"/>
        <polyline style="fill:none;stroke:#485B47;stroke-width:2;stroke-miterlimit:10;" points="721.2,293.5 704.8,367.7 700.7,367.9
          "/>
        <line style="fill:none;stroke:#485B47;stroke-width:2;stroke-miterlimit:10;" x1="755.3" y1="139.6" x2="765.3" y2="94.6"/>
      </g>
    </g>
    <g id="建物">
      <!-- 講義棟 -->
      <rect x="323.3" y="567.5" style="fill:#DF8D88; stroke:#DF8D88" width="72.5" height="38.4" @click.exact="onClickLabel('講義棟')" @touchstart="onClickLabel('講義棟')" class="clickable-bldg"/>

      <rect x="184.5" y="593.3" style="fill:#DF8D88;" width="39.7" height="3.5" /><!--2号館と4号館をつなぐ通路-->
      <rect x="177.5" y="476.1" style="fill:#DF8D88;" width="3.6" height="27.7" /><!--2号館と3号館をつなぐ通路-->
      <rect x="350.3" y="471.4" style="fill:#DF8D88;" width="3.6" height="22.7" /><!--6号館と5号館をつなぐ通路？-->
      <rect x="398.3" y="529.4" style="fill:#DF8D88;" width="10.7" height="3.8"/><!--図書館とどっかの通路-->
      <rect x="161.8" y="643" style="fill:#EF8DA9;" width="43.7" height="24.7" @click.exact="onClickLabel('1号館')" @touchstart="onClickLabel('1号館')" class="clickable-bldg"/>
      <rect x="217.4" y="637.1" style="fill:#EF8DA9;" width="65.2" height="35.5" @click.exact="onClickLabel('カナル')" @touchstart="onClickLabel('カナル')" class="clickable-bldg"/>
      <rect x="305.6" y="568.4" style="fill:#DF8D88;" width="14.4" height="33.4" @click.exact="onClickLabel('生協')" @touchstart="onClickLabel('生協')" class="clickable-bldg"/>
      <rect x="162.7" y="501.7" style="fill:#DF8D88;" width="24.6" height="99.3" @click.exact="onClickLabel('2号館')" @touchstart="onClickLabel('2号館')" class="clickable-bldg"/>
      <rect x="156.2" y="440.9" style="fill:#DF8D88;" width="74.8" height="35.9" @click.exact="onClickLabel('3号館')" @touchstart="onClickLabel('3号館')" class="clickable-bldg"/>
      <rect x="5.3" y="530.8" style="fill:#D5C944;" width="90.2" height="22.8" @click.exact="onClickLabel('10号館')" @touchstart="onClickLabel('10号館')" class="clickable-bldg"/>
      <rect x="31.1" y="570.1" style="fill:#D5C944;" width="18.7" height="36.4" @click.exact="onClickLabel('g')" @touchstart="onClickLabel('g')" class="clickable-bldg"/>
      <rect x="5.3" y="507.2" style="fill:#D5C944;" width="77" height="15" /><!--10号館の通路的なもの-->
      <rect x="66.2" y="518.2" style="fill:#D5C944;" width="11.5" height="15" /><!--10号館の後ろ-->
      <rect x="246.8" y="440.8" style="fill:#DF8D88;" width="59.2" height="35.9" @click.exact="onClickLabel('7号館')" @touchstart="onClickLabel('7号館')" class="clickable-bldg"/>
      <rect x="315.2" y="450.6" style="fill:#DF8D88;" width="39.2" height="26.2" @click.exact="onClickLabel('5号館')" @touchstart="onClickLabel('5号館')" class="clickable-bldg"/>
      <rect x="317.3" y="382" style="fill:#DF8D88;" width="18.7" height="44.1" @click.exact="onClickLabel('l')" @touchstart="onClickLabel('l')" class="clickable-bldg"/>
      <rect x="318.5" y="429.5" style="fill:#DF8D88;" width="14.9" height="9.9" @click.exact="onClickLabel('m')" @touchstart="onClickLabel('m')" class="clickable-bldg"/>
      <rect x="343.5" y="401.3" style="fill:#DF8D88;" width="10.4" height="12.7" @click.exact="onClickLabel('n')" @touchstart="onClickLabel('n')" class="clickable-bldg"/>
      <rect x="341.7" y="386.6" style="fill:#DF8D88;" width="8" height="12.7" @click.exact="onClickLabel('o')" @touchstart="onClickLabel('o')" class="clickable-bldg"/>
      <rect x="337.2" y="421.3" style="fill:#DF8D88;" width="13.3" height="21.3" @click.exact="onClickLabel('p')" @touchstart="onClickLabel('p')" class="clickable-bldg"/>
      <polygon style="fill:#DF8D88;" points="368.7,470.6 368.7,443.7 368.7,421.2 353.2,421.2 353.3,442.6 361.5,442.6 361.5,470.6 	" @click.exact="onClickLabel('a')" @touchstart="onClickLabel('a')" class="clickable-bldg"/>
      <rect x="310.2" y="524.1" style="fill:#DF8D88; stroke:#DF8D88" width="89.6" height="31.6" @click.exact="onClickLabel('図書館')" @touchstart="onClickLabel('図書館')" class="clickable-bldg"/>
      <rect x="424.6" y="458.1" style="fill:#DF8D88;" width="45.3" height="18.7" @click.exact="onClickLabel('ad')" @touchstart="onClickLabel('ad')" class="clickable-bldg"/>
      <rect x="399.1" y="458.1" style="fill:#DF8D88;" width="22.1" height="16.6" @click.exact="onClickLabel('ae')" @touchstart="onClickLabel('ae')" class="clickable-bldg"/>
      <rect x="434.7" y="559.6" style="fill:#DF8D88;" width="10.2" height="16.4" @click.exact="onClickLabel('af')" @touchstart="onClickLabel('af')" class="clickable-bldg"/>
      <rect x="438.7" y="537.4" style="fill:#DF8D88;" width="35.4" height="16.4" @click.exact="onClickLabel('ag')" @touchstart="onClickLabel('ag')" class="clickable-bldg"/>
      <rect x="407.9" y="524.5" style="fill:#DF8D88;" width="16.2" height="32.7" @click.exact="onClickLabel('ah')" @touchstart="onClickLabel('ah')" class="clickable-bldg"/>
      <rect x="422.7" y="559.4" style="fill:#DF8D88;" width="9.5" height="9.5" @click.exact="onClickLabel('ai')" @touchstart="onClickLabel('ai')" class="clickable-bldg"/>
      <rect x="456.2" y="562.8" style="fill:#DF8D88;" width="17.9" height="45.5" @click.exact="onClickLabel('aj')" @touchstart="onClickLabel('aj')" class="clickable-bldg"/>
      <rect x="428.5" y="582.1" style="fill:#DF8D88;" width="20" height="28.4" @click.exact="onClickLabel('ak')" @touchstart="onClickLabel('ak')" class="clickable-bldg"/>
      <rect x="417.4" y="582.1" style="fill:#DF8D88;" width="9" height="23.8" @click.exact="onClickLabel('al')" @touchstart="onClickLabel('al')" class="clickable-bldg"/>
      <rect x="373.7" y="458.2" style="fill:#DF8D88;" width="16" height="12.9" @click.exact="onClickLabel('am')" @touchstart="onClickLabel('am')" class="clickable-bldg"/>
      <rect x="346.3" y="490.4" style="fill:#DF8D88; stroke:#DF8D88" width="109.5" height="24.7" @click.exact="onClickLabel('6号館')" @touchstart="onClickLabel('6号館')" class="clickable-bldg"/>
      <rect x="276" y="383.6" transform="matrix(1 -4.963295e-03 4.963295e-03 1 -2.0068 1.4513)" style="fill:#DF8D88;" width="30.8" height="42.9" @click.exact="onClickLabel('12号館')" @touchstart="onClickLabel('12号館')" class="clickable-bldg"/>
      <rect x="492.4" y="81.4" transform="matrix(0.9771 0.2127 -0.2127 0.9771 36.9033 -108.8377)" style="fill:#5887C6; stroke:#5887C6" width="63.7" height="71.3" @click.exact="onClickLabel('体育館')" @touchstart="onClickLabel('体育館')" class="clickable-bldg"/>
      <rect x="528.1" y="36.4" transform="matrix(0.9771 0.2127 -0.2127 0.9771 24.6011 -114.9388)" style="fill:#5887C6;" width="36.7" height="40.8" @click.exact="onClickLabel('部室棟')" @touchstart="onClickLabel('部室棟')" class="clickable-bldg"/>
      <rect x="500.7" y="48.3" transform="matrix(0.9771 0.2127 -0.2127 0.9771 24.3594 -107.3147)" style="fill:#5887C6;" width="20.4" height="22.4" /><!--トレーニング室-->
      <rect x="566.4" y="192.1" transform="matrix(0.9771 0.2127 -0.2127 0.9771 57.8146 -129.3657)" style="fill:#5887C6;" width="127.3" height="23.8" @click.exact="onClickLabel('t')" @touchstart="onClickLabel('t')" class="clickable-bldg"/>
      <rect x="637.6" y="146.2" transform="matrix(0.9771 0.2127 -0.2127 0.9771 49.4057 -137.9073)" style="fill:#5887C6;" width="56.1" height="29" @click.exact="onClickLabel('u')" @touchstart="onClickLabel('u')" class="clickable-bldg"/>
      <rect x="709.2" y="181" transform="matrix(0.9771 0.2127 -0.2127 0.9771 56.4448 -148.8378)" style="fill:#5887C6;" width="21.5" height="13.8" @click.exact="onClickLabel('v')" @touchstart="onClickLabel('v')" class="clickable-bldg"/>
      <rect x="704.9" y="208.9" transform="matrix(0.9771 0.2127 -0.2127 0.9771 62.1852 -146.3304)" style="fill:#5887C6;" width="12.5" height="13.9" @click.exact="onClickLabel('w')" @touchstart="onClickLabel('w')" class="clickable-bldg"/>
      <rect x="678" y="237.1" transform="matrix(0.9771 0.2127 -0.2127 0.9771 69.9252 -141.7796)" style="fill:#5887C6;" width="31.6" height="34" @click.exact="onClickLabel('x')" @touchstart="onClickLabel('x')" class="clickable-bldg"/>
      <rect x="666.8" y="323.1" transform="matrix(0.9771 0.2127 -0.2127 0.9771 87.1736 -136.8726)" style="fill:#5887C6;" width="25.7" height="27.1" @click.exact="onClickLabel('y')" @touchstart="onClickLabel('y')" class="clickable-bldg"/>
      <rect x="747.2" y="304.7" transform="matrix(0.9771 0.2127 -0.2127 0.9771 85.2701 -155.4566)" style="fill:#739971;" width="35.7" height="27.6" @click.exact="onClickLabel('z')" @touchstart="onClickLabel('z')" class="clickable-bldg"/>
      <rect x="747.5" y="241" transform="matrix(0.9771 0.2127 -0.2127 0.9771 70.9718 -158.283)" style="fill:#739971;" width="47.1" height="19.5" @click.exact="onClickLabel('aa')" @touchstart="onClickLabel('aa')" class="clickable-bldg"/>
      <rect x="901.5" y="264" transform="matrix(0.9771 0.2127 -0.2127 0.9771 81.8925 -189.5236)" style="fill:#739971;" width="40.5" height="43.5" @click.exact="onClickLabel('ab')" @touchstart="onClickLabel('ab')" class="clickable-bldg"/>
      <rect x="759.4" y="203.9" transform="matrix(0.9771 0.2127 -0.2127 0.9771 62.7718 -161.4319)" style="fill:#739971;" width="44.5" height="14.2" @click.exact="onClickLabel('ac')" @touchstart="onClickLabel('ac')" class="clickable-bldg"/>
      <polygon style="fill:#739971;" points="765.3,180.4 771.7,150.2 762.2,148.2 752.8,192.2 753.9,192.5 753.9,192.5 787,199.7
        790.1,185.8 	" @click.exact="onClickLabel('an')" @touchstart="onClickLabel('an')" class="clickable-bldg"/>
      <polygon style="fill:#739971;" points="871.4,247.2 871.4,247.2 838.2,240 808.7,233.6 800.4,271.7 829.9,278.1 832.4,266.4
        861.1,272.6 853.8,305.9 883.3,312.3 896.3,252.6 	" @click.exact="onClickLabel('ao')" @touchstart="onClickLabel('ao')" class="clickable-bldg"/>
      <polygon style="fill:#739971;" points="901.6,335.4 804.8,314.3 802.4,325.2 832.5,331.8 828.2,351.7 851.6,356.7 855.9,336.9
        899.2,346.3 	" @click.exact="onClickLabel('ap')" @touchstart="onClickLabel('ap')" class="clickable-bldg"/>
      <rect x="552.2" y="273.8" transform="matrix(0.9771 0.2127 -0.2127 0.9771 74.6919 -125.7121)" style="fill:#5887C6;" width="138.7" height="20.9" @click.exact="onClickLabel('aq')" @touchstart="onClickLabel('aq')" class="clickable-bldg"/>
      <rect x="165.9" y="388" transform="matrix(1 -4.963295e-03 4.963295e-03 1 -2.02 0.9867)" style="fill:#DF8D88;" width="63.8" height="39" @click.exact="onClickLabel('ar')" @touchstart="onClickLabel('ar')" class="clickable-bldg"/>
      <rect x="237.5" y="383.5" transform="matrix(1 -4.963295e-03 4.963295e-03 1 -2.0067 1.2474)" style="fill:#DF8D88;" width="25.5" height="42.9" @click.exact="onClickLabel('as')" @touchstart="onClickLabel('as')" class="clickable-bldg"/>
      <rect x="540.1" y="393.4" transform="matrix(0.9957 -9.213269e-02 9.213269e-02 0.9957 -36.8956 52.6439)" style="fill:#9B72B0; stroke:#9B72B0" width="23.2" height="65.1" @click.exact="onClickLabel('コミュニケーション棟')" @touchstart="onClickLabel('コミュニケーション棟')" class="clickable-bldg"/>
      <polygon style="fill:#5887C6;" points="598.4,205.1 565.2,358.1 597.1,358 608.5,206.9" @click.exact="onClickLabel('at')" @touchstart="onClickLabel('at')" class="clickable-bldg"/>
      <polygon style="fill:#5887C6; stroke:#5887C6" points="573,326.6 566.3,357.2 596.2,357 598.5,327" @click.exact="onClickLabel('1311教室')" @touchstart="onClickLabel('1311教室')" class="clickable-bldg"/>
      <circle style="fill:#5887C6;" cx="614.1" cy="247.4" r="6.1" @click.exact="onClickLabel('au')" @touchstart="onClickLabel('au')" class="clickable-bldg"/>
      <polygon style="fill:#D5C944;" points="65.4,638.1 37.4,637.4 27.4,637.3 27.4,660.9 37.5,660.9 37.5,663.8 	" @click.exact="onClickLabel('赤レンガ')" @touchstart="onClickLabel('赤レンガ')" class="clickable-bldg"/>
      <rect x="218.7" y="572.1" style="fill:#DF8D88;" width="74.8" height="30.3" @click.exact="onClickLabel('4号館')" @touchstart="onClickLabel('4号館')" class="clickable-bldg"/>
      <polygon style="fill:#DF8D88;" points="311.2,610.9 311.2,602.5 305.6,602.5 305.6,603.9 298.9,610.8 	" @click.exact="onClickLabel('aw')" @touchstart="onClickLabel('aw')" class="clickable-bldg"/>
    </g>
    <!-- <g id="ブース">
      <path d="M140.7,562.9l-24.8,24.8l-4-4l24.8-24.8L140.7,562.9z M150.8,609.8h-29.4v5.7h29.4V609.8z" style="fill:#CC364A; stroke:#CC364A" @click.exact="onClickLabel('Gブース')" @touchstart="onClickLabel('Gブース')" class="clickable-bldg"/>
      <rect x="140.1" y="544.4" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 746.7311 347.7715)" style="fill:#336AB3; stroke:#336AB3" width="118.8" height="5.7" @click.exact="onClickLabel('Wブース')" @touchstart="onClickLabel('Wブース')" class="clickable-bldg"/>
      <rect x="207.8" y="564.1" style="fill:#50B233; stroke:#50B233" width="92.2" height="5.7" @click.exact="onClickLabel('Cブース')" @touchstart="onClickLabel('Cブース')" class="clickable-bldg"/>
      <rect x="207.8" y="603.1" style="fill:#F3EB34; stroke:#F3EB34" width="85.2" height="5.7" @click.exact="onClickLabel('Sブース')" @touchstart="onClickLabel('Sブース')" class="clickable-bldg"/>
      <rect x="452.5" y="506" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 967.4866 50.1574)" style="fill:#EA5E8C; stroke:#EA5E8C" width="12.3" height="5.7" @click.exact="onClickLabel('Eブース')" @touchstart="onClickLabel('Eブース')" class="clickable-bldg"/>
      <rect x="517.7" y="309.3" transform="matrix(-0.2049 0.9788 -0.9788 -0.2049 944.1509 -142.7252)" style="fill:#3EBFF0; stroke:#3EBFF0" width="24.6" height="5.7" @click.exact="onClickLabel('Yブース')" @touchstart="onClickLabel('Yブース')" class="clickable-bldg"/>
    </g>
    <g id="シンボル">
      <use
        v-for="icon in icons"
        :key="icon.key"
        v-bind="{'xlink:href': icon.href}"
        width="30"
        height="30"
        x="-15"
        y="-15"
        :transform="`matrix(1 0 0 -1 ${icon.x} ${icon.y}) ${transformForMarkers}`"
        style="overflow:visible;"
      />
    </g> -->
    <!-- <g id="ラベル">
      <text
        v-for="label in labels"
        :key="label.text"
        :transform="`matrix(1 0 0 1 ${label.x} ${label.y}) ${transformForLabels}`"
        class="label"
        :class="{
          'label--is-link': label.isLink,
          'label--small': scale < 1,
          'label--large': scale > 2,
        }"
        :text-anchor="label.textAnchor ? label.textAnchor : 'middle'"
        @click.exact="label.isLink ? onClickLabel(label.text) : ()=>{}"
        @keypress.enter="label.isLink ? onClickLabel(label.text) : ()=>{}"
        @touchstart="label.isLink ? onClickLabel(label.text) : ()=>{}"
        :tabindex="label.isLink ? 0 : -1"
      >
        {{ label.text }}
      </text>
    </g> -->
  </g>
  <!-- 開発用 -->
  <!-- <rect :x="mousePosition.x - 15" :y="mousePosition.y - 15" width="30" height="30" fill="red" /> -->
  </svg>
</template>

<script>
//import Symbols from './Symbols.vue';
//import labels from './json/labels.json';
//import icons from './json/icons.json';

export default {
  components: {
    //Symbols,
  },
  props: {
    width: {
      type: Number,
      default: 1500,
    },
    height: {
      type: Number,
      default: 1300,
    },
  },
  data() {
    return {
      scale: 1,
      angle: 0,
      isMouseDown: false,
      minX: 0,
      minY: 0,
      mousePosition: {
        x: 0,
        y: 0,
      },
      distanceBetweenFingers: 0,
      mapWrapSize: {
        width: 0,
        height: 0,
      },
      inertiaTimerId: 0,
      onWheelTimerId: 0,
      nowInertiaScroll: false,
    };
  },
  // 地図が読み込まれた直後に実行される関数
  mounted() {
    this.$nextTick(() => {
      this.updateMapWrapSize();
      this.preventOverScroll();

      if (this.width > this.height) {
        this.scale = this.width / this.mapWrapSize.width + 0.3;
      } else {
        this.scale = this.height / this.mapWrapSize.height + 0.3;
      }

      // 地図は理工エリアを最初に表示する
      this.minY = this.height - this.mapWrapSize.height - 1000;
    });
  },
  methods: {
    onClickLabel(text) {

      const timeoutTime = 60;

      // 地図をスクロールしようとして文字ラベルに触れてしまった場合は、
      // openBoothsListが実行されないようにする
      const prevMousePosition = this.mousePosition;
      setTimeout(() => {
        if (!this.isMouseDown && !this.nowInertiaScroll && (this.mousePosition.x === prevMousePosition.x && this.mousePosition.y === prevMousePosition.y)) {
          this.openBoothsList(text);
        }
      }, timeoutTime);

      // this.isMouseDown の判定を除いた再判定をする
      // (ちょっと長押ししてしまった場合など)
      setTimeout(() => {
        if (!this.nowInertiaScroll && (this.mousePosition.x === prevMousePosition.x && this.mousePosition.y === prevMousePosition.y)) {
          this.openBoothsList(text);
        }
      }, timeoutTime * 2);
    },
    openBoothsList(text) {
      this.$emit('clickLabel', {text});
    },
    setScale(newScale) {
      const oldScale = this.scale;
      this.scale = newScale;

      // 極端に低い表示倍率にまでズームアウトできないようにする
      if (oldScale > newScale && (this.mapWrapSize.width < this.width || this.mapWrapSize.height < this.height)) {
        this.scale = oldScale;
      }

      // 表示倍率は3倍を最大とする
      if (this.scale > 3) {
        this.scale = 3;
      }

      this.$emit('changeScale', {
        newScale: this.scale,
        oldScale,
      });
    },
    updateMapWrapSize() {
      const {width, height} = this.$refs.campusMapWrap.getBoundingClientRect();
      this.mapWrapSize = {width, height};
    },
    getEventPosition(e) {
      var {left, top} = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      return {x, y};
    },
    moveMap(newMousePosition) {
      let oldMousePosition = this.mousePosition;
      this.mousePosition = newMousePosition;

      if (oldMousePosition.x === 0 && oldMousePosition.y === 0) {
        oldMousePosition = newMousePosition;
      }

      clearInterval(this.inertiaTimerId);
      const dx = newMousePosition.x - oldMousePosition.x;
      const dy = newMousePosition.y - oldMousePosition.y;

      this.minX += dx;
      this.minY += dy;

      this.$emit('move');

      this.inertiaScroll(dx, dy);
    },
    zoomMap(newDistanceBetweenFingers) {
      let oldDistanceBetweenFingers = this.distanceBetweenFingers;
      this.distanceBetweenFingers = newDistanceBetweenFingers;

      if (oldDistanceBetweenFingers === 0) {
        oldDistanceBetweenFingers = newDistanceBetweenFingers;
      }

      this.setScale(this.scale + newDistanceBetweenFingers / oldDistanceBetweenFingers - 1);
    },
    // スクロールしすぎて地図から遠ざかってしまわないようにする
    preventOverScroll() {
      // space === 0 だと、画面の端と地図がぴっちりしてしまうので…
      // const space = 50;
      const space = 80;
      const {width: mapWidth, height: mapHeight} = this.mapWrapSize;
      const isAllowableX = this.width - this.minX < mapWidth + space;
      const isAllowableY = this.height - this.minY < mapHeight + space;

      if (this.minX > space) {
        this.minX = space;
      }

      if (this.minY > space) {
        this.minY = space;
      }

      if (!isAllowableX) {
        this.minX = this.width - mapWidth - space;
      }

      if (!isAllowableY) {
        this.minY = this.height - mapHeight - space;
      }
    },
    // 慣性スクロール
    inertiaScroll(dx, dy) {
      let speedX = dx;
      let speedY = dy;

      this.nowInertiaScroll = true;

      this.inertiaTimerId = setInterval(() => {
        speedX *= 0.9;
        speedY *= 0.9;
        this.minX += speedX;
        this.minY += speedY;

        if (speedX < 0.1 && speedY < 0.1) {
          this.nowInertiaScroll = false;
          clearInterval(this.inertiaTimerId);
        }
      }, 10);
    },
    onMouseDownMap(e) {
      this.isMouseDown = true;
    },
    onMouseMoveMap(e) {
      if (this.isMouseDown) {
        this.moveMap(this.getEventPosition(e));
      }
    },
    onMouseUpMap(e) {
      this.isMouseDown = false;
      this.mousePosition = {
        x: 0,
        y: 0,
      };
    },
    onTouchStartMap(e) {
      this.onMouseDownMap();
    },
    onTouchMoveMap(e) {
      this.isMouseDown = true;
      switch (e.touches.length) {
        case 1:
          // パン(移動)
          this.moveMap({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          });
          break;
        case 2:
          // ズームイン・ズームアウト
          const x0 = e.touches[0].clientX;
          const x1 = e.touches[1].clientX;
          const y0 = e.touches[0].clientY;
          const y1 = e.touches[1].clientY;
          this.mousePosition = {
            x: (x0 + x1) / 2,
            y: (y0 + y1) / 2,
          };
          this.zoomMap(Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2)));
          break;
      }
    },
    onTouchEndMap(e) {
      this.onMouseUpMap();
      this.distanceBetweenFingers = 0;
    },
    onWheelMap(e) {
      clearTimeout(this.onWheelTimerId);

      this.mousePosition = this.getEventPosition(e);
      if (e.deltaY < 0) {
        this.setScale(this.scale + 0.05);
      } else {
        this.setScale(this.scale - 0.05);
      }

      // 一定時間立ったら、mousePosition をリセットする
      this.onWheelTimerId = setTimeout(() => {
        this.mousePosition = {x: 0, y: 0};
      }, 100);
    }
  },
  beforeUpdate() {
    this.preventOverScroll();
  },
  watch: {
    scale(newScale, oldScale) {
      this.$nextTick(() => {
        this.updateMapWrapSize();

        // マウスカーソルの位置を中心に地図をズームするために、
        // 地図画像全体をいい感じに平行移動させる
        const {x, y} = this.mousePosition;
        this.minX -= this.minX + (x - this.minX) * (newScale / oldScale) - x;
        this.minY -= this.minY + (y - this.minY) * (newScale / oldScale) - y;
      });
    },
  },
  computed: {
    transformForScalable() {
      return `translate(${this.minX}, ${this.minY}) scale(${this.scale}, ${this.scale})`;
    },
    transformForMarkers() {
      return `scale(${1 / this.scale}, ${1 / this.scale})`;
    },
    transformForLabels() {
      return `scale(${1 / this.scale}, ${1 / this.scale})`;
    },
    icons() {
      if (this.scale < 1.5) {
        return [];
      }
      return icons;
    },
    labels() {
      return labels.filter(label => (this.scale > 1.5 || !label.isHiddenInSmall) && !label.isHidden);
    }
  }
}
</script>

<style lang="scss" scoped>
.campus-map {
  cursor: grab;

  &--grabbing {
    cursor: grabbing;
  }
}

.clickable-bldg {
  cursor: pointer;
  transition: 0.1s ease fill;
  stroke-width: 1px;

  &:hover {
    fill: #fff !important;
  }
}

.label {
  fill: #231815;
  stroke: #FFFFFF;
  stroke-width: 5px;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  paint-order: stroke;
  dominant-baseline: central;
  transition: 0.3s ease font-size;

  &--is-link {
    cursor: pointer;
    fill: $link-color;
    pointer-events: none;

    &:hover {
      fill: darken($link-color, 10);
    }
  }

  font-size: 0.75rem;

  &--large {
    font-size: 1rem;
  }

  &--small {
    font-size: 0.75rem;
  }
}
</style>
