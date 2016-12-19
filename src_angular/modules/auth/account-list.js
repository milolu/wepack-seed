import app from 'app.config';

const layer = require('layer');

app.controller('accountListCtrl', function($scope, neGrid, neDialog) {
    let grid = null;
    $scope.gridList = [];
    $scope.gridSel = [];

    $scope.testLayer = function() {
        let html = '<div class="ne-dialog"><button ng-click="layerBtn()">{{name}}</button></div>';
        $scope.name = 0;
        neDialog.confirm({
            content: html,
            scope: $scope
        });

        $scope.layerBtn = function() {
            $scope.name += 1;
        };
    };

    grid = neGrid.create({
        parent: '#grid',
        scope: $scope,
        isInit: false,
        columnDefs: [
            { display: 'ID', field: 'id' },
            { display: '姓名', field: 'name' },
            { display: '账号', field: 'name' },
            { display: '角色', field: 'name' },
            { display: '权限', field: 'name' }, {
                display: '操作',
                field: function(rowData) {
                    var id = rowData.id;
                    return '<a class="btn-control" ng-click="onOperateClick($event, 0, ' + id + ')" title="编辑" ><i class="fa fa-pencil-square-o"></i>&nbsp;</a>' +
                        '<a class="btn-control" ng-click="onOperateClick($event, 5, ' + id + ')" title="删除" ><i class="fa fa-trash-o"></i>&nbsp;</a>';
                },
                sort: false
            },
        ],
        resHandler: function(resData) {
            $scope.gridList = resData.data.data;
            return resData.data;
        },
        onSelect: function(array) {
            $scope.gridSel = array;
        }
    });
});
