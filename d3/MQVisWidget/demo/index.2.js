var widget;
//用于生成渐变数据，后期可删除
var parseDate = d3.timeParse("%Y-%m-%d %H:%M:%S");
var formatDate = d3.timeFormat("%Y-%m-%d %H:%M:%S");
var random = function (){return Math.random()/2+Number(0.4)}
window.onload = function () {

    var yAxis2 = [];
    for (var i = 1; i <= 350; i += 2) {
        yAxis2.push([i - 1, i, 'rgba(10,155,51,0.3)', {
            yAxis: [1],
            visible: true
        }])
        yAxis2.push([i, i + 1, 'rgba(34,42,71,0.8)', {
            yAxis: [1],
            visible: true
        }])
    }
    var config = {
        domNode: '#root',
        title: '<div class="svg_title" >&nbsp;</div>',
        width: window.innerWidth - 20,
        height: window.innerHeight - 20,
        xAxis: ["2017-12-06 19:12:00","2017-12-07 11:53:56"] ,
        yAxis: [
            [0, 2, 'rgba(10,19,51,0.8)', {
                yAxis: [1],
                visible: true
            }],
            [2, 4, 'rgba(34,42,71,0.8)', {
                yAxis: [1],
                visible: true
            }],
            [6, 8, 'rgba(57,65,91,0.8)', {
                yAxis: [1],
                visible: true
            }]],
        yAxis2: yAxis2,
        yAxisSelected: 1,
        lines: [[164.60197908,"2017-11-19 01:32:0","2017-11-23 09:11:0",{"rightAttr":3},3.8322908,"未知",3935965,5.07841,103.483551],[173.6034887,"2017-11-19 06:04:0","2017-11-23 09:11:0",{"rightAttr":""},3.847387,"未知",1339846,6.15391,103.483551],[83.60392124,"2017-11-19 01:40:0","2017-11-23 09:11:0",{"rightAttr":5},3.8517124,"未知",377194,6.26787,103.483551],[163.60765212,"2017-11-21 17:43:0","2017-11-23 09:11:0",{"rightAttr":2},3.8890212,"未知",1077975,3.25465,103.483551],[77.60771915,"2017-11-19 03:03:0","2017-11-23 09:11:0",{"rightAttr":2},3.8896915,"未知",28923,5.41327,103.483551],[148.60846601,"2017-11-20 02:44:0","2017-11-23 09:11:0",{"rightAttr":2},3.8971601000000002,"未知",2621051,4.3455,103.483551],[307.60993531,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},3.9118531,"未知",3410406,1.687,103.483551],[168.62089916,"2017-11-19 03:39:0","2017-11-23 09:11:0",{"rightAttr":5},4.0214916,"未知",4743972,7.6594,103.483551],[260.62493365,"2017-11-19 02:34:0","2017-11-23 09:11:0",{"rightAttr":""},4.0618365,"未知",778346,2.49955,103.483551],[298.63000377,"2017-11-19 04:41:0","2017-11-23 09:11:0",{"rightAttr":2},4.112537700000001,"未知",1975558,6.59406,103.483551],[289.63022208,"2017-11-19 01:27:0","2017-11-23 09:11:0",{"rightAttr":5},4.1147208,"未知",1265009,2.4143,103.483551],[155.6340864,"2017-11-19 03:33:0","2017-11-23 09:11:0",{"rightAttr":5},4.153364,"未知",4281259,3.11581,103.483551],[57.6342957,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},4.155457,"未知",3509720,1.31812,103.483551],[61.639495170000004,"2017-11-19 01:24:0","2017-11-23 09:11:0",{"rightAttr":""},4.2074517,"未知",2366967,4.68128,103.483551],[57.6409214,"2017-11-19 02:47:0","2017-11-23 09:11:0",{"rightAttr":5},4.221714,"未知",3004238,3.89381,103.483551],[206.64254685,"2017-11-21 22:55:0","2017-11-23 09:11:0",{"rightAttr":""},4.2379685,"未知",4568762,4.00795,103.483551],[145.64278478,"2017-11-20 02:05:0","2017-11-23 09:11:0",{"rightAttr":5},4.2403478,"未知",3416181,5.42091,103.483551],[131.64648422,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},4.2773422,"未知",2412032,7.70443,103.483551],[98.64791981,"2017-11-19 09:28:0","2017-11-23 09:11:0",{"rightAttr":""},4.2916981,"未知",3514287,6.27892,103.483551],[87.64805296,"2017-11-19 02:27:0","2017-11-23 09:11:0",{"rightAttr":2},4.293029600000001,"未知",4379020,2.48431,103.483551],[166.64812412,"2017-11-21 01:27:0","2017-11-23 09:11:0",{"rightAttr":2},4.2937412,"未知",4996878,4.19286,103.483551],[237.64943666,"2017-11-19 02:49:0","2017-11-23 09:11:0",{"rightAttr":1},4.3068666,"未知",881643,5.55395,103.483551],[127.65221383,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},4.3346383,"未知",4925954,4.47457,103.483551],[269.65319944,"2017-11-20 14:21:0","2017-11-23 09:11:0",{"rightAttr":2},4.3444944,"未知",2265102,5.81946,103.483551],[85.65332221,"2017-11-19 02:30:0","2017-11-23 09:11:0",{"rightAttr":3},4.3457221,"未知",3794866,5.37179,103.483551],[282.65653629,"2017-11-19 01:49:0","2017-11-23 09:11:0",{"rightAttr":""},4.3778629,"未知",507544,5.39986,103.483551],[220.65750498,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},4.3875498,"未知",1882615,0.37092,103.483551],[175.65970344,"2017-11-19 01:58:0","2017-11-23 09:11:0",{"rightAttr":1},4.4095344,"未知",1420442,4.2663,103.483551],[256.66035948,"2017-11-19 02:07:0","2017-11-23 09:11:0",{"rightAttr":1},4.4160948,"未知",191409,5.89103,103.483551],[139.66230985,"2017-11-19 03:23:0","2017-11-23 09:11:0",{"rightAttr":""},4.4355985,"未知",405500,6.12127,103.483551],[197.66708548,"2017-11-20 02:17:0","2017-11-23 09:11:0",{"rightAttr":1},4.4833548,"未知",2226333,6.29544,103.483551],[131.66745745,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},4.4870745,"未知",4920572,6.73342,103.483551],[118.66752175,"2017-11-19 03:20:0","2017-11-23 09:11:0",{"rightAttr":""},4.4877175000000005,"未知",4579207,3.83153,103.483551],[232.67267409,"2017-11-19 01:28:0","2017-11-23 09:11:0",{"rightAttr":2},4.539240899999999,"未知",2672074,0.22101,103.483551],[235.67368351,"2017-11-19 03:03:0","2017-11-23 09:11:0",{"rightAttr":1},4.5493351,"未知",3045547,7.47269,103.483551],[160.67422858,"2017-11-19 02:30:0","2017-11-23 09:11:0",{"rightAttr":2},4.554785799999999,"未知",1266461,1.40767,103.483551],[130.67459772,"2017-11-20 16:28:0","2017-11-23 09:11:0",{"rightAttr":2},4.5584772000000005,"未知",49689,5.9834,103.483551],[109.67888851,"2017-11-19 14:03:0","2017-11-23 09:11:0",{"rightAttr":2},4.6013851,"未知",2705031,4.84731,103.483551],[18.68134922,"2017-11-19 02:40:0","2017-11-23 09:11:0",{"rightAttr":3},4.625992200000001,"未知",3005299,5.1878,103.483551],[74.68492792,"2017-11-19 03:58:0","2017-11-23 09:11:0",{"rightAttr":""},4.6617792,"未知",4094462,1.22843,103.483551],[41.68507471,"2017-11-19 02:09:0","2017-11-23 09:11:0",{"rightAttr":5},4.6632470999999995,"未知",4204339,3.20404,103.483551],[83.68643407,"2017-11-19 03:15:0","2017-11-23 09:11:0",{"rightAttr":""},4.6768407,"未知",3845815,3.29106,103.483551],[308.68668906,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},4.6793906,"未知",1277771,0.75886,103.483551],[181.68686299,"2017-11-22 09:45:0","2017-11-23 09:05:0",{"rightAttr":2},4.6811299,"未知",1844538,6.56008,101.362],[274.68882258,"2017-11-19 02:47:0","2017-11-23 09:11:0",{"rightAttr":3},4.7007258,"未知",474138,4.64012,103.483551],[116.6939984,"2017-11-19 02:23:0","2017-11-23 09:11:0",{"rightAttr":2},4.752484,"未知",3814256,3.99402,103.483551],[53.69711034,"2017-11-20 09:20:0","2017-11-23 09:11:0",{"rightAttr":3},4.7836034000000005,"未知",2153197,0.27115,103.483551],[98.69731796,"2017-11-19 01:54:0","2017-11-23 09:11:0",{"rightAttr":3},4.7856796,"未知",1576318,7.41057,103.483551],[156.69987126,"2017-11-19 04:46:0","2017-11-23 09:11:0",{"rightAttr":1},4.8112126,"未知",486965,1.32889,103.483551],[143.70647839,"2017-11-19 03:44:0","2017-11-23 09:11:0",{"rightAttr":3},4.8772839,"未知",4311037,5.60839,103.483551],[229.71079556,"2017-11-19 01:46:0","2017-11-23 09:11:0",{"rightAttr":5},4.9204556,"未知",1941948,7.46412,103.483551],[28.710841,"2017-11-19 12:58:0","2017-11-23 09:11:0",{"rightAttr":3},4.92091,"未知",1393445,0.99216,103.483551],[293.71545035,"2017-11-19 01:55:0","2017-11-23 09:11:0",{"rightAttr":""},4.967003500000001,"未知",4321918,0.50569,103.483551],[70.71652199,"2017-11-21 08:51:0","2017-11-23 09:11:0",{"rightAttr":""},4.9777199,"未知",4106,1.42778,103.483551],[107.71790931,"2017-11-19 01:49:0","2017-11-23 09:11:0",{"rightAttr":2},4.9915931,"未知",4001945,2.42016,103.483551],[183.71979338,"2017-11-19 02:53:0","2017-11-23 09:11:0",{"rightAttr":5},5.0104337999999995,"未知",2161119,7.9072,103.483551],[165.72025105,"2017-11-20 02:39:0","2017-11-23 09:11:0",{"rightAttr":3},5.0150105,"未知",2061053,5.59671,103.483551],[62.72100715,"2017-11-19 03:18:0","2017-11-23 09:11:0",{"rightAttr":1},5.0225715,"未知",3848240,2.08953,103.483551],[129.72104888,"2017-11-20 01:15:0","2017-11-23 09:11:0",{"rightAttr":1},5.0229888,"未知",4689172,7.79002,103.483551],[129.72267736,"2017-11-19 03:03:0","2017-11-23 09:11:0",{"rightAttr":2},5.0392736,"未知",644838,3.71282,103.483551],[181.72655701,"2017-11-19 02:56:0","2017-11-23 09:11:0",{"rightAttr":5},5.0780701,"未知",2841844,5.71835,103.483551],[307.72766272,"2017-11-19 01:56:0","2017-11-23 09:11:0",{"rightAttr":""},5.0891272,"未知",4258369,0.48562,103.483551],[255.73328018,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":1},5.1453018,"未知",1013380,7.01146,103.483551],[205.73550016,"2017-11-19 03:10:0","2017-11-23 09:11:0",{"rightAttr":5},5.1675016,"未知",1030778,2.09401,103.483551],[18.73671278,"2017-11-19 02:37:0","2017-11-23 09:11:0",{"rightAttr":""},5.1796278000000004,"未知",4692525,3.75907,103.483551],[306.74136143,"2017-11-19 03:38:0","2017-11-23 09:11:0",{"rightAttr":2},5.2261143,"未知",1426082,5.89744,103.483551],[300.7414241,"2017-11-19 01:31:0","2017-11-23 09:11:0",{"rightAttr":1},5.2267410000000005,"未知",4302636,0.13029,103.483551],[248.7418504,"2017-11-19 03:55:0","2017-11-23 09:11:0",{"rightAttr":5},5.231004,"未知",3685255,4.56505,103.483551],[173.74367649,"2017-11-19 02:04:0","2017-11-23 09:11:0",{"rightAttr":5},5.2492649,"未知",636530,6.96111,103.483551],[161.74743817,"2017-11-19 04:39:0","2017-11-23 09:11:0",{"rightAttr":2},5.2868817,"未知",3296057,1.50423,103.483551],[289.74802496,"2017-11-19 01:55:0","2017-11-23 09:11:0",{"rightAttr":3},5.2927496000000005,"未知",2326464,2.76307,103.483551],[228.74998914,"2017-11-19 03:48:0","2017-11-23 09:11:0",{"rightAttr":""},5.3123914,"未知",573756,5.74531,103.483551],[51.75183497,"2017-11-19 21:22:0","2017-11-23 09:11:0",{"rightAttr":2},5.3308497,"未知",68817,5.90356,103.483551],[120.75490103,"2017-11-19 03:09:0","2017-11-23 09:11:0",{"rightAttr":2},5.3615103,"未知",4706598,0.43492,103.483551],[235.755188,"2017-11-19 02:21:0","2017-11-23 09:11:0",{"rightAttr":3},5.364380000000001,"未知",3958426,0.61398,103.483551],[233.75755796,"2017-11-20 01:27:0","2017-11-23 09:11:0",{"rightAttr":""},5.3880796,"未知",4596552,0.27607,103.483551],[51.76370148,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":1},5.449514799999999,"未知",3401348,0.53566,103.483551],[122.76497682,"2017-11-19 02:54:0","2017-11-23 09:11:0",{"rightAttr":2},5.4622682000000005,"未知",2620088,0.0448,103.483551],[29.77147953,"2017-11-19 03:10:0","2017-11-23 09:11:0",{"rightAttr":2},5.5272953000000005,"未知",4092570,4.29982,103.483551],[87.77173695,"2017-11-20 02:39:0","2017-11-23 09:11:0",{"rightAttr":3},5.5298695,"未知",2793489,5.65108,103.483551],[122.77391817,"2017-11-19 03:10:0","2017-11-23 09:11:0",{"rightAttr":""},5.5516817,"未知",4259691,7.08157,103.483551],[258.77629795,"2017-11-19 02:47:0","2017-11-23 09:11:0",{"rightAttr":3},5.5754795,"未知",2871940,1.32379,103.483551],[278.77789493,"2017-11-20 03:53:0","2017-11-23 09:11:0",{"rightAttr":3},5.5914493,"未知",2775296,4.39459,103.483551],[82.7791972,"2017-11-19 01:59:0","2017-11-23 09:11:0",{"rightAttr":3},5.6044719999999995,"未知",1042358,0.01787,103.483551],[197.78760076,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},5.688507599999999,"未知",3387363,3.44545,103.483551],[200.79260918,"2017-11-19 02:16:0","2017-11-23 09:11:0",{"rightAttr":2},5.7385918,"未知",1231095,2.97534,103.483551],[302.79514153,"2017-11-21 03:58:0","2017-11-23 09:11:0",{"rightAttr":3},5.7639153,"未知",2711537,4.38748,103.483551],[104.79695041,"2017-11-19 02:08:0","2017-11-23 09:11:0",{"rightAttr":2},5.7820041,"未知",4867256,6.70557,103.483551],[233.79834746,"2017-11-19 03:21:0","2017-11-23 09:11:0",{"rightAttr":2},5.7959746,"未知",4433072,7.81455,103.483551],[123.79970972,"2017-11-19 04:26:0","2017-11-23 09:11:0",{"rightAttr":""},5.8095972,"未知",484965,6.69742,103.483551],[194.80008387,"2017-11-20 23:11:0","2017-11-23 09:11:0",{"rightAttr":2},5.8133387,"未知",1980077,0.4686,103.483551],[178.80130696,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},5.8255696,"未知",4935642,0.66815,103.483551],[170.80228469,"2017-11-19 23:34:0","2017-11-23 09:11:0",{"rightAttr":""},5.8353469,"未知",708707,1.86988,103.483551],[59.80287839,"2017-11-19 01:53:0","2017-11-23 09:11:0",{"rightAttr":1},5.8412839,"未知",769854,4.68688,103.483551],[110.80292156,"2017-11-19 02:22:0","2017-11-23 09:11:0",{"rightAttr":2},5.841715600000001,"未知",3478433,2.51991,103.483551],[194.80424461,"2017-11-19 04:14:0","2017-11-23 09:11:0",{"rightAttr":2},5.8549461,"未知",1698170,3.97256,103.483551],[31.80527941,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},5.8652941,"未知",4090200,4.04641,103.483551],[152.80609412,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},5.8734412,"未知",3388864,6.26083,103.483551],[57.8089473,"2017-11-19 02:31:0","2017-11-23 09:11:0",{"rightAttr":3},5.901973,"未知",4759676,4.48816,103.483551],[167.80908481,"2017-11-21 22:35:0","2017-11-23 09:11:0",{"rightAttr":1},5.9033481000000005,"未知",4358272,6.43814,103.483551],[272.81013072,"2017-11-19 04:22:0","2017-11-23 09:11:0",{"rightAttr":2},5.9138072,"未知",709623,4.21392,103.483551],[4.81016156,"2017-11-21 15:32:0","2017-11-23 09:11:0",{"rightAttr":5},5.914115600000001,"未知",2120549,3.94906,103.483551],[253.81046579,"2017-11-19 04:54:0","2017-11-23 09:11:0",{"rightAttr":2},5.917157899999999,"未知",3135407,2.73076,103.483551],[192.81133525,"2017-11-19 10:08:0","2017-11-23 09:11:0",{"rightAttr":5},5.9258524999999995,"未知",3119256,0.23667,103.483551],[22.81456325,"2017-11-19 05:25:0","2017-11-23 09:11:0",{"rightAttr":5},5.9581325,"未知",2178930,6.4331,103.483551],[163.81652753,"2017-11-19 06:48:0","2017-11-23 09:11:0",{"rightAttr":1},5.9777753,"未知",1610007,0.20579,103.483551],[39.82067459,"2017-11-21 17:18:0","2017-11-23 09:11:0",{"rightAttr":1},6.0192459,"未知",2594049,1.17733,103.483551],[29.82314602,"2017-11-19 04:52:0","2017-11-23 09:11:0",{"rightAttr":3},6.0439602,"未知",2996451,5.66923,103.483551],[164.82428282,"2017-11-20 01:58:0","2017-11-23 09:11:0",{"rightAttr":2},6.0553282,"未知",1972763,0.4997,103.483551],[307.83256947,"2017-11-19 04:42:0","2017-11-23 09:11:0",{"rightAttr":3},6.1381947,"未知",961342,7.10492,103.483551],[192.83281048,"2017-11-19 15:54:0","2017-11-23 09:11:0",{"rightAttr":3},6.1406048,"未知",2644561,2.93793,103.483551],[79.83564953,"2017-11-19 04:30:0","2017-11-23 09:11:0",{"rightAttr":2},6.1689953,"未知",908105,1.95655,103.483551],[198.83994587,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":5},6.2119587,"未知",4841103,2.78765,103.483551],[309.84096214,"2017-11-20 02:48:0","2017-11-23 09:11:0",{"rightAttr":3},6.2221214,"未知",3655230,6.08783,103.483551],[145.84583178,"2017-11-19 01:17:0","2017-11-23 09:11:0",{"rightAttr":1},6.2708178,"未知",3819892,4.71906,103.483551],[153.85049633,"2017-11-20 04:30:0","2017-11-23 09:11:0",{"rightAttr":2},6.3174633,"未知",626269,4.00327,103.483551],[241.85073716,"2017-11-19 04:42:0","2017-11-23 09:11:0",{"rightAttr":3},6.3198716,"未知",124568,3.15348,103.483551],[226.85373485,"2017-11-21 03:59:0","2017-11-23 09:11:0",{"rightAttr":3},6.3498485,"未知",278768,0.66332,103.483551],[60.85470955,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},6.3595955,"未知",866433,0.86224,103.483551],[131.85844305,"2017-11-20 02:14:0","2017-11-23 09:11:0",{"rightAttr":""},6.3969305,"未知",2856918,6.52833,103.483551],[71.85860984,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":1},6.3985984,"未知",4666760,6.23881,103.483551],[147.86294929,"2017-11-19 03:07:0","2017-11-23 09:11:0",{"rightAttr":""},6.4419929,"未知",1615189,5.81957,103.483551],[154.86354857,"2017-11-19 03:18:0","2017-11-23 09:11:0",{"rightAttr":5},6.4479857,"未知",1900137,5.09964,103.483551],[212.86468992,"2017-11-21 18:19:0","2017-11-23 09:11:0",{"rightAttr":""},6.4593992,"未知",935792,3.64349,103.483551],[47.86536109,"2017-11-19 03:20:0","2017-11-23 09:11:0",{"rightAttr":2},6.4661109,"未知",3995495,3.68315,103.483551],[130.86827334,"2017-11-19 03:42:0","2017-11-23 09:11:0",{"rightAttr":""},6.4952334,"未知",1637224,3.55956,103.483551],[197.87068283,"2017-11-19 04:17:0","2017-11-23 09:11:0",{"rightAttr":2},6.5193283,"未知",1887817,7.61448,103.483551],[285.87485381,"2017-11-19 02:49:0","2017-11-23 09:11:0",{"rightAttr":""},6.5610381,"未知",589314,3.41052,103.483551],[202.87830925,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},6.5955925,"未知",3665178,2.44227,103.483551],[192.87983707,"2017-11-20 03:32:0","2017-11-23 09:11:0",{"rightAttr":2},6.6108706999999995,"未知",770127,7.04112,103.483551],[225.88455789,"2017-11-20 18:53:0","2017-11-23 09:11:0",{"rightAttr":3},6.6580789,"未知",1236770,0.86461,103.483551],[139.88504253,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},6.6629252999999995,"未知",1418974,5.38942,103.483551],[27.88864019,"2017-11-19 01:31:0","2017-11-23 09:11:0",{"rightAttr":3},6.6989019,"未知",3576469,0.39366,103.483551],[51.8989855,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},6.802355,"未知",2845511,0.77405,103.483551],[298.89905528,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":5},6.8030528,"未知",4107765,5.64362,103.483551],[85.10302771,"2017-11-19 01:36:0","2017-11-23 09:11:0",{"rightAttr":2},8.8427771,"未知",205822,1.27406,103.483551],[245.1034966,"2017-11-19 22:14:0","2017-11-23 09:11:0",{"rightAttr":3},8.847466,"未知",2826062,4.3465,103.483551],[57.10368914,"2017-11-20 19:06:0","2017-11-23 09:11:0",{"rightAttr":3},8.8493914,"未知",685804,5.89488,103.483551],[10.1053062,"2017-11-19 03:31:0","2017-11-23 09:11:0",{"rightAttr":5},8.865562,"未知",2078839,4.15781,103.483551],[276.10620504,"2017-11-19 01:39:0","2017-11-23 09:11:0",{"rightAttr":2},8.8745504,"未知",1540190,6.0856,103.483551],[99.11503503,"2017-11-20 05:22:0","2017-11-23 09:11:0",{"rightAttr":2},8.9628503,"未知",1280869,0.28982,103.483551],[214.11823116,"2017-11-19 01:24:0","2017-11-23 09:11:0",{"rightAttr":3},8.9948116,"未知",3283019,4.47247,103.483551],[186.118539,"2017-11-19 02:04:0","2017-11-23 09:11:0",{"rightAttr":2},8.99789,"未知",1613311,0.96633,103.483551],[20.1210679,"2017-11-21 18:43:0","2017-11-23 09:11:0",{"rightAttr":""},9.023179,"未知",952978,2.13364,103.483551],[111.12153833,"2017-11-21 15:18:0","2017-11-23 09:11:0",{"rightAttr":3},9.0278833,"未知",3559946,5.16221,103.483551],[165.12298544,"2017-11-19 01:28:0","2017-11-23 09:11:0",{"rightAttr":""},9.0423544,"未知",2794355,4.77211,103.483551],[193.12457091,"2017-11-19 03:06:0","2017-11-23 09:11:0",{"rightAttr":""},9.0582091,"未知",4421865,6.15771,103.483551],[12.12521142,"2017-11-19 04:22:0","2017-11-23 09:11:0",{"rightAttr":""},9.0646142,"未知",3907747,1.8882,103.483551],[299.12879274,"2017-11-19 02:35:0","2017-11-23 09:11:0",{"rightAttr":2},9.1004274,"未知",63625,5.45828,103.483551],[157.12885145,"2017-11-19 01:13:0","2017-11-23 09:11:0",{"rightAttr":""},9.1010145,"未知",2032181,7.81842,103.483551],[129.13053834,"2017-11-20 13:19:0","2017-11-23 09:11:0",{"rightAttr":1},9.1178834,"未知",2540608,2.23742,103.483551],[263.13249866,"2017-11-19 01:54:0","2017-11-23 09:11:0",{"rightAttr":3},9.1374866,"未知",3142665,4.32844,103.483551],[9.13360689,"2017-11-19 02:41:0","2017-11-23 09:11:0",{"rightAttr":3},9.1485689,"未知",1971121,0.28494,103.483551],[191.13634407,"2017-11-19 02:21:0","2017-11-23 09:11:0",{"rightAttr":5},9.1759407,"未知",1953265,4.19163,103.483551],[171.13936158,"2017-11-20 23:02:0","2017-11-23 09:11:0",{"rightAttr":3},9.2061158,"未知",386236,7.44731,103.483551],[121.14109179,"2017-11-19 03:36:0","2017-11-23 09:11:0",{"rightAttr":2},9.2234179,"未知",4065223,7.68307,103.483551],[23.14241264,"2017-11-19 17:01:0","2017-11-23 09:11:0",{"rightAttr":3},9.2366264,"未知",3865539,7.07265,103.483551],[60.14525212,"2017-11-20 20:34:0","2017-11-23 09:11:0",{"rightAttr":""},9.2650212,"未知",2768487,1.76336,103.483551],[103.14682832,"2017-11-19 01:29:0","2017-11-23 09:11:0",{"rightAttr":2},9.2807832,"未知",1088308,3.44846,103.483551],[67.14774979,"2017-11-19 02:52:0","2017-11-23 09:11:0",{"rightAttr":3},9.2899979,"未知",2077803,4.12841,103.483551],[308.1524625,"2017-11-19 19:31:0","2017-11-23 09:11:0",{"rightAttr":""},9.337125,"未知",813863,2.39198,103.483551],[302.15639894,"2017-11-19 03:36:0","2017-11-23 09:11:0",{"rightAttr":1},9.3764894,"未知",1810649,2.67562,103.483551],[299.16150614,"2017-11-19 02:45:0","2017-11-23 09:11:0",{"rightAttr":3},9.4275614,"未知",2603949,2.11685,103.483551],[281.16223376,"2017-11-19 01:40:0","2017-11-23 09:11:0",{"rightAttr":3},9.4348376,"未知",2528499,1.6728,103.483551],[211.16398399,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},9.4523399,"未知",4577335,7.35426,103.483551],[267.16470045,"2017-11-20 03:23:0","2017-11-23 09:11:0",{"rightAttr":2},9.4595045,"未知",3452219,1.94097,103.483551],[109.16896147,"2017-11-19 03:26:0","2017-11-23 09:11:0",{"rightAttr":1},9.5021147,"未知",4047180,5.15051,103.483551],[75.16990955,"2017-11-20 01:49:0","2017-11-23 09:11:0",{"rightAttr":3},9.5115955,"未知",865611,2.59287,103.483551],[110.17118354,"2017-11-19 03:11:0","2017-11-23 09:11:0",{"rightAttr":2},9.5243354,"未知",768729,5.32818,103.483551],[252.17432065,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},9.5557065,"未知",3729844,2.08798,103.483551],[222.17440915,"2017-11-20 22:40:0","2017-11-23 09:11:0",{"rightAttr":2},9.5565915,"未知",4398749,4.45753,103.483551],[175.17513801,"2017-11-19 02:11:0","2017-11-23 09:11:0",{"rightAttr":2},9.5638801,"未知",3971158,7.68134,103.483551],[4.17554931,"2017-11-19 04:02:0","2017-11-23 09:11:0",{"rightAttr":1},9.5679931,"未知",2327846,0.25678,103.483551],[52.18269037,"2017-11-21 18:58:0","2017-11-23 09:11:0",{"rightAttr":5},9.639403699999999,"未知",4358808,5.29033,103.483551],[7.18647463,"2017-11-19 03:04:0","2017-11-23 09:11:0",{"rightAttr":1},9.6772463,"未知",2837421,1.0621,103.483551],[125.18815291,"2017-11-19 03:04:0","2017-11-23 09:11:0",{"rightAttr":2},9.6940291,"未知",4534073,7.18838,103.483551],[40.18836612,"2017-11-20 05:05:0","2017-11-23 09:11:0",{"rightAttr":2},9.6961612,"未知",136228,2.68957,103.483551],[53.19331797,"2017-11-19 03:56:0","2017-11-23 09:11:0",{"rightAttr":1},9.7456797,"未知",2407849,4.41741,103.483551],[175.19579491,"2017-11-19 01:35:0","2017-11-23 09:11:0",{"rightAttr":""},9.7704491,"未知",1693270,0.20369,103.483551],[269.1986991,"2017-11-20 02:10:0","2017-11-23 09:11:0",{"rightAttr":5},9.799491,"未知",2354799,0.54149,103.483551],[205.20116208,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":5},9.8241208,"未知",3513381,3.81968,103.483551],[255.21270066,"2017-11-19 12:59:0","2017-11-23 09:11:0",{"rightAttr":5},9.9395066,"未知",569787,6.93037,103.483551],[80.21415504,"2017-11-19 03:44:0","2017-11-23 09:11:0",{"rightAttr":2},9.9540504,"未知",2398773,4.38342,103.483551],[117.2169347,"2017-11-19 01:45:0","2017-11-23 09:11:0",{"rightAttr":3},9.981847,"未知",4136699,2.91037,103.483551],[304.22226621,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},10.0351621,"未知",4464969,7.27248,103.483551],[231.22243554,"2017-11-19 03:32:0","2017-11-23 09:11:0",{"rightAttr":3},10.0368554,"未知",1934695,2.22741,103.483551],[36.22778946,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":1},10.0903946,"未知",2618310,0.1584,103.483551],[208.2324932,"2017-11-20 17:48:0","2017-11-23 09:11:0",{"rightAttr":2},10.137432,"未知",1998542,4.15799,103.483551],[202.23752848,"2017-11-19 01:13:0","2017-11-23 09:11:0",{"rightAttr":2},10.1877848,"未知",3843678,7.84617,103.483551],[239.23944773,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},10.2069773,"未知",514976,0.55062,103.483551],[213.240356,"2017-11-19 03:13:0","2017-11-23 09:11:0",{"rightAttr":5},10.21606,"未知",2350046,7.80562,103.483551],[162.2413491,"2017-11-20 11:54:0","2017-11-23 09:11:0",{"rightAttr":5},10.225991,"未知",2794431,5.74909,103.483551],[46.25478838,"2017-11-21 09:24:0","2017-11-23 09:11:0",{"rightAttr":""},10.3603838,"未知",763358,4.04663,103.483551],[140.2549169,"2017-11-19 01:23:0","2017-11-23 09:11:0",{"rightAttr":1},10.361669,"未知",2781193,7.57913,103.483551],[68.25665795,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},10.3790795,"未知",949294,2.64528,103.483551],[221.25674376,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},10.3799376,"未知",2556401,3.12905,103.483551],[305.25948513,"2017-11-19 03:57:0","2017-11-23 09:11:0",{"rightAttr":3},10.4073513,"未知",480849,2.30299,103.483551],[21.26028231,"2017-11-20 17:01:0","2017-11-23 09:11:0",{"rightAttr":""},10.4153231,"未知",3827616,3.38753,103.483551],[194.26125946,"2017-11-21 17:40:0","2017-11-23 09:11:0",{"rightAttr":2},10.4250946,"未知",2751202,0.04834,103.483551],[285.26160743,"2017-11-19 01:34:0","2017-11-21 15:07:0",{"rightAttr":1},10.4285743,"未知",2488376,7.47086,103.483551],[286.26381847,"2017-11-19 01:29:0","2017-11-23 09:11:0",{"rightAttr":3},10.4506847,"未知",2533678,0.19401,103.483551],[3.26922761,"2017-11-19 02:35:0","2017-11-23 09:11:0",{"rightAttr":1},10.5047761,"未知",1033677,5.50111,103.483551],[292.27175029,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},10.5300029,"未知",2613260,0.36744,103.483551],[188.27831979,"2017-11-19 01:52:0","2017-11-23 09:11:0",{"rightAttr":1},10.5956979,"未知",522243,0.58802,103.483551],[233.28214937,"2017-11-19 02:14:0","2017-11-23 09:11:0",{"rightAttr":2},10.6339937,"未知",4218196,0.75565,103.483551],[114.2847995,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":2},10.660495000000001,"未知",4778289,0.78983,103.483551],[139.28542572,"2017-11-19 03:55:0","2017-11-23 09:11:0",{"rightAttr":1},10.6667572,"未知",1750656,2.74131,103.483551],[187.29060177,"2017-11-19 01:22:0","2017-11-23 09:11:0",{"rightAttr":3},10.7185177,"未知",2929178,7.99519,103.483551],[47.2907795,"2017-11-21 16:28:0","2017-11-23 09:11:0",{"rightAttr":3},10.720295,"未知",2944440,3.75389,103.483551],[232.29212482,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":5},10.7337482,"未知",4196318,5.8405,103.483551],[66.29603418,"2017-11-19 11:15:0","2017-11-23 09:11:0",{"rightAttr":""},10.7728418,"未知",1500910,5.0109,103.483551],[117.29834979,"2017-11-19 03:56:0","2017-11-23 09:11:0",{"rightAttr":""},10.7959979,"未知",3853778,4.64684,103.483551],[253.30026523,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},10.8151523,"未知",1516840,2.83706,103.483551],[142.30399749,"2017-11-19 01:59:0","2017-11-23 09:11:0",{"rightAttr":5},10.8524749,"未知",3518161,2.06747,103.483551],[164.30487202,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},10.8612202,"未知",1133741,3.75272,103.483551],[6.3053430299999995,"2017-11-19 01:27:0","2017-11-23 09:11:0",{"rightAttr":5},10.865930299999999,"未知",3302767,6.30458,103.483551],[279.30561343,"2017-11-19 01:51:0","2017-11-23 09:11:0",{"rightAttr":2},10.8686343,"未知",1614166,4.63612,103.483551],[85.31170954,"2017-11-19 03:06:0","2017-11-23 09:11:0",{"rightAttr":""},10.9295954,"未知",4071565,2.23767,103.483551],[195.3166043,"2017-11-19 02:19:0","2017-11-23 09:11:0",{"rightAttr":2},10.978543,"未知",3371809,3.56703,103.483551],[55.31937267,"2017-11-20 14:18:0","2017-11-23 09:11:0",{"rightAttr":3},11.0062267,"未知",3424149,7.41531,103.483551],[149.31949662,"2017-11-19 02:49:0","2017-11-23 09:11:0",{"rightAttr":3},11.0074662,"未知",4145873,7.81251,103.483551],[200.31957103,"2017-11-20 17:14:0","2017-11-23 09:11:0",{"rightAttr":""},11.0082103,"未知",3469424,0.19762,103.483551],[66.32016722,"2017-11-19 02:04:0","2017-11-23 09:11:0",{"rightAttr":5},11.0141722,"未知",3247712,7.63931,103.483551],[161.32235671,"2017-11-19 03:51:0","2017-11-23 09:11:0",{"rightAttr":""},11.0360671,"未知",437806,5.69168,103.483551],[213.32674142,"2017-11-19 03:03:0","2017-11-23 09:11:0",{"rightAttr":2},11.079914200000001,"未知",2473677,0.78821,103.483551],[175.32983367,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":1},11.1108367,"未知",3470797,4.44819,103.483551],[221.33149746,"2017-11-19 01:39:0","2017-11-23 09:11:0",{"rightAttr":2},11.1274746,"未知",3688866,5.69323,103.483551],[38.33591446,"2017-11-19 01:36:0","2017-11-23 09:11:0",{"rightAttr":""},11.1716446,"未知",443858,5.86079,103.483551],[305.33858916,"2017-11-19 02:23:0","2017-11-23 09:11:0",{"rightAttr":""},11.1983916,"未知",2785389,1.98495,103.483551],[70.33977242,"2017-11-19 01:15:0","2017-11-23 09:11:0",{"rightAttr":2},11.2102242,"未知",89200,0.44945,103.483551],[66.34051338,"2017-11-19 04:15:0","2017-11-23 09:11:0",{"rightAttr":3},11.2176338,"未知",3075985,7.35499,103.483551],[135.34215678,"2017-11-19 01:30:0","2017-11-23 09:11:0",{"rightAttr":2},11.2340678,"未知",631644,5.36277,103.483551],[53.34898357,"2017-11-19 02:35:0","2017-11-23 09:11:0",{"rightAttr":1},11.3023357,"未知",1122908,2.4028,103.483551],[165.35139886,"2017-11-19 01:38:0","2017-11-23 09:11:0",{"rightAttr":1},11.326488600000001,"未知",2561517,1.60008,103.483551],[164.35466462,"2017-11-19 02:45:0","2017-11-23 09:11:0",{"rightAttr":2},11.3591462,"未知",1551879,3.64284,103.483551],[220.35795667,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":3},11.3920667,"未知",4081467,2.12507,103.483551],[190.36210665,"2017-11-19 02:53:0","2017-11-23 09:11:0",{"rightAttr":3},11.4335665,"未知",1935347,7.18953,103.483551],[217.36494906,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},11.4619906,"未知",13938,2.70206,103.483551],[62.36807079,"2017-11-19 03:47:0","2017-11-23 09:11:0",{"rightAttr":5},11.4932079,"未知",1223762,2.51515,103.483551],[208.37341109,"2017-11-21 04:22:0","2017-11-23 09:11:0",{"rightAttr":3},11.546610900000001,"未知",1197360,6.5866,103.483551],[238.3791022,"2017-11-20 01:31:0","2017-11-23 09:11:0",{"rightAttr":2},11.603522,"未知",3531256,3.67982,103.483551],[224.3798542,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},11.611042,"未知",3029939,7.23505,103.483551],[176.38149046,"2017-11-19 01:15:0","2017-11-23 09:11:0",{"rightAttr":5},11.6274046,"未知",22215,2.97576,103.483551],[293.38444168,"2017-11-19 02:38:0","2017-11-23 09:11:0",{"rightAttr":1},11.6569168,"未知",4823115,5.86701,103.483551],[130.38647034,"2017-11-19 01:40:0","2017-11-23 09:11:0",{"rightAttr":3},11.6772034,"未知",3145494,5.1071,103.483551],[144.38846594,"2017-11-19 04:04:0","2017-11-23 09:11:0",{"rightAttr":2},11.6971594,"未知",4618860,5.49515,103.483551],[198.38903746,"2017-11-19 03:57:0","2017-11-23 09:11:0",{"rightAttr":""},11.7028746,"未知",3293171,7.19751,103.483551],[58.39121715,"2017-11-19 01:22:0","2017-11-23 09:11:0",{"rightAttr":""},11.7246715,"未知",868377,5.67612,103.483551],[35.39142759,"2017-11-19 03:06:0","2017-11-23 09:11:0",{"rightAttr":2},11.7267759,"未知",2583744,7.57585,103.483551],[111.39268352,"2017-11-19 01:51:0","2017-11-23 09:11:0",{"rightAttr":2},11.7393352,"未知",1955835,6.45992,103.483551],[55.39319643,"2017-11-19 01:40:0","2017-11-23 09:11:0",{"rightAttr":2},11.7444643,"未知",1974829,1.1512,103.483551],[125.39373942,"2017-11-19 12:54:0","2017-11-23 09:11:0",{"rightAttr":3},11.7498942,"未知",4914533,2.43423,103.483551],[91.39703728,"2017-11-19 01:11:0","2017-11-23 09:11:0",{"rightAttr":""},11.7828728,"未知",194944,6.08354,103.483551],[260.39894346,"2017-11-19 03:12:0","2017-11-23 09:11:0",{"rightAttr":3},11.8019346,"未知",3338380,2.83453,103.483551],[93.39964833,"2017-11-19 13:25:0","2017-11-23 09:11:0",{"rightAttr":5},11.8089833,"未知",1217743,7.72955,103.483551]],
        colorMap: [[0, "#146600"], [0.25, "#0f0"], [0.50, "#f00"], [0.75, "#00f"], [1, "#34FF00"]],
        attrOpts: [
        {
            type: 'rightAttr',
            name: '4',
            color: '#34FF00'
        }, {
            type: 'rightAttr',
            name: '1',
            color: '#39a3f6'
        }, {
            type: 'rightAttr',
            name: '2',
            color: '#f00'
        }, {
            type: 'rightAttr',
            name: '3',
            color: '#f17c67'
        }],
        onLineSelected: function (target, event, payload) {
            // console.log(target, event, payload)
        },
        onRightAttrClick: function (target, event, payload) {
            // console.log(target, event, payload)
        },
        pointLength:100000,
        onSelectColorMap: getResultData,
        // onSelectColorMap:function(){return null},
        OnHoverSelect: function (data) {
        },
        OnHoverSet:[],
        colorMapSelectOffset: 300,
        hoverSelectOffset: 300,
        markerInfo: function (x, y, d) {
            return '<div>当前鼠标值：X：' + x + 'Y：' + y + '</div>' +
                '<div>当前值：Y:' + d.data[0] + '</div>' +
                '<div>开始时间：' + d.data[1] + '</div>' +
                '<div>结束时间：' + d.data[2] + '</div>' +
                '<div>附带属性：' + JSON.stringify(d.data[3]) + '</div>'
        },
        rightAttrInfo: function (x, y, d) {
            return '<div>当前鼠标值：X：' + x + 'Y：' + y + '</div>' +
                '<div>当前值：Y:' + d.data[0] + '</div>' +
                '<div>开始时间：' + d.data[1] + '</div>' +
                '<div>结束时间：' + d.data[2] + '</div>' +
                '<div>附带属性：' + JSON.stringify(d.data[3]) + '</div>'
        },
        yUnit: '米',
        attrLegends: [
            {
                "attr": "attr1",
                type: 'leftAttr',
                "name": "左属性一",
                "description": "左属性一的说明" 
            },
            {
                "attr": "attr2",
                type: 'rightAttr',
                "name": "右属性1",
                "description": "右属性1的说明" 
            }
        ]
    }
    widget = new MQVisWidget(config)
    widget.render()
    var config1 = config
    config1.node = '#root1'
    function getResultData(x1, x2,yRange,dataSet,pointLength,UID,x0) {return;
        setTimeout(function (){
            if(widget){
                var data = []
                dataSet ? data = dataSet:''
                var arry = []
                var date1 = parseDate(x1)
                var date2 = parseDate(x2)
                data.forEach(function (item, i) {
                    if(item[1]==item[2]&&parseDate(item[1])>date1&&parseDate(item[1])<date2){
                        arry.push([item[0],item[2],random()])
                    }else if (parseDate(item[1]) < date1 && parseDate(item[2]) > date1) {
                        if ( parseDate(item[2]) > date2) {//线条穿过 item[1] date1  date2 item[2]
                           var step = ((date2-date1)/pointLength/1000)
                           step>100?step=10:""
                           for(var i=0;i<step;i++){
                               arry.push([item[0],formatDate(Number(date1.valueOf()+i*pointLength*1000)), random()])
                           }
                        } else {//item[1] date1 item[2] date2
                            var step = ((parseDate(item[2])-date1)/pointLength/1000)
                            step>100?step=10:""
                            for(var i=0;i<step;i++){
                                arry.push([item[0],formatDate(Number(date1.valueOf()+i*pointLength*1000)), random()])
                            }
                        }
                    }else if (parseDate(item[1]) < date2 && parseDate(item[2]) > date2) {// date1 item[1]  date2  item[2]
                         var step = ((date2-parseDate(item[1]))/pointLength/1000)
                        step>100?step=10:""
                        for(var i=0;i<step;i++){
                            arry.push([item[0],formatDate(Number(parseDate(item[1]).valueOf()+i*pointLength*1000)), random()])
                        }
                    }
                })
                // 此处调用函数，设置伪彩点的颜色。
                widget.showHoverData(arry,UID)
            }
        },1000)
        return []
    }
}
window.onresize = function () {
    var width = window.innerWidth - 20
    var height = window.innerHeight - 20
    widget.updateOptions({ width: width, height: height })
}
