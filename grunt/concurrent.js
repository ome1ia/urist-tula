module.exports = {

    // Опции
    options: {
        limit: 3
    },

    // Задачи разработки
//    cleanFirst: [
//        'clean',
//    ],
//    jsFirst: [
//        'newer:jshint'
//    ],
//    css: [
//        'newer:sass:dev
//    ],

    // Задачи изображений
//    imgFirst: [
//        'newer:imagemin'
//    ]

    // Производственные задачи
    prodFirst: [
        'clean:all',
        'imagemin'//,
//        'jshint'
    ],
    prodSecond: [
        'sass:prod',
        'uglify'//,
//        'imagemin'
    ],
};