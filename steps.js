 var line = new RGraph.Line({
        id: 'cvs2',
        data: [8,9,15,16,21,23, 14, 4,13,19,18,11],
        options: {
            spline: true,
            numxticks: 11,
            numyticks: 5,
            background: {
                grid: {
                    autofit: {
                        numvlines: 11
                    }
                }
            },
            colors: ['red'],
            linewidth: 5,
            gutter: {
                left: 40,
                right: 15
            },
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            shadow: {
                color: '#aaa',
                blur: 5
            },
            tickmarks: null
        }
    }).draw()
