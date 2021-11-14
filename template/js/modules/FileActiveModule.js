export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    $('.lic-like').on('click', function () {
        $(this).toggleClass('active');
    });

    if ($('.question-main').length) {

        $('.question-tt').on('click', function () {
            $(this).parent('.question-box').stop().toggleClass('active');
            $(this).next('.question-content').stop().slideToggle();
        });
    }

    if ($('#myChart').length) {
        var xValues = ['PO-1659', 'PO-1659', 'PO-1659', 'PO-1659', 'PO-1659', 'PO-1659', 'PO-1659', 'PO-1659'];
        var yValues = [10, 19, 20, 14, 15, 19, 16, 20];

        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    // label: 'My First Dataset',
                    fill: false,
                    // lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(248, 158, 27, 1)",
                    data: yValues,
                    pointBackgroundColor: 'black',
                },

                ]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{
                        ticks: { min: 0, max: 20 },
                        // label: 'triệu',
                    }],
                }
            }
        });
    }

}