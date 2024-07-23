/* 운용규모 - 데이터 테이블 및 차트 */
function operationSizeChart() {
  // var thisHref = document.URL.substring(document.URL.lastIndexOf("=") + 1);
  var thisHref = window.location.hash.split('#')[1];
  // console.log("운용규모" + thisHref)
  var $contBox = $('.operation-size-area').find('> div');
  var $recentIndex1 = $contBox.eq(0).find('.select-item').eq(0).attr('data-index');
  var $recentIndex2 = $contBox.eq(1).find('.select-item').eq(0).attr('data-index');
  var $recentText1 = $contBox.eq(0).find('.select-item').eq(0).text();
  var $recentText2 = $contBox.eq(1).find('.select-item').eq(0).text();

  // 페이지 첫 로딩 후 데이터 로드
  switch(thisHref) {
    case 'operation01':
      $contBox.eq(1).find('.btn-select').attr('data-index', $recentIndex2);
      $contBox.eq(1).find('.btn-select').text($recentText2);
      $contBox.eq(1).find('.chart-box').html('');

      chartDataLoad('/resources/js/json/huf.json', 0, 'pieChart1', 'pieChart2', 'barChart1');
      break;
    case 'operation02':
      $contBox.eq(0).find('.btn-select').attr('data-index', $recentIndex1);
      $contBox.eq(0).find('.btn-select').text($recentText1);
      $contBox.eq(0).find('.chart-box').html('');

      chartDataLoad('/resources/js/json/miraeasset.json', 1, 'pieChart3', 'pieChart4', 'barChart2');
      break;
  }

  /* json 데이터 로드  */
  function chartDataLoad(dataFileName, contIndex, pieChartId1, pieChartId2, barChartId) {
    $.getJSON(dataFileName, function (jsonData) {
      var $target = $contBox.eq(contIndex);
      var $targetCaption = $target.find('caption');
      var $targetHead = $target.find('thead');
      var $targetBody = $target.find('tbody');
      var key = $target.find('.btn-select').attr('data-index'); // 기본값
      var category = jsonData[key];
      var colLen = $targetHead.find('th').length;
      var rowLen = category.tbody.length;
      var allLen = category.all.length;
      var pieChartArea1 = document.getElementById(pieChartId1);
      var pieChartArea2 = document.getElementById(pieChartId2);
      var barChartArea = document.getElementById(barChartId);

      newTable(category);
      newPieChart(pieChartArea1, category, 2, rowLen);
      newPieChart(pieChartArea2, category, 3, rowLen);
      if (contIndex == 0) {
        newColumnChart(barChartArea, 10);
      } else {
        newColumnChart(barChartArea, 8);
      }

      $target.find('.select-menu button').on('click', function () {
        key = $(this).attr('data-index');
        var text = $(this).text();
        category = jsonData[key];
        rowLen = category.tbody.length;
        allLen = category.all.length;

        // btn-select 변경
        $target.find('.btn-select').attr('data-index', key);
        $target.find('.btn-select').text(text);
        $target.find('.btn-select').removeClass('active');
        $target.find('.select-menu').removeClass('active');

        // 생성 돼 있는 차트 삭제
        $target.find('.chart-box').html('');

        // 새 테이블, 차트 생성
        newTable(category);
        newPieChart(pieChartArea1, category, 2, rowLen);
        newPieChart(pieChartArea2, category, 3, rowLen);
        if (contIndex == 0) {
          newColumnChart(barChartArea, 10);
        } else {
          newColumnChart(barChartArea, 8);
        }
      });

      // 테이블 생성
      function newTable(category) {
        var addData = '';

        // CAPTION
        $targetCaption.text(category.caption[0]);

        // THEAD
        for (var i = 0; i < colLen; i++) {
          $targetHead.find('th').eq(i).find('div').text(category.thead[i]);
        }

        // TBODY
        for (var i = 0; i < rowLen; i++) {
          addData += '<tr>';
          addData += '<th scope="row">';
          addData += category.tbody[i][0];
          addData += '</th>';

          for (var j = 1; j < colLen - 1; j++) {
            //채권 내외부 rowspan 처리
            if (category.tbody[i][0] == '채권(내부)' || category.tbody[i][0] == '채권(위탁)') {
              if (category.tbody[i][j] == category.tbody[i + 1][j]) {
                addData += '<td rowspan="2">';
                addData += category.tbody[i][j];
                addData += '</td>';
              } else if (category.tbody[i][j] == category.tbody[i - 1][j]) {
                // 공백처리
              } else {
                addData += '<td>';
                addData += category.tbody[i][j];
                addData += '</td>';
              }
            } else {
              addData += '<td>';
              addData += category.tbody[i][j];
              addData += '</td>';
            }
          }

          addData += '</tr>';

        }

        // ALL
        for (var i = 0; i < allLen; i++) {
          addData += '<tr>';
          addData += '<th scope="row" class="total">';
          addData += category.all[i][0];
          addData += '</th>';

          for (var j = 1; j < colLen - 1; j++) {
            // 기금전체 rowspan 처리
            if (allLen == 2 && category.all[0][j] == category.all[1][j]) {
              if (i == 0) {
                addData += '<td rowspan="2" class="total">';
                addData += category.all[i][j];
                addData += '</td>';
              } else {
                // 공백처리
              }
            } else {
              addData += '<td class="total">';
              addData += category.all[i][j];
              addData += '</td>';
            }
          }

          addData += '</tr>';

        }

        $targetBody.html(addData);

        // 숫자 세자리수 표시
        for (var i = 0; i < rowLen + allLen; i++) {
          var targetText = $targetBody.find('tr').eq(i).find('td').eq(0);
          var str = Number(targetText.text());

          if (isNaN(str)) {
            str = '-';
            targetText.text(str);
          } else {
            str = str.toLocaleString('ko-KR');
            targetText.text(str);
          }
        }
      }

      // 파이차트 생성
      // type = 2 : 계획 , 3 : 실적
      function newPieChart(obj, category, type, rowLen) {
        var el = obj;
        var data = {
          categories: ['구분'],
          series: []
        };

        for (var i = 0; i < rowLen; i++) {
          // 현금성, 유동성, 중장기 표시 제외
          if (category.tbody[i][0] != '현금성' && category.tbody[i][0] != '유동성' && category.tbody[i][0] != '중장기') {
            // '-' 데이터 0으로 표시
            if (isNaN(Number(category.tbody[i][type])) || 0 == Number(category.tbody[i][type])) {
              data.series.push({
                name: category.tbody[i][0],
                data: 0.00001
              });
            } else {
              data.series.push({
                name: category.tbody[i][0],
                data: Number(category.tbody[i][type])
              });
            }
          }
        };

        var options = {
          chart: {
            width: 'auto',
            height: 'auto'
          },
          series: {
            radiusRange: {
              inner: '40%',
              outer: '100%'
            },
            dataLabels: {
              visible: true,
              anchor: 'center', // 데이터 라벨(숫자) 위치
              pieSeriesName: { // 데이터 라벨(항목) 위치
                visible: false,
                anchor: 'center'
              }
            }
          },
          legend: { // 범례
            align: 'bottom',
            showCheckbox: false,
            item: {
              width: 80
            },
            label: {
              fontFamily: 'Noto Sans KR'
            }
          },
          exportMenu: { visible: false },
          theme: { // 폰트 사이즈 및 색상 등 커스터마이즈
            chart: {
              fontFamily: 'Noto Sans KR'
            },
            series: {
              colors: ['#0a6a6b', '#dfe899', '#027373', '#486e46', '#6e9220', '#97e04e'],
              dataLabels: {
                fontSize: 12,
                pieSeriesName: {
                  fontSize: 12
                }
              }
            }
          },
          tooltip: { // 0.00001 에서 0으로 표시 처리
            formatter: function formatter(value) {
              var str = value;

              if (value == 0.00001) {
                str = '0.00';
                return str;
              } else {
                return str;
              }
            },
            offsetX: -30
          }
        };

        var chart = toastui.Chart.pieChart({ el: el, data: data, options: options });
      }

      // 바 차트 생성
      function newColumnChart(obj, barIndex) {

        var el = obj;
        var data = {
          categories: [],
          series: [{
            name: barIndex === 8 ? '운용말잔' : '평균금액',
            data: [],
            colorByCategories: true
          }]
        };

        var options = {
          chart: {
            width: 'auto',
            height: 'auto'
          },
          xAxis: {
            label: {
              interval: 1
            }
          },
          theme: {
            series: {
              selectable: true,
              barWidth: 30,
              colors: []
            },
            xAxis: {
              label: {
                fontSize: 10
              }
            },
            yAxis: {
              label: {
                fontSize: 10
              }
            }
          },
          responsive: {
            animation: { duration: 300 },
            rules: [{
              condition: function condition(_ref) {
                var w = _ref.width;

                return w <= 500;
              },
              options: {
                theme: {
                  series: {
                    barWidth: 5
                  },
                  xAxis: {
                    label: {
                      fontSize: 7
                    }
                  },
                  yAxis: {
                    label: {
                      fontSize: 8
                    }
                  }
                },
                yAxis: {
                  label: {
                    formatter: function formatter(value) {
                      if (value > 10000) {
                        var numDiv = value / 10000;
                        return numDiv + "만";
                      }
                      return value;
                    }
                  }
                },
                xAxis: {
                  label: {
                    formatter: function formatter(value) {
                      var reducedYear = value.substring(2);
                      return reducedYear;
                    }
                  }
                }
              }
            }]
          },
          series: {
            selectable: true,
            eventDetectType: "grouped"
          },
          legend: { // 범례
            visible: false
          },
          exportMenu: { visible: false },
          tooltip: { // 숫자 세자리수 표시
            formatter: function formatter(value) {
              var str = value.toLocaleString('ko-KR');
              return str;
            }
          }
        };

        if (category.quarter == '연간') {
          for (var i = 0; i < barIndex + 35; i++) {
            if (key - i < 0) {} else {
              if (jsonData[key - i].quarter == '연간') {
                data.categories.push(jsonData[key - i].year + ' ' + jsonData[key - i].quarter);
                data.series[0].data.push(Number(jsonData[key - i].all[0][1]));
                options.theme.series.colors.push("#d5dade"); // 바 색상 푸쉬
              }
            }
          }
          options.theme.series.barWidth = 15; // 연간 바 넓이
          options.theme.series.colors.splice(data.categories.length - 1, 1, "#027373"); // 마지막 항목 바 색상 변경
        } else {
          for (var i = 0; i < barIndex; i++) {
            if (key - i < 0) {
              // 공백처리
            } else {
              if (jsonData[key - i].quarter != '연간') {
                data.categories.push(jsonData[key - i].year + ' ' + jsonData[key - i].quarter);
                data.series[0].data.push(Number(jsonData[key - i].all[0][1]));
                options.theme.series.colors.push("#d5dade"); // 바 색상 푸쉬
              }
            }
          }
          options.theme.series.barWidth = 15; // 분기별 바 넓이
          options.theme.series.colors.splice(data.categories.length - 1, 1, "#027373"); // 마지막 항목 바 색상 변경
        }

        data.categories.reverse();
        data.series[0].data.reverse();

        var chart = toastui.Chart.columnChart({ el: el, data: data, options: options });
      }
    }); // get JSON
  }
}

/* 운용성과 - 데이터 테이블 및 차트 */
function operationPerformChart() {
  // var thisHref = document.URL.substring(document.URL.lastIndexOf("=") + 1);
  var thisHref = window.location.hash.split('#')[1];

  // console.log("운용성과" + thisHref);

  var $contBox = $('.operation-perform-area').find('> div');
  var $recentIndex1 = $contBox.eq(0).find('.select-item').eq(0).attr('data-index');
  var $recentIndex2 = $contBox.eq(1).find('.select-item').eq(0).attr('data-index');
  var $recentText1 = $contBox.eq(0).find('.select-item').eq(0).text();
  var $recentText2 = $contBox.eq(1).find('.select-item').eq(0).text();

  // 페이지 첫 로딩 후 데이터 로드
  switch(thisHref) {
    case 'result01':
      $contBox.eq(1).find('.btn-select').attr('data-index', $recentIndex2);
      $contBox.eq(1).find('.btn-select').text($recentText2);
      $contBox.eq(1).find('.chart-box').html('');

      hufChartDataLoad(0);
      break;
    case 'result02':
      $contBox.eq(0).find('.btn-select').attr('data-index', $recentIndex1);
      $contBox.eq(0).find('.btn-select').text($recentText1);
      $contBox.eq(0).find('.chart-box').html('');

      miraeChartDataLoad(1);
      break;
  }

  // /* 탭 이벤트 */
  // $('.perform-tab-menu').find('li').on('click', function() {
  //   var contIndex = $(this).index();
  //   switch(contIndex) {
  //     case 0:
  //       // 초기화
  //       // console.log("주택도시기금");
  //       $contBox.eq(1).find('.btn-select').attr('data-index', $recentIndex2);
  //       $contBox.eq(1).find('.btn-select').text($recentText2);
  //       $contBox.eq(1).find('.chart-box').html('');
  //
  //       // 테이블 및 차트 생성
  //       hufChartDataLoad(contIndex);
  //       break;
  //     case 1:
  //       // 초기화
  //       // console.log("미래에셋자산운용");
  //       $contBox.eq(0).find('.btn-select').attr('data-index', $recentIndex1);
  //       $contBox.eq(0).find('.btn-select').text($recentText1);
  //       $contBox.eq(0).find('.chart-box').html('');
  //
  //       // 테이블 및 차트 생성
  //       miraeChartDataLoad(contIndex);
  //       break;
  //   }
  //
  // });

  /* 주택도시기금 - json 데이터 로드 */
  function hufChartDataLoad(contIndex) {
    $.getJSON('/resources/js/json/huf.json', function(jsonData) {
      var $target = $contBox.eq(contIndex);
      var $targetCaption = $target.find('caption');
      var $targetHead = $target.find('thead');
      var $targetBody = $target.find('tbody');
      var key = $target.find('.btn-select').attr('data-index'); // 기본값
      var category = jsonData[key];
      var colLen = $targetHead.find('th').length;
      var rowLen = category.tbody.length;
      var allLen = category.all.length;
      var columnChartArea = document.getElementById('columnChart');

      newTable(category);
      newChartInfo(category, 0);
      newColumnChart(columnChartArea);

      $target.find('.select-menu button').on('click', function () {
        key = $(this).attr('data-index');
        var text = $(this).text();
        category = jsonData[key];
        rowLen = category.tbody.length;
        allLen = category.all.length;

        // btn-select 변경
        $target.find('.btn-select').attr('data-index', key);
        $target.find('.btn-select').text(text);
        $target.find('.btn-select').removeClass('active');
        $target.find('.select-menu').removeClass('active');

        // 생성 돼 있는 차트 삭제
        $target.find('.chart-box').html('');

        // 새 테이블, 차트 정보, 차트 생성
        newTable(category);
        newChartInfo(category, 0);
        newColumnChart(columnChartArea);
      });

      // 차트 정보 생성
      function newChartInfo(category, index) {
        var $targetInfo = $target.find('.info-area > div').eq(index);
        var $title = $targetInfo.find('.title');
        var $date = $targetInfo.find('.date span');
        var $incomeRate = $targetInfo.find('.income-rate span');
        var $benchmarkCompare = $targetInfo.find('.benchmark-compare span');

        $title.html(category.year + ' ' + category.quarter);
        $date.html(category.date);
        $incomeRate.html(category.all[0][5]);
        $benchmarkCompare.html(category.all[0][7]);
      }

      // 테이블 생성
      function newTable(category) {
        var addData = '';

        // CAPTION
        $targetCaption.text(category.caption[1]);

        // THEAD
        $targetHead.find('th').eq(0).text(category.thead[0]);

        for (var i = 1; i < colLen; i++) {
          $targetHead.find('th').eq(i).text(category.thead[i + 5]);
        }

        // TBODY
        for (var i = 0; i < rowLen; i++) {
          addData += '<tr>';
          addData += '<th scope="row">';
          addData += category.tbody[i][0];
          addData += '</th>';

          for (var j = 1; j < colLen; j++) {
            if (category.tbody[i][0] == '채권(내부)' || category.tbody[i][0] == '채권(위탁)') {
              if (category.tbody[i][j + 4] == category.tbody[i + 1][j + 4]) {
                addData += '<td rowspan="2">';
                addData += category.tbody[i][j + 4];
                addData += '</td>';
              } else if (category.tbody[i][j + 4] == category.tbody[i - 1][j + 4]) {
                addData += '';
              } else {
                addData += '<td>';
                addData += category.tbody[i][j + 4];
                addData += '</td>';
              }
            } else {
              addData += '<td>';
              addData += category.tbody[i][j + 4];
              addData += '</td>';
            }
          }

          addData += '</tr>';
        }

        // ALL
        for (var i = 0; i < allLen; i++) {
          addData += '<tr>';
          addData += '<th scope="row" class="total">';
          addData += category.all[i][0];
          addData += '</th>';

          for (var j = 1; j < colLen; j++) {
            if (allLen == 2 && category.all[0][j + 4] == category.all[1][j + 4]) {
              if (i == 0) {
                addData += '<td rowspan="2" class="total">';
                addData += category.all[i][j + 4];
                addData += '</td>';
              } else {
                addData += '';
              }
            } else {
              addData += '<td class="total">';
              addData += category.all[i][j + 4];
              addData += '</td>';
            }
          }

          addData += '</tr>';
        }

        $targetBody.html(addData);
      }

      // 바 차트 생성
      function newColumnChart(obj) {
        var el = obj;
        var data = {
          categories: [],
          series: [{
            name: '수익률',
            data: []
          }, {
            name: 'BM',
            data: []
          }]
        };

        var options = {
          chart: {
            width: 'auto',
            height: 'auto'
          },
          responsive: {
            animation: { duration: 300 },
            rules: [{
              condition: function condition(_ref2) {
                var w = _ref2.width;

                return w <= 500;
              },
              options: {
                chart: {
                  height: 100
                },
                xAxis: {
                  tick: { interval: 1 },
                  label: {
                    interval: 1,
                    formatter: function formatter(value) {
                      var reducedYear = value.substring(2);
                      return reducedYear;
                    }
                  }
                },
                legend: {
                  align: 'bottom'
                },
                theme: {
                  series: {
                    barWidth: 6
                  }
                },
                yAxis: {
                  label: {
                    formatter: function formatter(value) {
                      var str = value;
                      return str;
                    }
                  }
                }
              }
            }]
          },
          xAxis: {
            label: {
              interval: 1
            }
          },
          yAxis: {
            label: {
              formatter: function formatter(value) {
                var str = value + '.00';
                return str;
              }
            }
          },
          series: {
            selectable: true,
            eventDetectType: "grouped"
          },
          legend: {
            align: "bottom",
            showCheckbox: false,
            interval: 1
          },
          exportMenu: { visible: false },
          theme: {
            series: {
              selectable: true,
              barWidth: 30,
              colors: ['#e95f3d', '#1a3b62']
            },
            yAxis: {
              label: {
                fontSize: 12
              },
              color: '#bbb'
            }
          },
          plot: {
            visible: false
          }
        };

        if (category.quarter == '연간') {
          for (var i = 0; i < 40; i++) {
            //12-23데이터 표시 수 수정 (5년)
            if (key - i < 0) {} else {
              if (jsonData[key - i].quarter == '연간') {
                data.categories.push(jsonData[key - i].year + ' ' + jsonData[key - i].quarter);
                data.series[0].data.push(jsonData[key - i].all[0][5]); // 수익률
                data.series[1].data.push(jsonData[key - i].all[0][6]); // BM
              }
            }
          }
          options.theme.series.barWidth = 12; // 연간 바 넓이
        } else {
          for (var i = 0; i < 10; i++) {
            //12-23데이터 표시 수 수정 (5년)
            if (key - i < 0) {} else {
              if (jsonData[key - i].quarter != '연간') {
                data.categories.push(jsonData[key - i].year + ' ' + jsonData[key - i].quarter);
                data.series[0].data.push(jsonData[key - i].all[0][5]); // 수익률
                data.series[1].data.push(jsonData[key - i].all[0][6]); // BM
              }
            }
          }

          options.theme.series.barWidth = 12; // 분기별 바 넓이
        }

        data.categories.reverse();
        data.series[0].data.reverse();
        data.series[1].data.reverse();

        var chart = toastui.Chart.columnChart({ el: el, data: data, options: options });
      }
    }); // get JSON
  }

  /* 미래에셋자산운용 - json 데이터 로드 */
  function miraeChartDataLoad(contIndex) {
    $.getJSON('/resources/js/json/miraeasset.json', function(jsonData) {
      var $target = $contBox.eq(contIndex);
      var $targetCaption = $target.find('caption');
      var $targetHead = $target.find('thead');
      var $targetBody = $target.find('tbody');
      var key = $target.find('.btn-select').attr('data-index'); // 기본값
      var category = jsonData[key];
      var colLen = $targetHead.find('th').length;
      var rowLen = category.tbody.length;
      var allLen = category.all.length;

      newTable(category);
      newChartInfo(category, 0);
      newChartInfo(category, 1);

      $('.graph-img-01').attr('src', '/resources/images/graph-images/' + key + '-2.png');
      $('.graph-img-02').attr('src', '/resources/images/graph-images/' + key + '-1.png');

      $target.find('.select-menu button').on('click', function () {
        key = $(this).attr('data-index');
        var text = $(this).text();
        category = jsonData[key];
        rowLen = category.tbody.length;
        allLen = category.all.length;

        // btn-select 변경
        $target.find('.btn-select').attr('data-index', key);
        $target.find('.btn-select').text(text);
        $target.find('.btn-select').removeClass('active');
        $target.find('.select-menu').removeClass('active');
        // 그래프 이미지 변경
        // console.log(key);
        $('.graph-img-01').attr('src', '/resources/images/graph-images/' + key + '-2.png');
        $('.graph-img-02').attr('src', '/resources/images/graph-images/' + key + '-1.png');

        // 생성 돼 있는 차트 삭제
        $target.find('.chart-box').html('');

        // 새 테이블, 차트 정보, 차트 생성
        newTable(category);
        newChartInfo(category, 0);
        newChartInfo(category, 1);
      });

      // 차트 정보 생성
      function newChartInfo(category, index) {
        var $targetInfo = $target.find('.info-area > div').eq(index);
        var $title = $targetInfo.find('.title');
        var $date = $targetInfo.find('.date span');
        var $incomeRate = $targetInfo.find('.income-rate span');
        var $benchmarkCompare = $targetInfo.find('.benchmark-compare span');

        switch (index) {
          case 0:
            $title.html(category.year + ' ' + category.quarter);
            $date.html(category.date);
            $incomeRate.html(category.all[0][5]);
            $benchmarkCompare.html(category.all[0][7]);
            break;
          case 1:
            $title.html(category.year + ' 연초이후');
            $date.html(category.afterDate);
            $incomeRate.html(category.all[0][8]);
            $benchmarkCompare.html(category.all[0][10]);
            break;
        }
      }

      // 테이블 생성
      function newTable(category) {
        var addData = '';

        // CAPTION
        $targetCaption.text(category.caption[1]);

        // THEAD
        $targetHead.find('th').eq(0).text(category.thead[0]);
        $targetHead.find('th').eq(1).text(category.quarter);

        for (var i = 3; i < colLen; i++) {
          $targetHead.find('th').eq(i).text(category.thead[i + 3]);
        }

        // TBODY
        for (var i = 0; i < rowLen; i++) {
          addData += '<tr>';
          addData += '<th scope="row">';
          addData += category.tbody[i][0];
          addData += '</th>';

          for (var j = 1; j < colLen - 2; j++) {
            addData += '<td>';
            addData += category.tbody[i][j + 4];
            addData += '</td>';
          }

          addData += '</tr>';

        }

        // ALL
        for (var i = 0; i < allLen; i++) {
          addData += '<tr>';
          addData += '<th scope="row" class="total">';
          addData += category.all[i][0];
          addData += '</th>';

          for (var j = 1; j < colLen - 2; j++) {
            if (allLen == 2 && category.all[0][j + 4] == category.all[1][j + 4]) {
              if (i == 0) {
                addData += '<td rowspan="2" class="total">';
                addData += category.all[i][j + 4];
                addData += '</td>';
              } else {
                addData += '';
              }
            } else {
              addData += '<td class="total">';
              addData += category.all[i][j + 4];
              addData += '</td>';
            }
          }

          addData += '</tr>';
        }

        $targetBody.html(addData);
      }
    }); // get JSON
  }
}