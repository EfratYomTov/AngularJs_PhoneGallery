function PhoneDetailController ($routeParams, $http){
 
    const self = this;
    
    self.setCurrentImageUrl = (imageUrl) => {
        self.currentImageUrl = imageUrl;
    } 

    $http.get(`phones/${$routeParams.phoneId}.json`).then((response)=>{
        self.phone = response.data;

        self.setCurrentImageUrl(self.phone.images[0]);
    });
}

PhoneDetailController.$inject = ['$routeParams', '$http'];

angular.module("phoneDetail")
    .component("phoneDetail", {
        templateUrl: "phone-detail/phone-detail.template.html",
        controller: PhoneDetailController,
    });