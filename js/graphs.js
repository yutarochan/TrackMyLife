    	var graphMode = 1;
    	var graphType = 1;

    	// Top Bar Selector
    	$("#top_nav").click(function() {
    		update();
    	});

    	$("#sleep").click(function() {
    		graphMode = 1;
    		$("#sleep").addClass("active");
    		$("#code").removeClass("active");
    		$("#both").removeClass("active");


			$("#bandp").show();
    		$("#scatter").hide();
			$("#residuals").hide();
			$("#histogram").show();
			$("#contingency").hide();
			if (graphType != '1') {
	    		graphType = 1;
	    		$("#timeseries").addClass("active");
	    		$("#scatter").removeClass("active");
	    		$("#residuals").removeClass("active");
	    		$("#histogram").removeClass("active");
	    		$("#contingency").removeClass("active");
	    		$("#general").removeClass("active");
	    		$("#bandp").removeClass("active");
			}
    	});
    	$("#code").click(function() {
    		graphMode = 2;
    		$("#code").addClass("active");
    		$("#sleep").removeClass("active");
    		$("#both").removeClass("active");


			$("#bandp").show();
    		$("#scatter").hide();
			$("#residuals").hide();
			$("#histogram").show();
			$("#contingency").hide();
			if (graphType != '1') {
		    	graphType = 1;
	    		$("#timeseries").addClass("active");
	    		$("#scatter").removeClass("active");
	    		$("#residuals").removeClass("active");
	    		$("#histogram").removeClass("active");
	    		$("#contingency").removeClass("active");
	    		$("#general").removeClass("active");
	    		$("#bandp").removeClass("active");			
			}
		});
    	$("#both").click(function() {
    		graphMode = 3;
    		$("#both").addClass("active");
    		$("#code").removeClass("active");
    		$("#sleep").removeClass("active");

    		$("#scatter").show();
			$("#residuals").hide();
			$("#contingency").hide();
			$("#bandp").hide();
			$("#histogram").hide();
			
			if (graphType != '1') {
	    		graphType = 1;
	    		$("#timeseries").addClass("active");
	    		$("#scatter").removeClass("active");
	    		$("#residuals").removeClass("active");
	    		$("#histogram").removeClass("active");
	    		$("#contingency").removeClass("active");
	    		$("#general").removeClass("active");
	    		$("#bandp").removeClass("active");
			}
    	});

    	// Sidebar Selector
    	$("#side_nav").click(function() {
    		update();
    	});
    	$("#timeseries").click(function() {
    		graphType = 1;
    		$("#timeseries").addClass("active");
    		$("#scatter").removeClass("active");
    		$("#residuals").removeClass("active");
    		$("#histogram").removeClass("active");
    		$("#contingency").removeClass("active");
    		$("#general").removeClass("active");
    		$("#bandp").removeClass("active");
    	});
    	$("#scatter").click(function() {
    		graphType = 2;
    		$("#scatter").addClass("active");
    		$("#timeseries").removeClass("active");
    		$("#residuals").removeClass("active");
    		$("#histogram").removeClass("active");
    		$("#contingency").removeClass("active");
    		$("#general").removeClass("active");
    		$("#bandp").removeClass("active");
    	});
    	$("#residuals").click(function() {
    		graphType = 3;
    		$("#residuals").addClass("active");
    		$("#scatter").removeClass("active");
    		$("#timeseries").removeClass("active");
    		$("#histogram").removeClass("active");
    		$("#contingency").removeClass("active");
    		$("#general").removeClass("active");
    		$("#bandp").removeClass("active");
    	});
		$("#histogram").click(function() {
    		graphType = 4;
    		$("#histogram").addClass("active");
    		$("#scatter").removeClass("active");
    		$("#timeseries").removeClass("active");
    		$("#residuals").removeClass("active");
    		$("#contingency").removeClass("active");
    		$("#general").removeClass("active");
    		$("#bandp").removeClass("active");
    	});
		$("#contingency").click(function() {
    		graphType = 5;
    		$("#contingency").addClass("active");
    		$("#scatter").removeClass("active");
    		$("#timeseries").removeClass("active");
    		$("#residuals").removeClass("active");
    		$("#histogram").removeClass("active");
    		$("#general").removeClass("active");
    		$("#bandp").removeClass("active");
    	});
		$("#bandp").click(function() {
    		graphType = 6;
    		$("#bandp").addClass("active");
    		$("#scatter").removeClass("active");
    		$("#timeseries").removeClass("active");
    		$("#residuals").removeClass("active");
    		$("#histogram").removeClass("active");
    		$("#contingency").removeClass("active");
    		$("#general").removeClass("active");
    	});

    	update();
    	$("#scatter").hide();
		$("#residuals").hide();
		$("#contingency").hide();

    	// Update Function
    	function update() {
    		if (graphMode == '1') {
    			if (graphType == '1') {
	    			$("#chart_display").highcharts({
	    				cart: {type:'line'},
	    				title: { text: 'Hours of Sleep'},
	    				xAxis: {
	    					title: {text:'Date'},
	    					categories: date
	    				},	    	
	    				yAxis: {
				            title: {text: 'Sleep (Hours)'},
				            plotLines: [{
				                value: 0,
				                width: 1,
				                color: '#808080'
				            }]
				        },
				        series: [
				        {
				        		regression: true,
	    						regressionSettings: {
	    							type: 'linear',
                    				color:  'rgba(223, 83, 83, .9)'
	    						},
	    						name: 'Sleep',
	    						data: sleep_res,
	    						color: 'rgb(124, 181, 236)'
	    				}
				        ]
	    			});

					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Observations</h4><div class='col-md-12'>Appears that I am sleep slightly less each night (not by a large amount). Some notable outliers are: 11/22, 11/24, 12/02, 12/05 and 12/06. These may have occured due to the amount of workload or energy available during that particular day.</div></div><br><div class='row text-justify'><div class='col-md-6'><b>Direction:</b> Slightly Negative</div><div class='col-md-6'><b>Shape: </b>Multi-Modal</div><div class='col-md-6'><b>Strength:</b> Very Weak Negative Linear Correlation</div><div class='col-md-6'></div></div><div class='row text-justify'><br/><h4>Regression Parameters</h4><div class='col-md-2'><b>R:</b> -0.08</div><div class='col-md-2'><b>Coefficent: </b>7.23</div><div class='col-md-8'><b>Equation (Based on Values):</b> y = -0.08x + 7.23</div></div>");
	    		} else if (graphType == '4') {
	    			$("#chart_display").highcharts({
	    				chart: { type: 'column' },
	    				title: { text: 'Hours of Sleep Frequency' },
	    				subtitle: { text: 'Bin Size = 2'},
	    				xAxis: {
	    					title: {text: 'Hours of Sleep'},
	    					categories: sleep_hist_x
	    				},
	    				yAxis: {
	    					min: 2,
	    					title: {text: 'Frequency'}
	    				},
	    				series: [{name: 'Frequency', data: sleep_hist_y}],
	    				plotOptions: {
							column: {
						    	pointPadding: 0,
						        borderWidth: 1,
						        groupPadding: 0,
						        shadow: false
						    }
						},
						tooltip: { headerFormat: '' }
	    			});

					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Observations</h4><div class='col-md-12'>The amount of sleep is fairly on the low side and is quite rare to see find a day where I sleep more than 10 hours.</div></div><br><div class='row text-justify'><div class='col-md-6'><b>Center:</b> 6.4 Hours</div><div class='col-md-6'><b>Spread: </b>2.1 ~ 12.5 Hours</div><div class='col-md-6'><b>Modality:</b> Unimodal at 6 Hours</div><div class='col-md-6'><b>Skew: </b>Right</div><div class='col-md-6'><b>Symmetry:</b> Asymmetrical</div><div class='col-md-6'><b>Outlier: </b>Group of values between 10 and 12</div></div></div>");
	    		} else if (graphType == '6') {
	    			$("#chart_display").highcharts({
	    				chart: { type: 'boxplot'},
	    				title: { text: 'Hours of Sleep' },
	    				legend: { enabled: true},
	    				xAxis: { title: {text:'Sleep'}, categories: ['']},
	    				yAxis: { min:0, title: { text: 'Hours' }},
	    				series: [{name: 'Hours', data: [[2.1, 4.5, 6.4, 7.4, 12.5]] }],
						tooltip: { headerFormat: '' }
	    			});


					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Statistics</h4></div><div class='row text-justify'><div class='col-md-6'><b>Standard Deviation:</b> 2.593016 Hours</div><div class='col-md-6'><b>Minimum: </b>2.1 Hours</div><div class='col-md-6'><b>Maximum:</b> 12.5 Hours</div><div class='col-md-6'><b>First Quartile (Q1): </b>4.5 Hours</div><div class='col-md-6'><b>Median:</b> 6.4 Hours</div><div class='col-md-6'><b>Third Quartile (Q3): </b>7.4 Hours</div><div class='col-md-6'><b>IQR: </b>2.9 Hours</div><div class='col-md-6'><b>Mean: </b>6.255 Hours</div></div></div>");
	    		}
    		} else if (graphMode == '2') {
    			if (graphType == '1') {
	    			$("#chart_display").highcharts({
	    				chart: {type:'line'},
	    				title: { text: 'Lines of Code'},
	    				xAxis: {
	    					title: {text:'Date'},
	    					categories: date
	    				},	    				
	    				yAxis: {
				            title: {text: 'Lines of Code'},
				            plotLines: [{
				                value: 0,
				                width: 1,
				                color: '#808080'
				            }]
				        },
				        series: [{
				        		regression: true,
	    						regressionSettings: {
	    							type: 'linear',
                    				color:  'rgba(223, 83, 83, .9)'
	    						},
	    						name: 'Code',
	    						data: code_res,
	    						color: 'rgb(124, 181, 236)'
				        }]
	    			});

					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Observations</h4><div class='col-md-12'>The amount of code I write each day is growing slightly each day. Notable outliers can be found on 11/20, 12/02, 12/06 and 12/09. Many of these outliers may be due to certain projects being developed on a particular day. The highest outlier on 12/06 was most likely due to <a href='http://localhackday.mlh.io/'>Local Hack Day</a> at Bergen County Academies which is a 12-Hour Hackathon, where I developed a full project in one sitting.</div></div><br><div class='row text-justify'><div class='col-md-6'><b>Direction:</b> Slightly Positive</div><div class='col-md-6'><b>Shape: </b>Multi-Modal</div><div class='col-md-6'><b>Strength:</b> Slightly Strong Positive Linear Correlation</div><div class='col-md-6'></div></div><div class='row text-justify'><br/><h4>Regression Parameters</h4><div class='col-md-2'><b>R:</b> 0.176192</div><div class='col-md-2'><b>R&#178;: </b>0.0310436</div><div class='col-md-6'><b>Equation (Based on Values):</b> y = 20.05x + 410.82</div></div>");
				} else if (graphType == '4') {
	    			$("#chart_display").highcharts({
	    				chart: { type: 'column' },
	    				title: { text: 'Lines of Code Frequency' },
	    				subtitle: { text: 'Bin Size = 250'},
	    				xAxis: {
	    					title: {text: 'Lines of Code'},
	    					categories: code_hist_x
	    				},
	    				yAxis: {
	    					min: 1,
	    					title: {text: 'Frequency'}
	    				},
	    				series: [{name: 'Frequency', data: code_hist_y}],
	    				plotOptions: {
							column: {
						    	pointPadding: 0,
						        borderWidth: 1,
						        groupPadding: 0,
						        shadow: false
						    }
						},
						tooltip: { headerFormat: '' }
	    			});

					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Observations</h4></div><br><div class='row text-justify'><div class='col-md-6'><b>Center:</b> 654 Lines</div><div class='col-md-6'><b>Spread: </b>128 ~ 1569 Lines</div><div class='col-md-6'><b>Modality:</b> Bimodal at 250 and 750 Lines</div><div class='col-md-6'><b>Skew: </b>Right</div><div class='col-md-6'><b>Symmetry:</b> Asymmetrical</div><div class='col-md-6'><b>Outlier: </b>Value at 1750 Lines</div></div></div>");
	    		} else if (graphType == '6') {
	    			$("#chart_display").highcharts({
	    				chart: { type: 'boxplot'},
	    				title: { text: 'Lines of Code' },
	    				legend: { enabled: true},
	    				xAxis: { title: {text:'Code'}, categories: ['']},
	    				yAxis: { min:0, title: { text: 'Lines' }},
	    				series: [{name: 'Lines', data: [[128.0, 432.0, 654.0, 864.0, 1569.0]] }],
						tooltip: { headerFormat: '' }
	    			});

					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Statistics</h4></div><div class='row text-justify'><div class='col-md-6'><b>Standard Deviation:</b> 325.9291 Lines</div><div class='col-md-6'><b>Minimum: </b>128 Lines</div><div class='col-md-6'><b>Maximum:</b> 1,569 Lines</div><div class='col-md-6'><b>First Quartile (Q1): </b>432 Lines</div><div class='col-md-6'><b>Median:</b> 654 Lines</div><div class='col-md-6'><b>Third Quartile (Q3): </b>864 Lines</div><div class='col-md-6'><b>IQR: </b>432 Lines</div><div class='col-md-6'><b>Mean: </b>663.2917 Lines</div></div></div>");
	    		}
    		} else if (graphMode == '3') {
    			if (graphType == '1') {
	    			$("#chart_display").highcharts({
	    				chart: {zoomType:'xy'},
	    				title: { text: 'Hours of Sleep vs Lines of Code'},
	    				xAxis: { title: 'Date', categories: date },
	    				yAxis: [
	    					{
					            labels: {style: {color: Highcharts.getOptions().colors[3]}},
					            title: {
					                text: 'Hours of Sleep',
					                style: {color: Highcharts.getOptions().colors[3]}
					            }
	    					},
	    					{
					            labels: {style: {color: Highcharts.getOptions().colors[2]}},
					            title: {
					                text: 'Lines of Code',
					                style: {color: Highcharts.getOptions().colors[2]}
					            },
					            opposite: true
	    					}
	    				],
	    				tooltip: { shared: true },
	    				series: [
	    					{ name: 'Hours of Sleep', data: sleep, yAxis: 0, color: '#f7a35c'},
	    					{ name: 'Lines of Code', data: code, yAxis: 1, color: '#90ed7d' }
	    				]
	    			});

					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Observations</h4><div class='col-md-12'>When overlapping two of the timeplots together, a slightly similar trend can be noticed in terms of the hours of sleep and the lines of code produced per day.</div></div>");
	    		} else if (graphType == '2') {
	    			$("#chart_display").highcharts({
	    				chart: {type: 'scatter', zoomType: 'xy'},
	    				title: { text: 'Hours of Sleep vs Lines of Code'},
	    				xAxis: {
	    					title: { enabled: true, text: 'Sleep (Hours)'},
	    					startOnTick: true,
	    					endOnTick: true,
	    					showLastLabel: true
	    				},
	    				yAxis: {title: {text: 'Lines of Code'}},
	    				series: [
	    					{ 
	    						regression: true,
	    						regressionSettings: {
	    							type: 'linear',
                    				color:  'rgba(223, 83, 83, .9)'
	    						},
	    						name: 'Sleep vs Lines of Code', 
	    						data: both, 
	    						color: Highcharts.getOptions().colors[2]
	    					}
	    				]
	    			});
					$("#data_disp").html("<div class='row text-justify'><br/><h4>General Observations</h4><div class='col-md-12'>There appears to be a fairly weak correlation between sleep and the number of lines I code. Some notable outliers in the plot charts are: (2.2,1,068), (3.2, 236), (10.2, 1,569), (11, 128) and (12.5, 648).</div></div><br><div class='row text-justify'><div class='col-md-6'><b>Direction:</b> Slightly Positive</div><div class='col-md-6'><b>Strength:</b> Very Weak Positive Linear Correlation</div><div class='col-md-6'></div></div><div class='row text-justify'><br/><h4>Regression Parameters</h4><div class='col-md-4'><b>R:</b> 0.176192</div><div class='col-md-4'><b>R&#178;: </b>0.03104362</div><div class='col-md-4'><b>Coefficent:</b> 663.0985</div><div class='col-md-6'><b>Equation (Based on Values):</b> y = 21.69x + 515.54</div><div class='col-md-6'><b>Equation (Based on R Values):</b> y = 0.176192x + 663.0985</div></div></div>");
	    		}
    		}
    	}