        (function(){
            // Colour variables
            var red = "#bf616a",
                blue = "#5B90BF",
                orange = "#d08770",
                yellow = "#ebcb8b",
                green = "#a3be8c",
                teal = "#96b5b4",
                pale_blue = "#8fa1b3",
                purple = "#b48ead",
                brown = "#ab7967";


                var baseDataset = {
                    fill: 'rgba(222,225,232,0.4)',
                    stroke: 'rgba(222,225,232,1)',
                    highlight: 'rgba(222,225,232,0.8)',
                    highlightStroke: 'rgba(222,225,232,1)'
                },
                overlayDataset = {
                    fill: 'rgba(91,144,191,0.4)',
                    stroke: 'rgba(91,144,191,1)',
                    highlight: 'rgba(91,144,191,0.8)',
                    highlightStroke: 'rgba(91,144,191,1)'
                };
            var data = [],
                barsCount = 30,
                labels = new Array(barsCount),
                updateDelayMax = 500,
                $id = function(id){
                    return document.getElementById(id);
                },
                random = function(max){ return Math.round(Math.random()*100)},
                helpers = Chart.helpers;

            Chart.defaults.global.responsive = true;

            for (var i = barsCount - 1; i >= 0; i--) {
                data.push(Math.round(Math.random() * 100));
            };
            new Chart($id('canvas_bg').getContext('2d')).Bar({
                labels : labels,
                datasets : [{
                    fillColor : '#A8DEE7',
                    data : data
                }]
            },{
                showScale : false,
                barShowStroke : false,
                barValueSpacing: 1,
                showTooltips : false,
                onAnimationComplete : function(){
                    var heroChart = this,timeout;
                    this.options.onAnimationComplete = randomUpdate;
                    this.options.animationEasing = 'easeOutQuint';

                    randomUpdate();

                    function randomUpdate(){
                        heroChart.stop();
                        clearTimeout(timeout);
                        // Get a random bar
                        timeout = setTimeout(function(){
                            var randomNumberOfBars = Math.floor(Math.random() * barsCount),
                                i;
                            for (i = randomNumberOfBars - 1; i >= 0; i--) {
                                heroChart.datasets[0].bars[Math.floor(Math.random() * barsCount)].value = Math.round(Math.random() * 100);
                            };
                            heroChart.update();
                        },Math.random() * updateDelayMax);
                    };
                }
            });
        })();