export default class Service {
    putRequest(request) {
        request.setService(this);
        return request.procRequest();
    }

    serviceA(){
        return 'ServiceA';
    }

    serviceB(){
        return 'ServiceB';
    }

    serviceC(){
        return 'ServiceC';
    }
}
