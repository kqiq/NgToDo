(function () {
    angular.module('todo').controller('todocon', function ($scope) {
        let vm = this;
        vm.name = 'keyna';
        vm.isOpen = false;
        vm.determine = true;

        vm.deleteObj = deleteObj;
        vm.toDoes = [


        ]

        vm.sendData = function (obj) {
            if (obj.hasOwnProperty('header')) {
                if ((obj.header != '')) {
                    vm.toDoes.push(obj);

                } else {
                    vm.set_Err = 'you have to fill at list one filed'
                }

            }

        }


        vm.fixDesc = function (description, item) {
            if (description != '') {
                item.description = description;

            }
        }

        function deleteObj(item) {
            let index = vm.toDoes.indexOf(item);
            vm.toDoes.splice(index, 1);
        }




    });

})();