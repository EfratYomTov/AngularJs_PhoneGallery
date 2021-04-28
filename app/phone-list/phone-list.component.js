
function phoneListController($http){

  const self = this;

  self.orderBy = "age";

  $http.get('phones/phones.json').then((response)=> self.phones = response.data);

}

phoneListController.$inject = ['$http'];

angular.module("phoneList")
    .component("phoneList", {
        templateUrl: "phone-list/phone-list.template.html",
        controller: phoneListController
    });